# 🚀 Quick Start Guide - LCD Banners

## For the Impatient 😄

### Step 1: Test Locally (2 minutes)

1. **Open `index.html`** in your browser
2. Click **"📺 Open Display"** - See the carousel in action!
3. Click **"🎛️ Admin Panel"** - Edit products visually
4. Click **"💾 Export JSON"** - Download your changes
5. Replace `data/products.json` with the exported file

**That's it!** The display auto-refreshes every 60 seconds.

---

## For LCD Setup (5 minutes)

### On Your LCD Computer:

1. Open **Chrome** or **Edge** browser
2. Navigate to: `file:///path/to/lcd-banners/display.html`
   - Or host on GitHub Pages and use that URL
3. Press **F** for fullscreen (or F11)
4. Let it run 24/7!

### On Your Admin Computer:

1. Open `admin.html` in any browser
2. Edit products as needed
3. Export JSON when done
4. Upload to server or replace local file

---

## What You Get Out of the Box

✅ **18 Pre-loaded Items:**
- 10 Salad products (Caesar, Greek, Fattoush, etc.)
- 5 Combo deals (Grand Opening Special, Lunch Express, etc.)
- 2 Promotions (Build Your Own, Premium Proteins)
- 1 Grand Opening announcement

✅ **Professional Design:**
- Smooth animations and transitions
- Ken Burns effect on images
- Modern glassmorphism UI
- Bilingual support (EN/AR)

✅ **Auto-Everything:**
- Auto-rotate slides (8 seconds each)
- Auto-refresh data (every 60 seconds)
- Auto-save drafts in admin
- Auto-prevents screen sleep

---

## Common Use Cases

### Use Case 1: Daily Price Updates

1. Morning: Open admin panel
2. Update prices for today's specials
3. Export JSON
4. Replace file on server/local
5. Display updates within 60 seconds

### Use Case 2: New Product Launch

1. Open admin panel
2. Click "➕ Add Product"
3. Fill in details and image URL
4. Set `displayOrder: 0` to show first
5. Export and deploy

### Use Case 3: Seasonal Promotion

1. Open admin panel
2. Find existing promotion
3. Click edit ✏️
4. Update text and images
5. Export and deploy

### Use Case 4: Language Switch

1. Open admin panel
2. Click **AR** button in header
3. All content switches to Arabic
4. Export (saves language preference)
5. Display shows Arabic on next refresh

---

## Pro Tips 💡

### Tip 1: Use High-Quality Images
```
Good: https://images.unsplash.com/photo-XXXXX?w=1920&q=80
Bad:  http://tiny-image.jpg (low resolution)
```

### Tip 2: Test Slide Timing
- 8 seconds = Quick pace (busy cafe)
- 12 seconds = Medium pace (restaurant)
- 15 seconds = Slow pace (fine dining)

### Tip 3: Organize by Display Order
```
-1 = Announcements (show first)
0-10 = Featured products
11-20 = Regular products
21+ = Promotions
```

### Tip 4: Use Badges Effectively
- "NEW" - New menu items
- "POPULAR" - Best sellers
- "GRAND OPENING" - Special events
- "BEST VALUE" - Great deals

### Tip 5: Color Psychology
```
Green (#4CAF50) = Fresh, healthy
Red (#F44336) = Urgent, spicy
Blue (#2196F3) = Cool, calm
Orange (#FF9800) = Energetic, appetizing
Gold (#d4af37) = Premium, luxury
```

---

## Troubleshooting in 30 Seconds

### Problem: Display is blank
**Solution:** Check browser console (F12), verify `products.json` loads

### Problem: Images not showing
**Solution:** Use HTTPS image URLs, check URL is publicly accessible

### Problem: Changes not appearing
**Solution:** Wait 60 seconds, or press **R** to force reload

### Problem: Screen goes to sleep
**Solution:** Disable sleep in system settings, or install "Keep Awake" extension

### Problem: Language not switching
**Solution:** Toggle in admin, export JSON, replace file

---

## GitHub Pages Deployment (3 minutes)

### One-Time Setup:

1. Create GitHub account (if needed)
2. Create repository named `lcd-banners`
3. Upload all files from `lcd-banners/` folder
4. Go to Settings → Pages
5. Enable Pages from main branch
6. Wait 2-3 minutes for deployment

### Your URLs:

```
Display: https://yourusername.github.io/lcd-banners/display.html
Admin:   https://yourusername.github.io/lcd-banners/admin.html
```

### Update Workflow:

1. Edit on local admin panel
2. Export JSON
3. Upload to GitHub (web interface or git push)
4. Display auto-refreshes within 60 seconds

---

## File Structure at a Glance

```
lcd-banners/
├── index.html           ← Landing page
├── display.html         ← Open this on LCD
├── admin.html           ← Open this to edit
├── data/
│   └── products.json    ← Replace this file to update
└── assets/              ← Don't touch (CSS/JS)
```

---

## Next Steps

📖 **Read full documentation:** See `README.md` for comprehensive guide

🎨 **Customize design:** Edit `assets/css/display.css` for custom styling

🖼️ **Add your images:** Upload to `assets/images/` or use URLs

🌐 **Go live:** Deploy to GitHub Pages or your own server

💬 **Need help?** Check browser console (Ctrl+Shift+J) for debug info

---

## Your First 5 Minutes Checklist

- [ ] Open `index.html` - See the welcome page
- [ ] Open `display.html` - Watch the carousel
- [ ] Press **F** for fullscreen
- [ ] Open `admin.html` - Explore the editor
- [ ] Click **EN/AR** button - Test language switch
- [ ] Edit any product - Click ✏️ on a card
- [ ] Export JSON - Click 💾 Export JSON button
- [ ] Check the download - Open downloaded `products.json`
- [ ] Preview mode - Click 👁️ Preview in admin
- [ ] Add new product - Click ➕ Add Product

**Congratulations!** You now know everything you need. 🎉

---

**Built with ❤️ for Spool and beyond!**

_Pro tip: Bookmark the admin.html page on your phone for quick edits on-the-go!_
