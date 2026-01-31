# 📺 LCD Banners - Digital Menu Display System

A professional web-based digital signage solution for displaying product prices and promotions on large LCD screens. Perfect for restaurants, cafes, retail stores, and more!

## 🌟 Features

### Display Features
- 🎬 **Smooth Carousel** - Auto-rotating slides with professional transitions
- 🎨 **Multiple Content Types** - Products, combos, promotions, announcements
- 🖼️ **Ken Burns Effect** - Subtle image zoom animations
- 🌐 **Bilingual Support** - English and Arabic (switchable globally)
- 🔄 **Auto-Refresh** - Automatically fetches new data without manual reload
- 💫 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 📊 **Progress Bar** - Visual indicator of slide timing
- 🔓 **Wake Lock** - Prevents screen from sleeping

### Admin Features
- ✏️ **Full CRUD** - Create, Read, Update, Delete products
- 🌐 **Language Toggle** - Switch between English and Arabic globally
- 👁️ **Live Preview** - See how display looks before exporting
- 💾 **Auto-Save Draft** - Changes saved to browser storage automatically
- 📤 **Export JSON** - One-click download of updated data
- 📥 **Import JSON** - Load existing configuration
- 🎨 **Color Picker** - Customize accent colors per product
- 🔢 **Display Order** - Control slide sequence
- 🚫 **Enable/Disable** - Hide products without deleting
- 📋 **Duplicate** - Quick copy of existing products
- 🏷️ **Badges** - Add "NEW", "POPULAR", "GRAND OPENING" tags

## 📁 Project Structure

```
lcd-banners/
├── display.html              # Main display (open on LCD)
├── admin.html                # Admin panel (edit products)
├── data/
│   └── products.json         # Product data (replace to update)
├── assets/
│   ├── css/
│   │   ├── display.css       # Display styling
│   │   └── admin.css         # Admin panel styling
│   ├── js/
│   │   ├── display.js        # Display logic
│   │   └── admin.js          # Admin logic
│   └── images/               # Your product images (optional)
└── README.md
```

## 🚀 Quick Start

### Option 1: Local Setup (Easiest)

1. **Download or clone this folder**
2. **Open `admin.html`** in your browser
3. **Edit products** - Add, edit, or delete items
4. **Click "Export JSON"** - Download the updated `products.json`
5. **Replace** `data/products.json` with your exported file
6. **Open `display.html`** on your LCD screen
7. **Press F** to enter fullscreen mode

### Option 2: GitHub Pages Hosting

1. **Create a GitHub repository** named `lcd-banners`
2. **Upload all files** to the repository
3. **Enable GitHub Pages** in repository settings
   - Go to Settings → Pages
   - Source: Deploy from main branch
   - Folder: / (root)
4. **Access your site** at `https://yourusername.github.io/lcd-banners/`
5. **Open display.html** on LCD: `https://yourusername.github.io/lcd-banners/display.html`

## 🖥️ LCD Display Setup

### Hardware Setup
1. Mount your 50" LCD in landscape orientation
2. Connect a computer (Mini PC, Raspberry Pi, or laptop)
3. Ensure stable internet connection (for auto-refresh)

### Browser Setup
1. Open `display.html` in **Chrome** or **Edge** (recommended)
2. Press **F11** for fullscreen (or click and press F)
3. Set browser to **prevent sleep**:
   - Chrome: Install "Keep Awake" extension
   - Or use system settings to disable screen sleep

### Kiosk Mode (Optional)
For fully locked-down display:

**Chrome (Windows):**
```
chrome.exe --kiosk --incognito "http://localhost/lcd-banners/display.html"
```

**Chrome (Linux/Mac):**
```
google-chrome --kiosk --incognito "http://localhost/lcd-banners/display.html"
```

## 📝 Using the Admin Panel

### Basic Workflow

1. **Open `admin.html`** in any browser (desktop, tablet, or phone)
2. **Edit products** using the visual interface
3. **Export JSON** when done editing
4. **Upload** the new `products.json` to replace the old one
5. **Display auto-updates** within 60 seconds

### Language Settings

- Toggle **EN/AR** button in header to switch languages
- Change affects both admin panel AND display
- Language setting is saved in the exported JSON

### Adding a New Product

1. Click **"➕ Add Product"** button
2. Fill in the form:
   - **Type**: Product, Combo, Promotion, or Announcement
   - **Name**: English and Arabic names
   - **Price**: In your currency (default: SAR)
   - **Description**: Brief details
   - **Image URL**: Link to product image (Unsplash, etc.)
   - **Accent Color**: Custom color for this item
   - **Display Order**: Lower numbers show first
3. Click **"Save Changes"**

### Editing Existing Product

1. Click the **✏️ Edit** icon on any product card
2. Modify fields in the modal
3. Click **"Save Changes"**

### Other Actions

- **👁️/🚫** - Enable/disable product (hide without deleting)
- **📋** - Duplicate product (quick copy)
- **🗑️** - Delete product (permanent)
- **💾 Save Draft** - Manual save to browser storage
- **📂 Load Draft** - Restore from browser storage
- **📤 Import JSON** - Load existing products.json file

## 🎨 Customization

### Display Settings

In the admin panel sidebar, you can customize:

- **Shop Name** (English & Arabic)
- **Tagline** (English & Arabic)
- **Slide Interval** (how long each slide shows)
- **Auto-Refresh Interval** (how often to check for updates)
- **Currency** (SAR, USD, EUR, etc.)
- **Primary Color** (main brand color)
- **Accent Color** (highlight color)

### Image Sources

You can use images from:
- **Unsplash** - Free high-quality photos: https://unsplash.com
- **Your Server** - Upload to `assets/images/` folder
- **CDN** - Any public image URL

Example Unsplash URL:
```
https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80
```

## 📦 Product Data Structure

The `products.json` file contains:

```json
{
  "settings": {
    "shopName": "Your Shop",
    "language": "en",
    "slideInterval": 8000,
    "currency": "SAR",
    ...
  },
  "products": [
    {
      "id": "prod-001",
      "type": "product",
      "name": "Product Name",
      "nameAr": "اسم المنتج",
      "price": 25,
      "description": "Description here",
      "imageUrl": "https://...",
      "accentColor": "#4CAF50",
      "active": true,
      "displayOrder": 1
    }
  ]
}
```

### Product Types

- **product** - Individual menu items
- **combo** - Bundle deals (shows original price + savings)
- **promotion** - Special offers (e.g., "Build Your Own")
- **announcement** - Full-screen messages (e.g., "Grand Opening")

## 🔧 Troubleshooting

### Display not updating after changing JSON

1. Check that new `products.json` is uploaded correctly
2. Wait 60 seconds (default refresh interval)
3. Or press **R** key on display to force reload
4. Check browser console (Ctrl+Shift+J) for errors

### Images not showing

1. Verify image URL is publicly accessible
2. Check for HTTPS (some browsers block HTTP images)
3. Use Unsplash or other reliable CDN
4. Check browser console for errors

### Fullscreen not working

1. Click anywhere on screen first (browsers require user interaction)
2. Press **F** key or **F11**
3. Or use browser kiosk mode (see setup section)

### Language not changing

1. Toggle language in admin panel header
2. Export new JSON file
3. Replace `data/products.json`
4. Display will update on next refresh

### Display goes to sleep

1. Enable "Keep Awake" browser extension
2. Or disable sleep in system settings
3. Or use `wakeLock` API (already implemented in code)

## 🎯 Best Practices

### Content
- **High-quality images** - Use 1920x1080 or higher resolution
- **Clear pricing** - Make prices prominent and easy to read
- **Short descriptions** - Keep text concise (2-3 lines max)
- **Consistent style** - Use similar image styles across products

### Performance
- **Optimize images** - Compress before uploading
- **Limit slides** - 15-25 slides for ~3-5 minute loop
- **Test timing** - Adjust slide interval based on viewing distance

### Maintenance
- **Regular updates** - Keep content fresh weekly
- **Monitor display** - Check daily for errors
- **Backup JSON** - Save copies before major changes
- **Test before deploying** - Use preview mode in admin

## 🚀 Advanced Tips

### Auto-Update from Cloud

Host `products.json` on a cloud storage service:
1. Upload to Dropbox, Google Drive (with public link)
2. Update display.js to fetch from cloud URL
3. Edit products anywhere, updates propagate automatically

### Multiple Locations

Run multiple displays with different content:
1. Create separate JSON files (products-location1.json, etc.)
2. Modify display.html to load specific JSON per location
3. Or host separate GitHub Pages for each location

### Analytics

Track what customers see:
1. Add Google Analytics to display.html
2. Track slide impressions with custom events
3. Analyze which products get most views

## 📋 Keyboard Shortcuts

**Display Page:**
- **F** - Enter fullscreen
- **R** - Reload data
- **C** - Console help (shows dev tools instructions)

**Admin Panel:**
- **Ctrl+S** - Export JSON (when editing)

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Vue.js 3 (CDN)
- **Styling**: Modern CSS (Grid, Flexbox, CSS Variables)
- **Animations**: CSS Transitions & Keyframes
- **Storage**: JSON file + localStorage (drafts)
- **Images**: External URLs (Unsplash, CDN, or local)

## 📞 Support

### Common Questions

**Q: Can I use this offline?**
A: Yes! Host locally and point to local `products.json`. Auto-refresh won't work without internet.

**Q: Can I add videos?**
A: Not in current version. You could add video backgrounds in CSS.

**Q: How many slides can I add?**
A: No limit, but 15-30 is recommended for good user experience.

**Q: Can I change fonts?**
A: Yes! Edit CSS files to use custom fonts (Google Fonts, etc.).

**Q: Does it work on iPad/tablet?**
A: Yes! Both display and admin work on any modern browser.

## 📄 License

Free to use for personal and commercial projects.

---

**Built with ❤️ for modern digital signage**

Need help? Check the browser console for debug messages!
