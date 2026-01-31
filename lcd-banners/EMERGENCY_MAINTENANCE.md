# 🚨 Emergency Maintenance Mode

## Quick Activation

### Method 1: Direct URL Change (Fastest!)
1. On your LCD, change the URL to:
   ```
   https://YOUR-USERNAME.github.io/lcd-banners/maintenance.html
   ```
2. Refresh the page
3. Done!

### Method 2: Swap Files on GitHub (Auto-updates LCD)
1. Go to your GitHub repository
2. Click on `display.html`
3. Click edit (pencil icon)
4. Click three dots → Rename
5. Rename to: `display-backup.html`
6. Commit

7. Click on `maintenance.html`
8. Click edit (pencil icon)
9. Click three dots → Rename
10. Rename to: `display.html`
11. Commit

12. Wait 60 seconds - LCD auto-refreshes!

### Method 3: Upload and Redirect
1. Upload `maintenance.html` to GitHub
2. Change URL on LCD
3. Or wait for auto-refresh

---

## To Go Back Live

### Restore Original Display:
1. Rename `display.html` → `maintenance.html`
2. Rename `display-backup.html` → `display.html`
3. Commit
4. Wait 60 seconds for auto-refresh

---

## Maintenance Page Shows

In Arabic:
- ⚙️ Animated gear icon
- **"جاري تحديث القائمة"** (Updating menu)
- **"نعمل على تحديث الأسعار"** (Working on prices)
- **"نعتذر عن الإزعاج"** (Sorry for inconvenience)
- Info box with:
  - ⏰ Update completing soon
  - 🥗 Orders still available at cashier
  - 📞 Ask our staff for help
- Your Spool logo
- Professional design with animations
- Auto-refreshes every 2 minutes

---

## Fix Prices Quickly

1. Go to your repository
2. Navigate to `data/products.json`
3. Click edit (pencil icon)
4. Update prices
5. Commit changes
6. Test on admin panel
7. When ready, restore display.html

---

## Emergency Contact

If you need to take down the display immediately:
- Just close Chrome on the LCD
- Or change URL to maintenance.html
- Or turn off the LCD screen

Simple! 🚀
