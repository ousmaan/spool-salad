# 📱 Progressive Web App (PWA) Setup Guide

## Overview
The Spool Salad Terminal System is now a Progressive Web App (PWA), which means it can be installed on any device like a native app!

## ✨ Features

### 📲 Installable
- Install on phones, tablets, and computers
- Works like a native app
- No app store needed
- One-click installation

### 🚀 Fast & Offline
- Service worker caches resources
- Works offline after first load
- Faster subsequent loads
- Reduced data usage

### 🎯 Platform Support
- ✅ Android (Chrome, Edge, Samsung Internet)
- ✅ iOS/iPadOS (Safari 16.4+)
- ✅ Windows (Chrome, Edge)
- ✅ macOS (Chrome, Safari, Edge)
- ✅ Linux (Chrome, Firefox, Edge)

## 📋 Requirements

### 1. App Icons (Required)
You need to create icons in the following sizes and place them in `assets/images/`:

- `icon-72x72.png` - 72x72 pixels
- `icon-96x96.png` - 96x96 pixels
- `icon-128x128.png` - 128x128 pixels
- `icon-144x144.png` - 144x144 pixels
- `icon-152x152.png` - 152x152 pixels
- `icon-192x192.png` - 192x192 pixels (minimum required)
- `icon-384x384.png` - 384x384 pixels
- `icon-512x512.png` - 512x512 pixels (required for Android)

**Icon Requirements:**
- Square format (1:1 ratio)
- PNG format with transparency
- Simple, recognizable design
- Works on both light and dark backgrounds

### 2. HTTPS or Localhost (Required)
PWAs require a secure connection:
- ✅ `https://` - Production deployment
- ✅ `http://localhost` - Local development/testing
- ❌ `http://` (other) - Will NOT work

### 3. Web Server (Required)
Cannot run from `file://` protocol. Use:
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx http-server`
- **PHP**: `php -S localhost:8000`
- **VS Code**: Live Server extension

## 🎨 Creating Icons

### Option 1: Using Your Logo
1. Open your logo in an image editor (Photoshop, GIMP, etc.)
2. Resize to each required size
3. Export as PNG with transparency
4. Save to `assets/images/` with correct names

### Option 2: Online Icon Generators
1. **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator
2. **Favicon Generator**: https://realfavicongenerator.net/
3. **App Icon Generator**: https://appicon.co/

Upload your logo and download all sizes.

### Option 3: Using ImageMagick (Command Line)
```bash
# Install ImageMagick first
# Then run from your logo directory:

convert logo.png -resize 72x72 icon-72x72.png
convert logo.png -resize 96x96 icon-96x96.png
convert logo.png -resize 128x128 icon-128x128.png
convert logo.png -resize 144x144 icon-144x144.png
convert logo.png -resize 152x152 icon-152x152.png
convert logo.png -resize 192x192 icon-192x192.png
convert logo.png -resize 384x384 icon-384x384.png
convert logo.png -resize 512x512 icon-512x512.png
```

## 📱 Installation Instructions

### For Android (Chrome/Edge)

1. **Open the website** in Chrome or Edge
2. Look for **"Add to Home Screen"** banner at the bottom
3. Or tap the **⋮ menu** → **"Add to Home Screen"** or **"Install app"**
4. Tap **"Install"** or **"Add"**
5. The app icon appears on your home screen!

**Pro Tip**: For kiosk mode, install and then enable "Kiosk Mode" in Android settings.

### For iOS/iPadOS (Safari)

1. **Open the website** in Safari
2. Tap the **Share button** (square with arrow)
3. Scroll down and tap **"Add to Home Screen"**
4. Edit the name if desired
5. Tap **"Add"**
6. The app icon appears on your home screen!

**Note**: iOS requires Safari. Chrome/Edge won't show install option on iOS.

### For Windows/Mac (Desktop)

1. **Open the website** in Chrome or Edge
2. Look for **install icon** (⊕) in the address bar
3. Or click **⋮ menu** → **"Install Spool Salad Terminal"**
4. Click **"Install"**
5. The app opens in its own window!

**Features**:
- Runs in standalone window
- No browser UI
- Desktop shortcut created
- Can be pinned to taskbar

## 🧪 Testing Your PWA

### 1. Check PWA Readiness
Open Chrome DevTools:
1. Press `F12` or `Ctrl+Shift+I`
2. Go to **Lighthouse** tab
3. Select **Progressive Web App**
4. Click **Generate report**
5. Review the checklist

### 2. Test Service Worker
1. Open DevTools → **Application** tab
2. Click **Service Workers** in sidebar
3. Verify service worker is registered
4. Check **Offline** checkbox
5. Reload page - should still work!

### 3. Test Installation
1. Open site in Chrome
2. Look for install banner/button
3. Try installing on different devices
4. Verify it opens in standalone mode

## 🚀 Deployment

### Requirements for Production
1. ✅ Valid SSL certificate (HTTPS)
2. ✅ All icon files present
3. ✅ manifest.json accessible
4. ✅ service-worker.js accessible
5. ✅ Proper MIME types configured

### Recommended Web Servers
- **Netlify**: Automatic HTTPS, easy deployment
- **Vercel**: Fast, free tier available
- **GitHub Pages**: Free hosting with HTTPS
- **Firebase Hosting**: Google's hosting solution
- **Nginx/Apache**: Traditional web servers

### Server Configuration
Ensure your server serves:
- `manifest.json` with MIME type `application/manifest+json`
- `service-worker.js` with MIME type `application/javascript`

## 🎯 Shortcuts

The PWA includes app shortcuts for quick access:
- **Staff Terminal** - Opens staff order interface
- **Customer Terminal** - Opens customer self-service
- **Admin Panel** - Opens configuration panel

Available on Android (long-press app icon) and Windows (right-click app icon).

## 🔄 Updates

When you update the app:
1. Update version in `service-worker.js` (change `CACHE_NAME`)
2. Users will see update prompt on next visit
3. They can reload to get the latest version

## 🐛 Troubleshooting

### Install Button Doesn't Appear
- ✅ Check you're using HTTPS or localhost
- ✅ Verify all icons exist
- ✅ Check manifest.json is valid
- ✅ Try Chrome DevTools → Application → Manifest

### Service Worker Not Registering
- ✅ Check browser console for errors
- ✅ Verify service-worker.js path is correct
- ✅ Clear browser cache and reload
- ✅ Check HTTPS is working

### App Not Working Offline
- ✅ Visit all pages once while online
- ✅ Check service worker is active (DevTools)
- ✅ Verify caching strategy in service-worker.js

### Icons Not Showing
- ✅ Verify icon files exist in correct location
- ✅ Check file names match manifest.json
- ✅ Clear cache and reinstall app
- ✅ Check icon file sizes are correct

## 📊 Browser Support

| Browser | Desktop | Mobile | Install Support |
|---------|---------|--------|-----------------|
| Chrome | ✅ | ✅ | ✅ |
| Edge | ✅ | ✅ | ✅ |
| Safari | ✅ | ✅ | ✅ (iOS 16.4+) |
| Firefox | ✅ | ✅ | ⚠️ Limited |
| Samsung Internet | - | ✅ | ✅ |

## 💡 Best Practices

1. **Always use HTTPS** in production
2. **Test on real devices** before deployment
3. **Keep service worker updated** for cache management
4. **Monitor app performance** with Lighthouse
5. **Provide update notifications** when new version available

## 🎓 Additional Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [PWA Builder](https://www.pwabuilder.com/)

---

**Your Spool Salad Terminal is now ready to be installed on any device! 🎉**
