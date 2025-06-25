
# Image Management Guide

This folder contains all local images for the Podium Zagreb website.

## Folder Structure

Create the following folders in `/public/images/`:

- `about/` - Images for the About page
- `home/` - Images for the Home page  
- `treatments/` - Images for individual treatment pages
- `elements/` - Images for The 5 Elements page

## How to Add Your Own Images

1. **Create the folder structure** in `/public/images/`:
   ```
   public/
   └── images/
       ├── about/
       ├── home/
       ├── treatments/
       └── elements/
   ```

2. **Add your images** with these exact names:

   **About Page:**
   - `podium-salon-interior.jpg` - Main hero image (horizontal)
   - `treatment-room.jpg` - Embedded left image
   - `wellness-area.jpg` - Embedded right image

   **Home Page:**
   - `podium-salon.jpg` - Hero section image

   **Treatment Pages:**
   - `facial-rejuvenation.jpg` - Facial treatment image
   - `body-wellness.jpg` - Body wellness image
   - `anti-aging.jpg` - Anti-aging therapy image

   **5 Elements Page:**
   - `wood.jpg` - Wood element image
   - `fire.jpg` - Fire element image
   - `earth.jpg` - Earth element image
   - `metal.jpg` - Metal element image
   - `water.jpg` - Water element image

3. **Image Requirements:**
   - Use `.jpg`, `.png`, or `.webp` formats
   - Recommended dimensions vary by usage (see comments in `/src/config/images.ts`)
   - Keep file sizes reasonable for web (under 1MB each)

4. **Fallback System:**
   - If your local image doesn't exist, the app will show a placeholder
   - Unsplash images are used as fallbacks for treatment pages
   - The system handles missing images gracefully

## Updating Image Paths

To change image names or add new images, edit `/src/config/images.ts`
