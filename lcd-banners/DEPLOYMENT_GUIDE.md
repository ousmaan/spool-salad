# 🚀 GitHub Pages Deployment Guide

## Step-by-Step Instructions

### Option 1: GitHub Web Interface (Easiest - No Git Required)

#### Step 1: Create GitHub Account
1. Go to https://github.com
2. Click **"Sign up"** (if you don't have an account)
3. Or **"Sign in"** if you already have one

#### Step 2: Create New Repository
1. Click the **"+"** icon in top-right corner
2. Click **"New repository"**
3. Repository name: `lcd-banners`
4. Description (optional): `Digital menu display system for Spool`
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license
7. Click **"Create repository"**

#### Step 3: Upload Files
1. On the repository page, you'll see **"uploading an existing file"** link
2. Click it
3. **Drag and drop ALL files** from your `lcd-banners` folder:
   ```
   ✅ display.html
   ✅ admin.html
   ✅ index.html
   ✅ logo transparent.png
   ✅ data/ folder (with products.json inside)
   ✅ assets/ folder (with all CSS/JS files inside)
   ✅ QUICK_START.md
   ✅ README.md
   ✅ START_SERVER.bat
   ✅ OPEN_DISPLAY.bat
   ✅ OPEN_ADMIN.bat
   ✅ .gitignore
   ```
4. Wait for upload to complete
5. Commit message: `Initial deployment of LCD Banners`
6. Click **"Commit changes"**

#### Step 4: Enable GitHub Pages
1. In your repository, click **"Settings"** tab (top menu)
2. Scroll down and click **"Pages"** in left sidebar
3. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**
5. Wait 2-3 minutes for deployment

#### Step 5: Get Your URLs
GitHub will show you the URL (usually takes 2-3 minutes):

```
https://YOUR-USERNAME.github.io/lcd-banners/
```

Your pages will be:
- **Landing:** https://YOUR-USERNAME.github.io/lcd-banners/
- **Display:** https://YOUR-USERNAME.github.io/lcd-banners/display.html
- **Admin:** https://YOUR-USERNAME.github.io/lcd-banners/admin.html

---

### Option 2: GitHub Desktop (Recommended for Future Updates)

#### Step 1: Install GitHub Desktop
1. Download from: https://desktop.github.com
2. Install and sign in with your GitHub account

#### Step 2: Create Repository
1. Click **"Create a New Repository"**
2. Name: `lcd-banners`
3. Local path: Choose where to save
4. Click **"Create Repository"**

#### Step 3: Add Your Files
1. Copy ALL files from your `lcd-banners` folder
2. Paste into the new repository folder
3. GitHub Desktop will show all new files

#### Step 4: Commit and Push
1. In GitHub Desktop, you'll see all files listed
2. Summary (required): `Initial deployment`
3. Click **"Commit to main"**
4. Click **"Publish repository"** button
5. Uncheck **"Keep this code private"** (Pages needs public)
6. Click **"Publish Repository"**

#### Step 5: Enable GitHub Pages
Follow Step 4 from Option 1 above

---

## 🎯 After Deployment

### Test Your Live Site
1. Open: `https://YOUR-USERNAME.github.io/lcd-banners/display.html`
2. Should see the carousel with Arabic text by default
3. Press **F** for fullscreen
4. Verify all slides work

### Set Up LCD Screen
1. On your 50" LCD computer, open Chrome/Edge
2. Navigate to: `https://YOUR-USERNAME.github.io/lcd-banners/display.html`
3. Press **F11** for fullscreen
4. Bookmark it (Ctrl+D)
5. Set as startup page in browser settings

### Update Workflow (When You Need to Change Products/Prices)

#### Method 1: Direct Edit on GitHub (Quickest)
1. Go to your repository on GitHub
2. Navigate to `data/products.json`
3. Click **pencil icon** (Edit this file)
4. Make your changes
5. Click **"Commit changes"**
6. Wait 30-60 seconds
7. Display auto-refreshes on LCD!

#### Method 2: Admin Panel + Upload (Best)
1. Open `http://localhost:8000/admin.html` (locally)
2. Edit products in admin panel
3. Click **"Export JSON"**
4. Go to GitHub → `data/products.json`
5. Click edit, paste new content
6. Commit changes

#### Method 3: GitHub Desktop (For Multiple Files)
1. Make changes locally
2. Open GitHub Desktop
3. You'll see changed files
4. Write commit message
5. Click **"Commit to main"**
6. Click **"Push origin"**
7. Changes go live in 30-60 seconds!

---

## 🔧 Important Notes

### Custom Domain (Optional)
Want `menu.spool.sa` instead of `github.io`?

1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. In GitHub repo → Settings → Pages
3. Enter custom domain: `menu.spool.sa`
4. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: menu (or @)
   Value: YOUR-USERNAME.github.io
   ```
5. Wait for DNS propagation (5-30 minutes)

### HTTPS
- GitHub Pages automatically provides HTTPS ✅
- No SSL certificate needed!
- Works immediately

### Auto-Refresh
- Display checks for updates every 60 seconds
- Change this in `products.json` → `autoRefreshInterval`
- Value in milliseconds (60000 = 60 seconds)

### Limitations
- ⚠️ Repository must be PUBLIC (for free Pages)
- ⚠️ No backend/database (static files only)
- ⚠️ Max 1GB repository size
- ⚠️ 100GB bandwidth per month (plenty for your use!)

---

## 🆘 Troubleshooting

### "404 Not Found"
- Wait 5 minutes after enabling Pages
- Check repository is public
- Verify files are in root (not subfolder)

### "Display shows OFFLINE"
- Check `data/products.json` uploaded correctly
- Verify file path is correct
- Check browser console for errors (F12)

### "Changes not showing"
- Wait 60 seconds for auto-refresh
- Or hard refresh: Ctrl+F5
- Check commit went through on GitHub

### "Images not loading"
- Verify image URLs are absolute (full URLs)
- Check Unsplash URLs are correct
- Or upload images to repository

---

## 📞 Quick Reference

### Your Repository URL
```
https://github.com/YOUR-USERNAME/lcd-banners
```

### Your Live Site URLs
```
Landing: https://YOUR-USERNAME.github.io/lcd-banners/
Display: https://YOUR-USERNAME.github.io/lcd-banners/display.html
Admin:   https://YOUR-USERNAME.github.io/lcd-banners/admin.html
```

### To Update Products
```
1. Edit data/products.json on GitHub
2. Or use admin panel → export → upload
3. Commit changes
4. Wait 30-60 seconds
5. Display auto-refreshes!
```

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] All files uploaded to GitHub
- [ ] Repository is PUBLIC
- [ ] GitHub Pages enabled (Settings → Pages)
- [ ] Waited 3-5 minutes for deployment
- [ ] Tested display.html URL in browser
- [ ] Arabic text displays correctly
- [ ] Logo shows at bottom
- [ ] All slides rotate properly
- [ ] Can access admin.html
- [ ] Language toggle works
- [ ] Can export JSON from admin
- [ ] Bookmarked display URL on LCD computer
- [ ] Set display as browser startup page
- [ ] Tested fullscreen mode (F11)

---

**Ready to go live? Follow the steps above and your LCD Banners will be on the internet!** 🚀

For help, check: https://docs.github.com/en/pages
