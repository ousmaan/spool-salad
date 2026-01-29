# 📂 Project Structure Guide

## Quick Reference

```
salad-terminal/
│
├── 📂 staff/                    ← STAFF USE THIS
│   ├── index.html              ← Main terminal (open this!)
│   └── admin.html              ← Admin panel
│
├── 📂 customer/                 ← CUSTOMER USE THIS
│   └── index.html              ← Self-service screen
│
├── 📂 assets/                   ← SHARED RESOURCES
│   ├── images/
│   │   ├── logo-transparent.png
│   │   └── Logo.png
│   └── config.json             ← Product data
│
├── 📂 docs/                     ← READ THESE
│   ├── README.md
│   ├── QUICK_START.md
│   ├── DEMO_CHECKLIST.md
│   └── ...
│
└── 📂 backups/                  ← OLD VERSIONS
    ├── index_v1_backup.html
    └── index_v2_backup.html
```

---

## 🎯 What to Open

### For Demo Recording:
```
Open: staff/index.html
→ Beautiful landing screen
→ Animation sequence
→ Full dashboard
```

### For Managing Products/Prices:
```
Open: staff/admin.html
→ Edit salads, toppings, prices
→ Bilingual interface
```

### For Customers (Future):
```
Open: customer/index.html
→ Self-service ordering
→ (Under development)
```

---

## 📁 Folder Details

### `/staff/` - Staff Applications
- **Purpose**: Staff terminal and admin panel
- **Who uses**: Shop employees and managers
- **Files**:
  - `index.html` - Main ordering system
  - `admin.html` - Product/price management

### `/customer/` - Customer Applications  
- **Purpose**: Customer self-service
- **Who uses**: Customers directly
- **Files**:
  - `index.html` - Customer ordering screen

### `/assets/` - Shared Resources
- **Purpose**: Images, data, configs
- **Who uses**: All applications
- **Files**:
  - `images/logo-transparent.png` - Main logo
  - `config.json` - Products & pricing

### `/docs/` - Documentation
- **Purpose**: Guides and references
- **Who uses**: Developers, admins
- **Files**:
  - `README.md` - Main documentation
  - `QUICK_START.md` - Demo guide
  - `TROUBLESHOOTING.md` - Problem solving
  - And more...

### `/backups/` - Version History
- **Purpose**: Old versions for safety
- **Who uses**: Developers only
- **Files**:
  - `*_v1_backup.html` - Version 1
  - `*_v2_backup.html` - Version 2

---

## 🔄 File Relationships

```
staff/index.html
├─ Uses: assets/images/logo-transparent.png
├─ Uses: assets/config.json (embedded)
└─ Links to: staff/admin.html

staff/admin.html
├─ Uses: assets/config.json (embedded)
└─ Links to: staff/index.html

customer/index.html
├─ Uses: assets/images/logo-transparent.png
└─ Uses: assets/config.json
```

---

## 🎨 Asset Files

### Images
- **logo-transparent.png** - Main logo (transparent background)
- **Logo.png** - Original logo (with background)

### Configuration
- **config.json** - Products, prices, shop settings

---

## 📝 Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| `README.md` | Main overview | First time setup |
| `QUICK_START.md` | Demo guide | Before demo |
| `DEMO_CHECKLIST.md` | Demo prep | Night before demo |
| `PROJECT_JOURNAL.md` | Dev context | Understanding decisions |
| `VERSION_CONTROL.md` | Version info | Reverting changes |
| `TROUBLESHOOTING.md` | Fix issues | When problems occur |

---

## 🔧 How to Edit

### Change Logo:
```
Replace: assets/images/logo-transparent.png
With: Your new logo file (keep same name)
```

### Change Products/Prices:
```
Option 1: Open staff/admin.html (easy)
Option 2: Edit assets/config.json (advanced)
```

### Change Colors/Design:
```
Edit: staff/index.html (CSS section)
Look for: :root { --primary: ... }
```

---

## 📦 Deployment

### For Local Use (Demo):
```
1. Keep all files in current structure
2. Open staff/index.html in browser
3. Done!
```

### For Web Hosting:
```
1. Upload entire folder to web server
2. Access: yourdomain.com/staff/
3. Configure printer access
```

### For Multiple Devices:
```
1. Host on local network server
2. Access from tablets: http://server-ip/staff/
3. Print server needs network printer
```

---

## 🗂️ Clean & Organized!

Everything is now in logical folders:
- ✅ Staff apps together
- ✅ Customer apps separate
- ✅ Assets centralized
- ✅ Docs collected
- ✅ Backups archived

**Easy to find, easy to understand!** 📂✨
