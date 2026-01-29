# 🖨️ EZPOS L001 Printer Setup Guide

## Overview

This guide will help you configure the EZPOS L001 thermal label printer for 50mm x 30mm labels with the Salad Terminal System.

---

## Hardware Setup

### 1. Physical Installation

**Connect the Printer:**
- **USB Connection**: Plug USB cable into computer
- **Power**: Connect power adapter and turn on printer
- **Paper Loading**:
  1. Open the printer cover
  2. Insert 50mm x 30mm label roll
  3. Ensure labels feed from bottom of roll
  4. Adjust paper guides to match label width
  5. Close cover and press feed button to test

### 2. Paper Sensor Calibration

The EZPOS L001 needs to detect label gaps:

1. **Hold Feed Button**: Press and hold for 5 seconds
2. **Auto Calibration**: Printer will feed several labels
3. **Completion**: Printer stops when calibration complete
4. **Test**: Press feed button - should advance exactly one label

---

## Windows Driver Installation

### Method 1: Automatic Installation
1. Connect printer via USB
2. Windows should auto-detect as "EZPOS L001" or "USB Printing Support"
3. Check **Devices and Printers** in Control Panel
4. If not detected, proceed to Method 2

### Method 2: Manual Driver Installation
1. Download EZPOS drivers from manufacturer website
2. Run installer as Administrator
3. Select EZPOS L001 model
4. Choose USB or Network connection
5. Complete installation wizard
6. Restart computer if prompted

### Method 3: Generic ESC/POS Driver
If specific drivers unavailable:
1. Open **Devices and Printers**
2. Click **Add a printer**
3. Select **Add a local printer**
4. Choose existing port: **USB001** (Virtual printer port for USB)
5. Select manufacturer: **Generic**
6. Select printer: **Generic / Text Only**
7. Name: "EZPOS L001"
8. Set as default printer (optional)

---

## Browser Print Configuration

### Chrome / Edge Setup

1. **Open Print Dialog**:
   - When clicking "Print Barcode" in the terminal
   - Browser print dialog will appear

2. **Configure Print Settings**:
   - **Destination**: Select "EZPOS L001"
   - **Paper Size**: 
     - Click "More settings"
     - Select "Custom" paper size
     - Width: **50mm** (or 1.97 inches)
     - Height: **30mm** (or 1.18 inches)
   - **Margins**: 
     - Set all to **None** or **Minimum**
   - **Scale**: **100%**
   - **Background graphics**: **Enabled** (for barcode)

3. **Save as Default**:
   - After configuring once, browser remembers settings
   - Future prints use same configuration

### Firefox Setup

Similar to Chrome but:
- Print settings at: **about:config**
- Search for: **print.printer_EZPOS_L001**
- Configure paper size in printer properties

---

## Label Size Configuration

### Windows Printer Preferences

1. **Open Control Panel** → **Devices and Printers**
2. **Right-click EZPOS L001** → **Printing Preferences**
3. **Page Setup Tab**:
   - Paper Size: **Custom**
   - Width: **50mm** (5cm)
   - Height: **30mm** (3cm)
   - Orientation: **Portrait**
4. **Options Tab** (if available):
   - Media Type: **Label**
   - Print Speed: **Medium** (adjust if needed)
   - Darkness: **Medium** (adjust for readability)
5. **Apply** and **OK**

### Create Custom Paper Size (Windows)

If 50x30mm not in list:

1. **Open** → **Devices and Printers**
2. **Right-click any printer** → **Server Properties**
3. **Forms Tab** → **Create a new form**
4. **Form name**: "50x30mm Label"
5. **Measurements**:
   - Width: **5.00 cm**
   - Height: **3.00 cm**
   - **Margins**: All to **0.00 cm**
6. **Save Form**
7. Return to EZPOS printer preferences
8. Select "50x30mm Label" as paper size

---

## Test Printing

### Test 1: Basic Print Test

1. Open `test-barcode.html` in browser
2. Click **Print** (Ctrl+P)
3. Select EZPOS L001
4. Click **Print**
5. **Expected Result**: Single label with barcode

### Test 2: Terminal Print Test

1. Open `index.html`
2. Create a simple salad order
3. Click "Print Barcode"
4. Verify preview appears
5. Click "Print"
6. **Expected Result**: Label with:
   - Shop name at top
   - Barcode in center
   - Price clearly visible
   - Date/time at bottom

### Test 3: Daftra Scan Test

1. Print a test label
2. Take to Daftra POS terminal
3. Scan barcode
4. **Verify**:
   - Product recognized (Salad - code 000001)
   - Price reads correctly
   - Transaction can be completed

---

## Troubleshooting

### Problem: Labels are blank

**Possible Causes:**
- Thermal paper loaded upside down (thermal side should face print head)
- Printer head is dirty
- Paper not advancing correctly

**Solutions:**
1. Reload paper with thermal side down
2. Clean print head with alcohol wipes (printer off)
3. Run paper sensor calibration

---

### Problem: Label is cut off or too small

**Solutions:**
1. Check custom paper size is exactly 50mm x 30mm
2. Verify margins are set to minimum/none
3. Disable "Fit to page" in print dialog
4. Check scale is 100%

---

### Problem: Barcode won't scan

**Possible Causes:**
- Barcode too small or low quality
- Wrong barcode format
- Scanner not configured for Code 128

**Solutions:**
1. Increase barcode height in code (currently 60px)
2. Increase width multiplier (currently 2)
3. Verify Daftra scanner supports Code 128
4. Clean scanner lens
5. Test with another Code 128 barcode

**Code to adjust barcode size in `index.html`:**
```javascript
JsBarcode(canvas, this.barcodeData, {
    format: 'CODE128',
    width: 3,        // Increase from 2 to 3
    height: 80,      // Increase from 60 to 80
    displayValue: true,
    fontSize: 14,
    margin: 10
});
```

---

### Problem: Printer not found in browser

**Solutions:**
1. Ensure printer is powered on
2. Check USB cable connection
3. Restart browser
4. Set EZPOS as default printer in Windows
5. Try different USB port
6. Update browser to latest version

---

### Problem: Multiple labels print for one order

**Solutions:**
1. Don't click print button multiple times
2. Close previous print dialogs before printing again
3. Clear browser cache
4. Check printer queue for stuck jobs

---

### Problem: Print quality is poor

**Solutions:**
1. **Adjust darkness**: In printer preferences, increase print density
2. **Clean print head**: Use alcohol wipes (printer must be off and cool)
3. **Check paper quality**: Use high-quality thermal paper
4. **Reduce print speed**: In printer settings, change to "slow" or "quality" mode
5. **Replace print head**: If heavily used, may need replacement

---

## Network Printing Setup (Optional)

If you want to use EZPOS L001 over network:

### Printer Configuration:
1. Connect printer to network via Ethernet
2. Print configuration page (hold feed button + power on)
3. Note IP address (e.g., 192.168.1.100)

### Computer Configuration:
1. **Add Network Printer**:
   - Control Panel → Devices and Printers
   - Add a printer → Add a network printer
   - Enter IP address: `http://192.168.1.100`
2. **Install drivers** as per previous section
3. **Configure paper size** to 50x30mm

### Web Application Configuration:
For direct network printing (advanced):
- Requires backend server to send ESC/POS commands
- Can bypass browser print dialog
- See `print-server.js` notes in README

---

## ESC/POS Commands Reference

If you need direct ESC/POS printing (advanced users):

### Basic Commands:
```
ESC @           - Initialize printer
ESC a 1         - Center alignment
ESC ! 0x30      - Double height/width text
GS v 0          - Print raster bitmap
ESC d n         - Feed n lines
GS V 1          - Partial cut
```

### For EZPOS L001:
- Supports standard ESC/POS commands
- Thermal print head: 203 DPI
- Max paper width: 58mm (your labels are 50mm)
- Auto-cutter: Supported (if equipped)

---

## Maintenance Schedule

### Daily:
- Check paper level
- Remove any jammed labels
- Wipe exterior with dry cloth

### Weekly:
- Clean print head with alcohol wipes (printer OFF)
- Check for paper dust buildup
- Test print quality

### Monthly:
- Deep clean print head
- Check USB/power connections
- Update drivers if available
- Calibrate paper sensor

### As Needed:
- Replace paper roll when low
- Replace print head if quality degrades
- Check Daftra barcode scanning accuracy

---

## Quick Reference Card

**Print from Terminal:**
1. Create order in terminal
2. Click "Print Barcode"
3. Verify preview
4. Click Print in dialog
5. Label prints automatically

**Paper Size:** 50mm x 30mm  
**Barcode Format:** Code 128  
**Print Speed:** Medium  
**Darkness:** Adjust for readability  

**If Print Fails:**
1. Check printer power
2. Check paper loaded correctly
3. Run paper calibration
4. Restart browser

---

## Support Contacts

**EZPOS Support:**
- Website: [EZPOS manufacturer website]
- Email: [Support email]
- Phone: [Support phone]

**Technical Support:**
- For terminal issues: Check README.md troubleshooting
- For Daftra integration: Contact Daftra support
- For barcode scanning: Test with `test-barcode.html`

---

**Last Updated**: 2026-01-29  
**Printer Model**: EZPOS L001  
**Label Size**: 50mm x 30mm  
**Barcode Type**: Code 128
