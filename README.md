# ArcGIS_ExBDev_Icon_Fix

This script is intended to fix an issue where when a map is developed in the Experience Builder Developer, the icons show an "X" mark when passed onto the server

You can further automate this by setting up a daily system task that will activate this script whenever the map gets updated

## Installation

```bash
git clone https://github.com/KPCOFGS/ArcGIS_ExBDev_Icon_Fix.git
cd ArcGIS_ExBDev_Icon_Fix
```

## Parameter

`file_path` Required. Path to the `.zip` file

## Example Usage

`python3 modify_config.py map.zip`

`python3 modify_config.py /home/user/Downloads/map.zip`

`python3 modify_config.py ./Downloads/map.zip`

## Notes
* The script assumes the map is in `.zip` file already
* The script assumes there is only one sub-directory after `/cdn/` folder
* The script assumes there is only one `config.json` file after `/cdn/sub_directory/` folder
* The script assumes `/cdn/sub_directory/config.json` is the  correct json file that has the path to icon images
