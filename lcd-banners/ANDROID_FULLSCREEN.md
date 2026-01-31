# 📱 Android LCD Fullscreen Setup

## Quick Solution: Chrome Fullscreen

### Method 1: Chrome Built-in Fullscreen
1. Open Chrome on your Android LCD
2. Go to your display URL
3. Tap the **three dots menu (⋮)** in top-right
4. Tap **"Add to Home screen"**
5. Name it "LCD Display"
6. Tap **"Add"**
7. Go to Home screen and tap the new icon
8. Tap **three dots** again
9. Tap **"Install app"** or **"Add to Home screen"**
10. Opens in fullscreen automatically!

### Method 2: Chrome Settings
1. Open the display page
2. Tap **three dots (⋮)**
3. Tap **"Settings"**
4. Enable **"Desktop site"** (shows full version)
5. Tap three dots again
6. Tap **"Fullscreen"** (if available)

---

## 🏆 Best Solution: Kiosk Browser Apps

For a true kiosk/digital signage experience, use these apps:

### Option 1: Fully Kiosk Browser (Best!)
**Download:** https://play.google.com/store/apps/details?id=de.ozerov.fully

**Setup:**
1. Install Fully Kiosk Browser
2. Open the app
3. Enter your display URL: `https://username.github.io/lcd-banners/display.html`
4. Tap **Settings** → **Kiosk Mode**
5. Enable:
   - ✅ Launch on boot
   - ✅ Keep screen on
   - ✅ Hide navigation bar
   - ✅ Hide status bar
   - ✅ Disable notifications
   - ✅ Motion detection (optional)
6. Set **Home URL** to your display
7. Enable **Start on boot**

**Features:**
- ✅ True fullscreen (no bars)
- ✅ Auto-refresh
- ✅ Keep screen on
- ✅ Remote management
- ✅ Motion detection
- ✅ Scheduled reloads
- ✅ Password protect settings

**Free version** works great! Pro version ($15) adds more features.

---

### Option 2: Kiosk Browser Lockdown
**Download:** https://play.google.com/store/apps/details?id=com.procoit.kioskbrowser

**Setup:**
1. Install Kiosk Browser
2. Open app
3. Enter URL: `https://username.github.io/lcd-banners/display.html`
4. Enable **Kiosk Mode**
5. Set as **Device Owner** (for full lockdown)
6. Configure:
   - Launch on boot: ON
   - Hide navigation: ON
   - Keep screen on: ON
   - Auto-reload: 60 seconds

**Features:**
- ✅ Free and open source
- ✅ Full lockdown
- ✅ Remote management
- ✅ Scheduled content

---

### Option 3: Chrome Custom Tabs + Launcher
**Free Solution (No extra apps needed):**

1. **Create Home Screen Shortcut:**
   - Open Chrome
   - Go to display URL
   - Three dots → "Add to Home screen"
   - Name: "LCD Display"

2. **Hide Navigation Bar:**
   - Settings → Display
   - Enable "Immersive mode" or "Full screen"
   - Varies by Android version

3. **Keep Screen On:**
   - Settings → Display
   - Screen timeout: Never
   - Or use "Stay Awake" in Developer Options

4. **Auto-Launch on Boot:**
   - Use app like "AutoStart - No Root"
   - Set to launch your home screen shortcut

---

## ⚙️ Android Settings for LCD Display

### 1. Keep Screen On
**Settings → Display:**
- Screen timeout: **Never** (or maximum)
- Sleep: **Never**
- Adaptive brightness: **OFF**

**Developer Options:**
- Enable Developer Mode (tap Build Number 7 times)
- Settings → Developer Options
- Enable **"Stay awake"** (screen never sleeps when charging)

### 2. Disable Notifications
**Settings → Notifications:**
- Turn off all notifications
- Or use "Do Not Disturb" mode permanently

### 3. Hide Navigation Bar
**Settings → Display:**
- Enable **"Immersive Mode"** or **"Full Screen"**
- Hides navigation buttons

**OR use ADB command (requires computer):**
```
adb shell settings put global policy_control immersive.full=*
```

### 4. Disable Screen Lock
**Settings → Security:**
- Screen lock: **None**
- Smart Lock: ON (if connected to power)

### 5. Auto-Rotate OFF
**Settings → Display:**
- Auto-rotate: **OFF**
- Lock to **Landscape** orientation

---

## 🚀 Auto-Start on Boot

### Using Fully Kiosk Browser:
- Built-in! Just enable "Start on boot" in settings

### Using Tasker (Advanced):
1. Install Tasker app
2. Create Profile:
   - Event: Device Boot
3. Task:
   - Wait 30 seconds
   - Launch Chrome with URL
   - Set to fullscreen

### Using MacroDroid (Easier):
1. Install MacroDroid (free)
2. Create Macro:
   - Trigger: Device Boot
   - Action: Launch Website → Enter URL
   - Action: Wait 5 seconds
   - Action: Simulate "Back" button (hides bars)

---

## 🔒 Lock Down the Device (Prevent Tampering)

### Enable Kiosk Mode (Android Enterprise):
1. **Factory reset device**
2. During setup, tap 6 times on welcome screen
3. Scan QR code for kiosk setup
4. Device locks to single app

**QR Code Generator:**
https://qr-kiosk.herokuapp.com/

### Using Device Owner Mode (No Factory Reset):
1. Enable Developer Options
2. Connect to computer with ADB
3. Run:
   ```
   adb shell dpm set-device-owner com.procoit.kioskbrowser/.DeviceAdmin
   ```
4. App becomes device owner
5. Full lockdown achieved!

---

## 📡 Remote Management

### Fully Kiosk Browser Remote Admin:
- Access via web browser: `http://LCD-IP-ADDRESS:2323`
- Password protect the interface
- Control remotely:
  - Reload page
  - Change URL
  - Take screenshot
  - Restart device

### Chrome Remote Desktop:
- Install on Android
- Access from computer/phone
- Update products remotely

---

## 🔋 Power Management

### Prevent Sleep While Charging:
1. Settings → Developer Options
2. Enable **"Stay awake"**
3. Keep device plugged in

### Scheduled Reboot (Keep Fresh):
Use Fully Kiosk Browser or Tasker:
- Reboot every night at 3 AM
- Ensures smooth operation

---

## 🎯 Recommended Setup (Best Experience)

1. **Install Fully Kiosk Browser** (free version)
2. **Configure:**
   - Home URL: Your display URL
   - Start on boot: ON
   - Keep screen on: ON
   - Hide bars: ON
   - Auto-refresh: 3600 seconds (1 hour)
3. **Android Settings:**
   - Stay awake: ON
   - Screen timeout: Never
   - Auto-rotate: OFF (landscape)
4. **Mount LCD on wall**
5. **Keep plugged in to power**
6. **Done!** 🎉

---

## 🆘 Troubleshooting

### Screen keeps turning off
- Enable "Stay awake" in Developer Options
- Keep device charging
- Use Fully Kiosk "Keep screen on" option

### Navigation bar shows
- Use Fully Kiosk hide bars option
- Or enable system immersive mode
- Or use ADB command to hide globally

### App crashes or exits
- Use Fully Kiosk "Restart on crash"
- Enable "Watchdog" feature
- Set "Motion detection" to reload

### Can't exit kiosk mode
- Fully Kiosk: Tap screen 5 times rapidly
- Or use volume buttons pattern
- Set exit password in settings

---

## ✅ Final Result

When properly configured:
1. ✅ Android boots
2. ✅ Fully Kiosk launches automatically
3. ✅ Display starts in fullscreen
4. ✅ No navigation or status bars
5. ✅ Screen never sleeps
6. ✅ Auto-reloads periodically
7. ✅ Looks like professional digital signage

Perfect! 🎉

---

## 🎬 Quick Start Video Tutorials

Search YouTube for:
- "Fully Kiosk Browser setup"
- "Android kiosk mode tutorial"
- "Android digital signage setup"

---

Need help with any specific step? Let me know! 🚀
