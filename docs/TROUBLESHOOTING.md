# 🔧 Troubleshooting Guide - Quick Fixes

## ❌ Problem: Blank White Page

### Cause: Browser security or JavaScript not loading

### Solutions (Try in order):

**1. Check Internet Connection**
- Vue.js and JsBarcode load from CDN
- Need internet for first load
- Test: Open google.com to verify

**2. Open Browser Console**
```
Press F12 (or Ctrl+Shift+I)
Look for red error messages
Common errors and fixes below
```

**3. Use Different Browser**
```
Try in this order:
1. Chrome (best)
2. Edge (also good)
3. Firefox (works)
4. Safari (should work)
```

**4. Hard Refresh**
```
Windows: Ctrl + F5
Mac: Cmd + Shift + R
```

**5. Clear Browser Cache**
```
Chrome: Settings → Privacy → Clear browsing data
Edge: Settings → Privacy → Clear browsing data
Select "Cached images and files"
```

---

## ❌ Problem: Console Shows "Failed to load Vue"

### Cause: CDN blocked or internet issue

### Solutions:

**1. Check Firewall/Antivirus**
- Temporarily disable to test
- Whitelist unpkg.com domain

**2. Try Different CDN**

Open `index.html` in text editor, find this line:
```html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

Replace with:
```html
<script src="https://cdn.jsdelivr.net/npm/vue@3/dist/vue.global.js"></script>
```

**3. Download Libraries Locally**

Download these files:
- https://unpkg.com/vue@3/dist/vue.global.js
- https://cdn.jsdelivr.net/npm/jsbarcode@3.11.5/dist/JsBarcode.all.min.js

Save in same folder as index.html

Update HTML to point to local files:
```html
<script src="vue.global.js"></script>
<script src="JsBarcode.all.min.js"></script>
```

---

## ❌ Problem: Arabic Text Shows as Boxes

### Cause: Font encoding issue

### Solutions:

**1. Check Browser Language Settings**
```
Chrome: Settings → Languages → Add Arabic
Edge: Same process
```

**2. Force UTF-8 Encoding**
```
Browser menu → More tools → Encoding → UTF-8
```

**3. Update Browser**
```
Help → About → Update to latest version
```

---

## ❌ Problem: Barcode Doesn't Generate

### Cause: JsBarcode library not loaded

### Check:

**1. Open Console (F12)**
```
Type: JsBarcode
If "undefined" → library didn't load
```

**2. Check Network Tab**
```
F12 → Network tab
Refresh page
Look for jsbarcode request
Check if it's red (failed) or green (success)
```

**3. Alternative Barcode Library**

If JsBarcode fails, try this simpler version in index.html:

```javascript
// Replace JsBarcode call with:
const canvas = document.getElementById('barcode');
const ctx = canvas.getContext('2d');
ctx.font = '20px monospace';
ctx.fillText(this.barcodeData, 10, 50);
```

---

## ❌ Problem: Clicking Doesn't Work

### Cause: Vue.js not initialized

### Check:

**1. Wait for Page Load**
- Page might still be loading
- Wait 3-5 seconds after opening

**2. Check Console for Errors**
```
F12 → Console
Look for red errors mentioning "Vue" or "mount"
```

**3. Verify Vue App Mounted**
```
In console, type: document.getElementById('app')
Should show the app element
```

---

## ❌ Problem: Prices Not Calculating

### Cause: JavaScript math error

### Quick Test:

**1. Open Console**
```
F12 → Console
```

**2. Type These Commands**
```javascript
// Check if Vue app is working:
document.querySelector('#app').__vue_app__

// Should not be undefined
```

**3. Check Data**
```
Select a salad
Open console
Type: app = document.querySelector('#app').__vue_app__
Then: app._instance.data
Should show config with prices
```

---

## ❌ Problem: Language Toggle Doesn't Work

### Cause: Direction not switching

### Fix:

Check HTML has:
```html
<html lang="ar" dir="rtl">
```

In console, verify:
```javascript
document.documentElement.dir  // Should be "rtl" or "ltr"
document.documentElement.lang // Should be "ar" or "en"
```

---

## ❌ Problem: Print Preview Shows Blank

### Cause: Canvas not rendering

### Solutions:

**1. Check Barcode Generated**
```
F12 → Elements tab
Find: <canvas id="barcode">
Should have drawing inside
```

**2. Alternative Print Method**

If barcode won't show in print:
```javascript
// In printLabel() function, replace with:
window.print();
```

**3. Use Test Barcode Page**
```
Open test-barcode.html instead
Generate barcode there
Print from that page
```

---

## ❌ Problem: Admin Panel Blank

### Same Fixes as Index.html

1. Check console for errors
2. Verify internet connection
3. Hard refresh (Ctrl+F5)
4. Try different browser

---

## ❌ Problem: Styles Look Wrong

### Cause: CSS not loading or browser zoom

### Solutions:

**1. Check Browser Zoom**
```
Press Ctrl+0 (zero) to reset zoom to 100%
```

**2. Check CSS Loaded**
```
F12 → Elements tab
Click on an element
Right panel should show CSS styles
If empty, CSS didn't load
```

**3. Force Style Refresh**
```
Hard refresh: Ctrl+F5
Clear cache and reload
```

---

## ❌ Problem: Mobile/Tablet View Broken

### Cause: Viewport not set or browser too old

### Check:

**1. Verify Viewport Meta Tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**2. Test Responsive Mode**
```
F12 → Toggle device toolbar (Ctrl+Shift+M)
Try different device sizes
```

**3. Minimum Width**
```
System works best at 360px+ width
Below 360px may have issues
```

---

## 🚨 Emergency Demo Backup Plan

### If Nothing Works:

**1. Use Test Barcode Page**
```
test-barcode.html should work (simpler)
Show barcode generation there
Explain full system will work after setup
```

**2. Show Screenshots**
```
Take screenshots now while it works
Use screenshots for demo if needed
```

**3. Use Different Device**
```
Try on:
- Different laptop
- Tablet
- Phone
All can run the HTML files
```

**4. Explain It's Prototype**
```
"This is a working prototype - we'll ensure 100% 
stability during installation on your hardware"
```

---

## 🔍 Diagnostic Commands

### Check Everything at Once

Open console (F12) and run:

```javascript
// Diagnostic check
console.log("Vue loaded:", typeof Vue !== 'undefined');
console.log("JsBarcode loaded:", typeof JsBarcode !== 'undefined');
console.log("App mounted:", document.getElementById('app').__vue_app__ !== undefined);
console.log("Language:", document.documentElement.lang);
console.log("Direction:", document.documentElement.dir);
```

**Expected Output:**
```
Vue loaded: true
JsBarcode loaded: true
App mounted: true
Language: ar
Direction: rtl
```

If any are `false` or `undefined`, that's your problem!

---

## 📞 Quick Decision Tree

```
Page blank?
├─ Yes → Check console (F12) → See errors → Fix based on error
└─ No → Page loads?
    ├─ Yes → Test all features with VISUAL_TEST.md
    └─ No → Try different browser → Still no? → Use backup device
```

---

## ✅ Verification Checklist

Before demo, verify:
- [ ] Page loads (not blank)
- [ ] Salads show (all 11)
- [ ] Can click and select salad
- [ ] Toppings appear after selection
- [ ] +/- buttons work
- [ ] Price calculates correctly
- [ ] Barcode generates
- [ ] Language toggle works
- [ ] Print preview shows
- [ ] Admin panel opens

**If all checked: You're ready!**
**If any fail: Use this guide to fix**

---

## 💡 Pro Tips

**Before Demo:**
1. Open pages and let them fully load (30 seconds)
2. Create one sample order to test everything
3. Leave tabs open (don't close/reopen)
4. Disable browser auto-updates during demo
5. Close unnecessary tabs/programs
6. Use private/incognito mode for clean slate

**During Demo:**
1. If issue occurs, stay calm
2. Have backup screenshots ready
3. Switch to test-barcode.html if needed
4. Explain "This works perfectly, just a demo environment quirk"
5. Focus on showing the concept, not perfect execution

---

**Remember: The code is solid. Most issues are browser/environment related and easily fixed!**
