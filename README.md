# 🥗 Salad Terminal System

A comprehensive point-of-sale and digital signage solution for salad bar operations.

## 📁 Project Structure

```
salad-terminal/
├── staff/              # Staff/Admin Terminal (Main POS Application)
│   ├── index.html      # Main staff terminal interface
│   ├── admin.html      # Admin panel for configuration
│   └── test-barcode.html # Barcode printer testing tool
│
├── customer/           # Customer-Facing Terminal
│   └── index.html      # Customer self-service ordering interface
│
├── lcd-banners/        # Digital Signage System (Separate Sub-project)
│   ├── display.html    # Main display for LCD screens
│   ├── admin.html      # Banner management admin panel
│   ├── index.html      # LCD system landing page
│   └── assets/         # CSS, JS, and data files
│
├── assets/             # Shared Assets
│   ├── images/         # Logo and image files
│   ├── config.json     # Alternative configuration file
│   └── product-data.txt # Product data text file
│
├── docs/               # Documentation
│   ├── START_HERE.md   # Getting started guide
│   ├── QUICK_START.md  # Quick setup instructions
│   ├── DEMO_CHECKLIST.md
│   ├── PRINTER_SETUP.md
│   ├── TROUBLESHOOTING.md
│   └── [other docs]
│
├── backups/            # Version Backups
│   └── [backup files]
│
├── config.json         # Main configuration file (root level)
└── README.md           # This file
```

## 🚀 Quick Start

### For Staff Terminal:
1. Open `staff/index.html` in a browser
2. Use the admin panel at `staff/admin.html` to configure products and settings
3. Set up thermal printer (58mm) for ticket printing

### For Customer Terminal:
1. Open `customer/index.html` in a browser or kiosk device
2. Customers can build and order their salads

### For LCD Banners:
1. Navigate to `lcd-banners/` directory
2. See `lcd-banners/README.md` for specific instructions
3. Use `lcd-banners/display.html` for the signage display

## 📝 Configuration

The system uses embedded configuration in the HTML files for standalone operation. 
You can also use `config.json` for centralized configuration management.

## 🖨️ Printer Setup

- **Supported**: 58mm thermal printers (ESC/POS compatible)
- **Recommended**: Set up Chrome/Edge to use silent printing
- See `docs/PRINTER_SETUP.md` for detailed instructions

## 📚 Documentation

- **START_HERE.md** - Complete system overview
- **QUICK_START.md** - Fast setup guide
- **DEMO_CHECKLIST.md** - Demo preparation checklist
- **TROUBLESHOOTING.md** - Common issues and solutions
- **STRUCTURE.md** - Detailed project structure

## 🔧 Technology Stack

- **Frontend**: Vue.js 3, Vanilla HTML/CSS/JavaScript
- **Barcode**: JsBarcode library
- **Storage**: LocalStorage (browser-based)
- **Printing**: Browser Print API

## 🌐 Browser Compatibility

- Chrome/Edge (Recommended)
- Firefox (Limited print support)
- Safari (Limited functionality)

## 📱 Deployment Options

1. **Local File System**: Open HTML files directly
2. **Local Web Server**: Use Python/Node.js server for development
3. **Web Hosting**: Deploy to any static hosting service
4. **Kiosk Mode**: Run on Android tablets with kiosk browser

## 🛠️ Maintenance

- Backups are automatically created in `backups/` folder
- Version history maintained for rollback capability
- See `docs/VERSION_CONTROL.md` for version management

## 📄 License

Proprietary - Spool Restaurant System

## 🆘 Support

For issues and questions, refer to:
- `docs/TROUBLESHOOTING.md`
- `docs/DEMO_CHECKLIST.md`
- `docs/START_HERE.md`
