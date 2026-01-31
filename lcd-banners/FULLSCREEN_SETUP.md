# 🖥️ LCD Fullscreen Setup Guide

## Quick Solution: Press F11!

The fastest way to go fullscreen:
1. Make sure the display page is open
2. Press **F11** key on keyboard
3. Browser chrome disappears!
4. Press **F11** again to exit

---

## 🏆 Best Solution: Chrome Kiosk Mode

For permanent, unbreakable fullscreen (best for LCD):

### Windows:

1. **Find Chrome Shortcut**
   - Right-click Chrome icon on desktop
   - Or create new shortcut from: `C:\Program Files\Google\Chrome\Application\chrome.exe`

2. **Edit Shortcut**
   - Right-click shortcut → Properties
   - Find the "Target" field
   - After the existing path, add:
     ```
     --kiosk "https://YOUR-USERNAME.github.io/lcd-banners/display.html"
     ```
   
   Full example:
   ```
   "C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk "https://YOUR-USERNAME.github.io/lcd-banners/display.html"
   ```

3. **Apply and Launch**
   - Click OK
   - Double-click the shortcut
   - Chrome opens in full kiosk mode!

### Additional Kiosk Options:

For even more locked-down experience:
```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --kiosk "YOUR-URL" --incognito --disable-infobars --disable-session-crashed-bubble
```

Benefits:
- ✅ No browser UI at all
- ✅ No tabs, no address bar
- ✅ Can't accidentally navigate away
- ✅ Looks like a native app
- ✅ Perfect for public displays

To exit kiosk mode: **Alt+F4**

---

## 🚀 Auto-Start on Windows Boot

Make it launch automatically when computer starts:

### Method 1: Startup Folder
1. Press **Win+R**
2. Type: `shell:startup`
3. Press Enter
4. Copy your kiosk shortcut here
5. Restart computer to test

### Method 2: Task Scheduler (More Reliable)
1. Press **Win+R** → type `taskschd.msc`
2. Create Basic Task
3. Name: "LCD Display"
4. Trigger: At startup
5. Action: Start a program
6. Program: `C:\Program Files\Google\Chrome\Application\chrome.exe`
7. Arguments: `--kiosk "YOUR-URL" --incognito`
8. Finish

---

## 🔒 Lock Down the Display (Prevent Tampering)

### Disable Keyboard Shortcuts:
Add these flags to kiosk command:
```
--disable-infobars
--disable-pinch
--overscroll-history-navigation=0
--disable-features=TranslateUI
```

### Hide Mouse Cursor:
Add this CSS to display.css:
```css
* {
    cursor: none !important;
}
```
(Already included in your display!)

### Prevent Accidental Clicks:
Add this flag:
```
--noerrdialogs
```

---

## ⚙️ Windows Power Settings

Prevent screen sleep:

1. **Settings → System → Power & Sleep**
   - Screen: Never
   - Sleep: Never

2. **Advanced Power Settings**
   - Turn off hard disk: Never
   - Turn off display: Never

3. **Screen Saver**
   - Set to "None"

---

## 🔌 On Power Loss

Make computer restart automatically:

1. **BIOS Settings** (restart and press Del/F2)
2. Find "Power Management" or "AC Recovery"
3. Set to "Power On" or "Last State"
4. Computer will restart after power outage

---

## 📱 Remote Management

### Chrome Remote Desktop (Access from anywhere)
1. Install: https://remotedesktop.google.com
2. Set up on LCD computer
3. Access from phone/laptop to:
   - Update products
   - Troubleshoot
   - Check display

### TeamViewer (Alternative)
- Free for personal use
- Access from anywhere
- More features than Chrome Remote Desktop

---

## 🎯 Complete Setup Checklist

- [ ] Chrome kiosk shortcut created
- [ ] Kiosk shortcut in Startup folder
- [ ] Display URL bookmarked
- [ ] F11 tested and works
- [ ] Power settings: Never sleep
- [ ] Screen saver: Disabled
- [ ] Auto-login enabled (if needed)
- [ ] Remote access installed (optional)
- [ ] Test full reboot cycle

---

## 🆘 Troubleshooting

### Screen goes black after time
- Check power settings (Screen: Never)
- Check screen saver (None)
- Check monitor sleep settings

### Chrome exits fullscreen
- Use kiosk mode instead of F11
- Add --incognito flag
- Check keyboard isn't pressed accidentally

### Computer doesn't restart after power loss
- Check BIOS AC Recovery settings
- Enable "Restore on AC Power Loss"

### Can't exit kiosk mode
- Press **Alt+F4** to close Chrome
- Or **Ctrl+Alt+Delete** → Task Manager → End Chrome

---

## 🎨 Final Result

When properly set up:
1. ✅ Computer boots automatically
2. ✅ Chrome launches in fullscreen
3. ✅ Display starts rotating slides
4. ✅ No browser UI visible
5. ✅ Screen never sleeps
6. ✅ Looks like a native digital signage system

Perfect! 🎉
