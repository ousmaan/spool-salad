# 🥗 Salad Terminal System

A bilingual (Arabic/English) web-based point-of-sale system for custom salad orders with price-embedded barcode generation for Daftra POS integration.

## 📋 Overview

This system allows staff to:
- Select base salads from an extensive menu
- Add custom toppings with scoop-based pricing
- Generate Code 128 barcodes with embedded prices
- Print 50mm x 30mm labels for scanning at Daftra POS

## 🚀 Quick Start

### Prerequisites
- Web browser (Chrome, Edge, or Firefox recommended)
- EZPOS L001 label printer (or compatible ESC/POS printer)
- Daftra POS system configured to accept price-embedded barcodes

### Installation

1. **Download/Clone** this repository to your computer

2. **Open the application**:
   - Simply open `index.html` in your web browser
   - No server installation required for basic usage
   - For network printing, you may need a local web server

3. **Configure printer**:
   - Ensure your EZPOS printer is connected (USB or Network)
   - Set paper size to 50mm x 30mm in printer settings
   - Test print from the terminal

## 📁 File Structure

```
salad-terminal/
├── index.html          # Main staff terminal interface
├── admin.html          # Admin panel for price management
├── config.json         # Product and pricing configuration
├── README.md           # This file
└── PROJECT_JOURNAL.md  # Development context and notes
```

## 🎯 Features

### Staff Terminal (`index.html`)
- ✅ **Bilingual Interface**: Arabic (default) and English
- ✅ **Base Salad Selection**: 11 popular varieties (KSA + International)
- ✅ **Extensive Toppings**: 50+ ingredients across 7 categories
- ✅ **Live Price Calculation**: Real-time total updates
- ✅ **Code 128 Barcode**: Format `NXXXXXXPPPPPNNNNNN`
- ✅ **Label Printing**: 50mm x 30mm with barcode, price, date/time
- ✅ **Touch-Friendly UI**: Optimized for tablet/touchscreen use

### Admin Panel (`admin.html`)
- ⚙️ **Shop Settings**: Name, product code, currency, colors
- 💰 **Price Management**: Update base salad and topping prices
- 🎨 **Brand Customization**: Primary and accent colors
- 📝 **JSON Editor**: Advanced configuration editing
- 💾 **Export Config**: Download updated configuration

## 🔧 Configuration

### Barcode Format

The system generates 18-digit Code 128 barcodes:

```
NXXXXXXPPPPPNNNNNN
│├─────┤├────┤├─────┤
││      │      └─ Padding (6 digits)
││      └─ Price in halalas (5 digits)
│└─ Product code (6 digits)
└─ Leading padding (1 digit)
```

**Example**: `000000100250000000`
- Product Code: `000001` (Salad)
- Price: `02500` (25.00 SAR)
- Result: 25.00 SAR salad scanned at Daftra POS

### Daftra Configuration

Ensure your Daftra POS is configured to:
1. Accept Code 128 barcodes
2. Parse the product code from positions 2-7
3. Parse the price from positions 8-12 (divide by 100 for SAR)

### Customizing Products

**Method 1: Admin Panel (Recommended)**
1. Open `admin.html` in your browser
2. Navigate to the appropriate tab (Shop/Salads/Toppings)
3. Update prices and settings
4. Click "Save Changes"
5. Download the generated `config.json`
6. Replace the original `config.json` file

**Method 2: Direct JSON Editing**
1. Open `config.json` in a text editor
2. Modify prices, names, or add new items
3. Maintain valid JSON syntax
4. Save the file
5. Refresh the terminal

### Adding New Items

To add a new topping:

```json
{
  "id": "new-topping",
  "name": "New Topping",
  "nameAr": "إضافة جديدة",
  "price": 5
}
```

## 🖨️ Printing Setup

### EZPOS L001 Configuration

1. **Connect Printer**:
   - USB: Connect to computer and install drivers
   - Network: Configure IP address in printer settings

2. **Paper Setup**:
   - Load 50mm x 30mm label rolls
   - Adjust sensor position for label detection
   - Calibrate paper feed if needed

3. **Print Settings**:
   - The system uses browser's print dialog
   - Page size is automatically set to 50mm x 30mm
   - Margins are minimized for label printing

4. **Test Print**:
   - Create a test salad order
   - Click "Print Barcode"
   - Verify barcode scans correctly at Daftra POS

### Troubleshooting Printing

**Issue**: Print dialog doesn't show correct paper size
- **Solution**: Manually set custom paper size in printer preferences

**Issue**: Barcode doesn't scan
- **Solution**: Ensure barcode width/height ratios are correct
- Check if Daftra is configured for Code 128

**Issue**: Label is cut off
- **Solution**: Adjust margins in print CSS or printer settings

## 💡 Usage Guide

### Creating a Salad Order

1. **Select Language**: Toggle between Arabic/English (top right)

2. **Choose Base Salad**: Click on any of the 11 base salad options
   - Caesar, Greek, Fattoush, Tabbouleh, etc.
   - Price is automatically added to total

3. **Add Toppings**: Use +/- buttons to add scoops
   - Categories: Proteins, Cheese, Veggies, Crunch, Extras
   - Each scoop increases the price accordingly

4. **Review Order**: Check the order summary (right panel)
   - Base salad + all toppings listed
   - Total price displayed prominently

5. **Print Label**: Click "Print Barcode" button
   - Preview appears with barcode and details
   - Click "Print" to send to printer
   - Order automatically clears after printing

6. **Attach Label**: Place printed label on salad container

7. **Scan at POS**: Cashier scans the barcode at Daftra terminal

### Admin Tasks

**Updating Prices**:
1. Open `admin.html`
2. Go to "Base Salads" or "Toppings" tab
3. Edit prices in the table
4. Click "Save Changes"
5. Download and replace `config.json`

**Changing Shop Name**:
1. Open `admin.html`
2. Go to "Shop Settings" tab
3. Update English and Arabic names
4. Save and download config

**Bulk Editing**:
1. Open `admin.html`
2. Go to "JSON Editor" tab
3. Edit JSON directly
4. Click "Format JSON" to validate
5. Save and download

## 🌍 Internationalization

The system supports:
- **Arabic (العربية)**: Default language, RTL layout
- **English**: LTR layout

All content is bilingual:
- Shop name
- Base salad names and descriptions
- Topping names
- Category labels
- UI buttons and labels

To add a new language:
1. Add translations to `config.json`
2. Update Vue.js computed properties in HTML files
3. Add language toggle option

## 📊 Product Catalog

### Base Salads (11 varieties)
- Caesar Salad (22 SAR)
- Greek Salad (24 SAR)
- Fattoush (18 SAR)
- Tabbouleh (18 SAR)
- Rocca Salad (20 SAR)
- Caprese Salad (26 SAR)
- Cobb Salad (28 SAR)
- Niçoise Salad (28 SAR)
- Quinoa Salad (25 SAR)
- Asian Sesame Salad (24 SAR)
- Build Your Own (15 SAR)

### Toppings (50+ items)

**Premium Proteins** (12-15 SAR)
- Grilled Shrimp, Salmon

**Standard Proteins** (8-10 SAR)
- Chicken (Grilled/Crispy), Tuna, Eggs

**Cheese** (6-8 SAR)
- Feta, Halloumi, Mozzarella

**Premium Veggies** (5-7 SAR)
- Avocado, Roasted Beetroot, Sun-dried Tomatoes, Artichoke, Roasted Peppers

**Fresh Veggies** (2-4 SAR)
- Cherry Tomatoes, Cucumbers, Corn, Olives, Mushrooms, Carrots, Cabbage, Rocca, Bell Peppers

**Crunch & Texture** (3-5 SAR)
- Croutons, Walnuts, Almonds, Pecans, Seeds, Crispy Noodles

**Extras** (2-4 SAR)
- Parmesan, Pickles, Jalapeños, Cranberries, Raisins

## 🔐 Security Notes

- No sensitive data is stored in the system
- Configuration is client-side only
- No user authentication required
- Suitable for internal staff use only
- Consider adding password protection for admin panel in production

## 🐛 Troubleshooting

### Config not loading
- Check that `config.json` is in the same directory as HTML files
- Verify JSON syntax is valid
- Check browser console for errors

### Barcode not generating
- Ensure JsBarcode library is loading from CDN
- Check internet connection (CDN libraries required)
- Verify Vue.js is loading correctly

### Prices not calculating correctly
- Verify all prices in config.json are numbers, not strings
- Check browser console for JavaScript errors

### Print layout issues
- Test with browser's print preview
- Adjust CSS in the `printLabel()` function
- Verify printer supports custom paper sizes

## 🚀 Future Enhancements

- [ ] Juice/Smoothie section (separate tab)
- [ ] Network printing support (direct ESC/POS)
- [ ] Sales analytics and reporting
- [ ] Customer-facing display
- [ ] Logo upload for labels
- [ ] Multiple product codes for different categories
- [ ] Offline mode with service workers
- [ ] Receipt printer integration
- [ ] Multi-location support

## 📞 Support

For issues or questions:
1. Check PROJECT_JOURNAL.md for development context
2. Review this README thoroughly
3. Check browser console for errors
4. Verify printer connectivity and settings

## 📄 License

This project is proprietary software developed for internal business use.

---

**Version**: 1.0.0  
**Last Updated**: 2026-01-29  
**Compatibility**: Chrome 90+, Edge 90+, Firefox 88+
