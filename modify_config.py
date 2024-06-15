import os
import json
import zipfile
import shutil
import tempfile
import argparse

def modify_json(file_path):
    with open(file_path, 'r+') as f:
        data = json.load(f)
        data = json.dumps(data).replace('https://localhost:3001/builder/', '${appResourceUrl}/')
        f.seek(0)
        f.write(data)
        f.truncate()

def process_zip(zip_path):
    temp_dir = tempfile.mkdtemp()
    try:
        with zipfile.ZipFile(zip_path, 'r') as zip_ref:
            zip_ref.extractall(temp_dir)

        modified = False
        for root, dirs, files in os.walk(temp_dir):
            for file in files:
                if file == 'config.json' and '/cdn/' in root:
                    modify_json(os.path.join(root, file))
                    modified = True
                    break
            if modified:
                break

        if modified:
            shutil.make_archive(os.path.splitext(zip_path)[0], 'zip', temp_dir)
            print("Modification successful. New zip file created.")
        else:
            print("No files found matching the criteria.")
    finally:
        shutil.rmtree(temp_dir)

parser = argparse.ArgumentParser(description='Modify config.json files in a zip file.')
parser.add_argument('file_path', type=str, help='Path to the input zip file')
args = parser.parse_args()

process_zip(args.file_path)
