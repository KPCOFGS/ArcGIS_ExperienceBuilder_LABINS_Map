import zipfile
import os
import sys

# Get file paths and app URL from environment variables or command-line arguments
zip_file_path = os.getenv('ZIP_FILE_PATH', sys.argv[0])
config_file_name = 'config.json'

# Open the zip file
with zipfile.ZipFile(zip_file_path, 'r') as zip_ref:
    # Extract the config file
    zip_ref.extract(config_file_name)
    # Read the content of the config file
    with open(config_file_name, 'r') as file:
        config_content = file.read()
    # Replace 'localhost' with 'appURL'
    modified_content = config_content.replace('https://localhost:3001/builder/', "${appResourceUrl}/")
    # Write the modified content back to the config file
    with open(config_file_name, 'w') as file:
        file.write(modified_content)
    # Close the config file
    file.close()
    # Close the zip file
    zip_ref.close()

# Re-zip the modified file
with zipfile.ZipFile(zip_file_path, 'w') as zip_ref:
    zip_ref.write(config_file_name)
    # Remove the temporarily extracted config file
    os.remove(config_file_name)
