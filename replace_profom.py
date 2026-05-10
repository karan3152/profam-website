import os
import re

search_dir = r"D:\Karan project\profam-website\profam-website\src"

def replace_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Case-insensitive replacement of Profam to ProFom
    # This regex matches Profam, ProFam, PROFAM, profam etc.
    new_content = re.sub(r'(?i)profam', 'ProFom', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {filepath}")

for root, dirs, files in os.walk(search_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            replace_in_file(os.path.join(root, file))

print("Done replacing!")
