# 📂 Project Structure Guide

## Overview
This document describes the complete, organized structure of the Salad Terminal System.

## Root Level

```
salad-terminal/
├── index.html              # Main Staff Terminal (Root Quick Access)
├── admin.html              # Admin Panel (Root Quick Access)
├── config.json             # Main Configuration File
├── logo transparent.png    # Logo file (for root HTML files)
├── Logo.png               # Alternative logo format
├── README.md              # Main documentation entry point
└── STRUCTURE.md           # This file
```

### Root HTML Files
The root level contains **quick access** versions of the staff terminal and admin panel:
- `index.html` - Staff terminal with embedded config
- `admin.html` - Admin panel with embedded config

These are kept at root for:
- Quick browser access without navigating folders
- Backward compatibility with existing shortcuts
- Easy demo/testing setup

## Directory Structure

### 📁 `/staff/` - Staff & Admin Interface
Primary location for staff-related applications.

```
staff/
├── index.html          # Full-featured staff terminal
├── admin.html          # Admin configuration panel
└── test-barcode.html   # Barcode printer testing tool
```

**Purpose**: Staff operations, order management, and system administration

### 📁 `/customer/` - Customer Interface
Customer-facing ordering terminal.

```
customer/
└── index.html          # Customer self-service ordering interface
```

**Purpose**: Customer self-service kiosk for placing orders
**Path Dependencies**: References `../assets/images/` for logos

### 📁 `/lcd-banners/` - Digital Signage System
Independent sub-project for LCD menu displays.

```
lcd-banners/
├── index.html                 # Landing page
├── display.html              # Main display screen
├── admin.html                # Banner management admin
├── display-backup-old.html   # Old display backup
├── assets/
│   ├── css/
│   │   ├── admin.css
│   │   └── display.css
│   ├── js/
│   │   ├── admin.js
│   │   └── display.js
│   └── images/
├── data/
│   └── products.json
├── logo transparent.png      # LCD system logo
├── *.bat                     # Deployment scripts (Windows)
└── *.md                      # LCD-specific documentation
```

**Purpose**: Digital menu boards and promotional displays  
**Note**: This is a self-contained system with its own structure

### 📁 `/assets/` - Shared Assets
Common resources used across the system.

```
assets/
├── config.json         # Alternative configuration file
├── product-data.txt    # Product data in text format
└── images/
    ├── logo-transparent.png
    └── Logo.png
```

**Purpose**: Centralized asset storage for logos, configs, and data

### 📁 `/docs/` - Documentation
All system documentation and guides.

```
docs/
├── START_HERE.md              # Getting started guide
├── README.md                  # Documentation index
├── QUICK_START.md             # Quick setup instructions
├── DEMO_CHECKLIST.md          # Demo preparation checklist
├── DEMO_QUICK_REFERENCE.md    # Quick demo reference
├── PRINTER_SETUP.md           # Printer configuration guide
├── TROUBLESHOOTING.md         # Common issues and solutions
├── VERSION_CONTROL.md         # Version management guide
├── VISUAL_TEST.md             # Visual testing procedures
├── PROJECT_JOURNAL.md         # Development history
└── SESSION_RESUME.md          # Session notes
```

**Purpose**: Comprehensive documentation for setup, usage, and troubleshooting

### 📁 `/backups/` - Version Backups
Historical versions for rollback capability.

```
backups/
├── admin_v1_backup.html
├── admin_v2_backup.html
├── config_v1_backup.json
├── index_v1_backup.html
├── index_v2_backup.html
└── test-barcode_v1_backup.html
```

**Purpose**: Version history and rollback safety net

## File Path Dependencies

### Root HTML Files
- `index.html` & `admin.html` reference:
  - `logo transparent.png` (same directory)
  - Embedded configuration (no external config file needed)

### Customer Terminal
- `customer/index.html` references:
  - `../assets/images/logo-transparent.png`

### Staff Terminal
- `staff/index.html` references:
  - `admin.html` (relative link in same directory)
  - Embedded configuration

### LCD Banners
- `lcd-banners/display.html` references:
  - `logo transparent.png` (in lcd-banners directory)
  - `assets/css/display.css`
  - `assets/js/display.js`

## Configuration Files

### Primary: `/config.json`
Main configuration file at root level (4KB, latest update)

### Alternative: `/assets/config.json`
Alternative configuration with extended product data (8KB)

### Embedded Configurations
Most HTML files have embedded JSON config in their JavaScript for standalone operation.

## Key Features

### ✅ Clean Organization
- Logical folder structure
- No duplicate files
- Clear separation of concerns

### ✅ Backward Compatibility
- Root-level quick access files maintained
- Existing links and shortcuts still work
- Path references preserved

### ✅ Self-Contained Components
- Each module (staff, customer, lcd-banners) can operate independently
- Embedded configurations allow standalone HTML file operation
- Minimal external dependencies

### ✅ Documentation Centralization
- All docs in `/docs/` folder
- Easy to find and maintain
- Comprehensive coverage

### ✅ Safe Backups
- Historical versions preserved in `/backups/`
- Version-numbered for easy identification
- No duplicate backups

## Usage Patterns

### For Development
```
1. Edit files in their respective directories
2. Test using local file:// protocol or local server
3. Backups created automatically before major changes
```

### For Deployment
```
1. Use root index.html and admin.html for quick kiosk setup
2. Use staff/ directory for full staff terminal deployment
3. Use customer/ for customer-facing kiosk tablets
4. Deploy lcd-banners/ separately for digital signage
```

### For Documentation
```
1. Start with README.md at root
2. Detailed guides in docs/START_HERE.md
3. Specific topics in other docs/*.md files
```

## Maintenance Notes

- **Logo files**: Maintained at both root and `/assets/images/` for different path dependencies
- **Config files**: Two versions exist for different use cases (root and assets)
- **Backups**: Keep only necessary backups, clean old ones periodically
- **LCD Banners**: Independent system, can be deployed separately

## Migration from Old Structure

This structure was organized from a flat root directory. Key improvements:
1. ✅ Moved all documentation to `/docs/`
2. ✅ Consolidated backups to `/backups/`
3. ✅ Centralized assets to `/assets/`
4. ✅ Removed duplicate files
5. ✅ Maintained all working path references
6. ✅ Preserved backward compatibility

All applications tested and verified working after reorganization.

---
*Last Updated: 2026-01-29*
