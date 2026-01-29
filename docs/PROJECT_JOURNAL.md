# Salad Terminal System - Project Journal

## Project Overview
**Created**: 2026-01-29  
**Deadline**: Tomorrow (prototype demo)  
**Purpose**: Price-enabled barcode system for custom salad orders to integrate with Daftra POS

---

## Business Context

### Current Setup
- Shop name: **Spool (سبول)** - "For all that the fields produce" (لكل ما تنتجه الحقول)
- Shop uses **Daftra** software for product management and invoicing
- Daftra already accepts **price-embedded barcodes** (currently used for weight-based products)
- Label printer: **EZPOS L001** (50mm x 30mm labels)
- Shop colors: **Green and Golden** (use tastefully, prioritize clean/modern UI)
- Logo: **Logo.png** (included in project)

### The Problem
- Salad section allows customers to choose multiple scoops of different ingredients
- Price varies based on selections (scoop-based, NOT weight-based)
- Need system to calculate total, generate barcode, and print label for cashier to scan

### The Solution
**Salad Terminal System**:
1. Staff selects base salad + toppings (with scoop counts)
2. System calculates total price
3. Generates Code 128 barcode with embedded price
4. Prints 50mm x 30mm label
5. Cashier scans at Daftra POS

---

## Technical Specifications

### Barcode Format
- **Type**: Code 128
- **Pattern**: `NXXXXXXPPPPPNNNNNN` (18 digits)
  - `N` = Padding (zeros)
  - `XXXXXX` = 6-digit product code for Daftra (e.g., `000001`)
  - `PPPPP` = 5-digit price in halalas (e.g., `02500` = 25.00 SAR)
  - `NNNNNN` = Additional padding (zeros)
- **Example**: `000000100250000000` = Product 000001, Price 25.00 SAR

### Printer Details
- **Model**: EZPOS L001
- **Label Size**: 50mm x 30mm
- **Protocol**: ESC/POS
- **Label Content**: Barcode + Price + Date/Time + Shop Name

### Tech Stack
- **Framework**: Vue.js 3 (CDN version)
- **Barcode**: Code 128 generation library
- **Storage**: JSON config file for pricing
- **Languages**: Arabic (default) + English
- **Printing**: ESC/POS commands (USB/Network)

---

## Product Design

### Base Salads (KSA + International)
Prices: 18-28 SAR

1. Caesar Salad (سلطة السيزر)
2. Greek Salad (السلطة اليونانية)
3. Fattoush (فتوش)
4. Tabbouleh (تبولة)
5. Rocca/Arugula Salad (سلطة الجرجير)
6. Caprese Salad (كابريزي)
7. Cobb Salad (كوب)
8. Niçoise Salad (نيسواز)
9. Quinoa Salad (كينوا)
10. Asian Sesame Salad (آسيوية بالسمسم)
11. Build Your Own (حسب الطلب)

### Toppings (Per Scoop)

**Premium Proteins** (12-15 SAR/scoop):
- Shrimp, Salmon

**Standard Proteins** (8-10 SAR/scoop):
- Grilled Chicken, Crispy Chicken, Tuna, Boiled Eggs

**Cheese** (6-8 SAR/scoop):
- Feta, Halloumi, Mozzarella

**Premium Veggies** (5-7 SAR/scoop):
- Avocado, Roasted Beetroot, Sun-dried Tomatoes, Artichoke Hearts, Roasted Peppers

**Fresh Veggies** (2-4 SAR/scoop):
- Cherry Tomatoes, Cucumbers, Corn, Olives (Black/Green), Mushrooms, Carrots, Red Cabbage, Rocca, Bell Peppers

**Crunch & Texture** (3-5 SAR/scoop):
- Croutons, Walnuts, Almonds, Pecans, Pumpkin Seeds, Sunflower Seeds, Crispy Noodles

**Extras** (2-4 SAR/scoop):
- Parmesan Shavings, Pickles, Jalapeños, Cranberries, Raisins

---

## File Structure

```
/salad-terminal/
  ├── index.html          # Staff Terminal (main interface)
  ├── admin.html          # Admin Panel (price management)
  ├── config.json         # Product & pricing data
  ├── print-server.js     # Optional: Node.js bridge for printing
  └── README.md           # Setup & usage instructions
```

---

## UI/UX Requirements

- **Language**: Arabic as default, English toggle
- **Interface**: Touch-friendly for staff operation
- **Design**: Clean, modern, intuitive
- **Colors**: Green/Golden accents (where appropriate)
- **Flow**: Base Selection → Add Toppings → Review → Print

---

## Future Considerations

- Separate tab for **Juices** (after salad prototype works)
- Logo upload for labels
- More advanced admin features
- Sales reporting/analytics

---

## Development Notes

### Session 1 - 2026-01-29
- Initial brainstorming and requirements gathering
- Confirmed Code 128 barcode format
- Decided on Vue.js approach for rapid development
- Pricing based on KSA market rates (2024-2026)
- Goal: Show impressive variety to customer, prove we understand the salad business

**Development Progress**:
1. ✅ Created `config.json` with 11 base salads and 50+ toppings
2. ✅ Built `index.html` - Main staff terminal with Vue.js
   - Bilingual interface (Arabic default, RTL support)
   - Touch-friendly UI with green/gold accents
   - Real-time price calculation
   - Code 128 barcode generation
   - Print preview modal
   - Order management
3. ✅ Built `admin.html` - Admin panel for configuration
   - Shop settings editor
   - Base salad price management
   - Topping price management
   - Advanced JSON editor
   - Export functionality
4. ✅ Created comprehensive `README.md`
   - Setup instructions
   - Usage guide
   - Troubleshooting section
   - Full product catalog

**Technical Implementation**:
- Vue.js 3 via CDN (no build process needed)
- JsBarcode library for Code 128 generation
- Pure CSS with CSS variables for theming
- Browser print API for label printing
- LocalStorage for admin config backup

---

## Key Success Criteria for Demo
✅ Working barcode generation with price embedding (18-digit Code 128)
✅ Clean, bilingual interface (Arabic/English with RTL support)
✅ Extensive salad variety (11 bases + 50+ toppings across 7 categories)
✅ Label printing system (50x30mm with barcode, price, date/time)
✅ Easy price management for admin (visual tables + JSON editor)  

---

## Open Questions / TODOs
- [ ] Test EZPOS printer connection (USB vs Network)
- [ ] Verify Daftra accepts our barcode format
- [ ] Fine-tune label design with customer feedback
- [ ] Add juice section after salad approval
- [ ] Consider customer-facing display option

---

*This journal will be updated as development progresses.*
