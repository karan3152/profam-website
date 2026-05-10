from PIL import Image
import os

# Open the image
img_path = r"D:\Karan project\profam-website\profam-website\ChatGPT Image May 10, 2026, 06_28_58 PM.png"
img = Image.open(img_path)

# Image dimensions
width, height = img.size

# Grid is 4 columns, 2 rows
cols = 4
rows = 2

# Calculate width and height of each slice
slice_width = width // cols
slice_height = height // rows

# Target directory
out_dir = r"D:\Karan project\profam-website\profam-website\public\services"
os.makedirs(out_dir, exist_ok=True)

names = [
    "full-home-cleaning",
    "bathroom-cleaning",
    "fridge-cleaning",
    "appliance-repair",
    "ac-services",
    "beauty-spa",
    "carpentry",
    "pest-control"
]

idx = 0
for r in range(rows):
    for c in range(cols):
        left = c * slice_width
        top = r * slice_height
        right = left + slice_width
        bottom = top + slice_height
        
        # Crop the slice
        img_slice = img.crop((left, top, right, bottom))
        
        # The bottom text label is taller than we thought. 
        # We will crop out the bottom 25% of the slice height.
        text_height = int(slice_height * 0.25)
        img_slice = img_slice.crop((0, 0, slice_width, slice_height - text_height))
        
        # Save
        out_path = os.path.join(out_dir, f"{names[idx]}.jpg")
        img_slice.convert('RGB').save(out_path, quality=90)
        idx += 1

print("Done cropping 8 images with a larger bottom trim!")
