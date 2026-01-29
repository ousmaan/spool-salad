# 🎨 Quick Icon Generation Guide

## You Need Icons!

Your PWA needs icons to be installable. Here's how to create them quickly:

## 🚀 Fastest Method: Online Generator

### Step 1: Choose Your Base Image
Use one of your existing logos:
- `assets/images/logo-transparent.png`
- `assets/images/Logo.png`

### Step 2: Use PWA Builder
1. Go to: https://www.pwabuilder.com/imageGenerator
2. Upload your logo
3. Select "Android" platform
4. Click "Generate"
5. Download the ZIP file

### Step 3: Extract and Move
1. Unzip the downloaded file
2. Copy all `icon-*.png` files
3. Paste into `spool-salad/assets/images/`

Done! Your PWA is now installable!

## 📐 Required Icon Sizes

Place these in `assets/images/`:

```
icon-72x72.png
icon-96x96.png
icon-128x128.png
icon-144x144.png
icon-152x152.png
icon-192x192.png  ← Minimum required
icon-384x384.png
icon-512x512.png  ← Required for Android
```

## 🛠️ Manual Method (If Needed)

### Using ImageMagick (Windows/Mac/Linux)

```bash
# Navigate to spool-salad directory
cd spool-salad/assets/images

# Convert your logo to all required sizes
magick logo-transparent.png -resize 72x72 icon-72x72.png
magick logo-transparent.png -resize 96x96 icon-96x96.png
magick logo-transparent.png -resize 128x128 icon-128x128.png
magick logo-transparent.png -resize 144x144 icon-144x144.png
magick logo-transparent.png -resize 152x152 icon-152x152.png
magick logo-transparent.png -resize 192x192 icon-192x192.png
magick logo-transparent.png -resize 384x384 icon-384x384.png
magick logo-transparent.png -resize 512x512 icon-512x512.png
```

### Using Photoshop/GIMP
1. Open `logo-transparent.png`
2. For each size:
   - Image → Image Size
   - Set width AND height to required size
   - Keep "Constrain Proportions" checked
   - Export as PNG
   - Save as `icon-[size].png`

## ✅ Verify Icons

After creating icons, check:
```
✅ All 8 icon files exist
✅ Files are in assets/images/
✅ Files are named correctly (icon-72x72.png, etc.)
✅ Files are PNG format
✅ Files are square (same width and height)
```

## 🧪 Test Installation

1. Start a local server:
   ```bash
   cd spool-salad
   python -m http.server 8000
   ```

2. Open browser: `http://localhost:8000`

3. Look for install icon in address bar (Chrome/Edge)

4. Click install and verify icon appears correctly

## 🚨 Troubleshooting

**Icons not showing?**
- Clear browser cache
- Check file paths in manifest.json
- Verify files are actually PNG (not renamed JPG)
- Check file permissions

**Can't install app?**
- Icons might be missing
- Must use HTTPS or localhost
- Check browser console for errors

---

**Need help?** Check `docs/PWA_SETUP.md` for complete guide!
