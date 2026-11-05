# RapistNeta - Project Structure Guide

## Overview
RapistNeta is a political accountability tracker built with React 18 + Vite. It displays Indian politicians with their criminal case information in an interactive card-based interface with filtering, search, and a random politician selector wheel.

---

## 📁 Project Structure

```
rapistneta/
├── public/                          # Static assets
│   ├── policians-images/           # Politician profile images
│   └── vekkam-modi.gif             # Favicon (Modi GIF)
├── src/
│   ├── components/                  # React components
│   │   ├── Header.jsx              # Top navigation/search/filters
│   │   ├── Header.css
│   │   ├── LocationFilter.jsx      # State/District filter dropdowns
│   │   ├── LocationFilter.css
│   │   ├── PoliticianCard.jsx      # Individual politician card
│   │   ├── PoliticianCard.css
│   │   ├── PoliticianGrid.jsx      # Grid layout container
│   │   ├── PoliticianGrid.css
│   │   ├── PoliticianModal.jsx     # Detailed view modal
│   │   ├── PoliticianModal.css
│   │   ├── SpinWheel.jsx           # Random selector wheel
│   │   └── SpinWheel.css
│   ├── data/
│   │   ├── politicians.js          # Main politician database (1213 entries)
│   │   ├── politicians-header.js   # Additional politician data
│   │   └── geography.js            # Indian states/UTs/districts data
│   ├── App.jsx                      # Main app component (routing/state)
│   ├── App.css                      # Global app styles
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Base CSS styles
├── dist/                            # Build output (generated)
├── node_modules/                    # Dependencies (generated)
├── generate-politicians.js          # Data generation script
├── link-images.js                   # Image linking utility
├── fix-and-create.js               # Data cleanup script
├── create-final.js                 # Final data processing
├── merge-final.js                  # Data merging utility
├── rebuild-clean.js                # Data rebuild script
├── rebuild-politicians.py          # Python data rebuild script
├── image-mapping.js                # Image mapping utility
├── index.html                       # HTML entry point
├── vite.config.js                  # Vite build configuration
├── package.json                     # Dependencies and scripts
├── .gitignore                       # Git ignore rules
└── README.md                        # Project documentation
```

---

## 🎯 What to Edit for Different Changes

### 1. **Change Header/Branding**
**Files to edit:**
- `src/components/Header.jsx` (lines 10-14)
  - Logo text: line 12 (`RapistNeta`)
  - Tagline: line 14 (`Tracking accountability in Indian politics`)
  - Logo icon: line 11 (currently `⚖️`)

### 2. **Modify Search/Filter Behavior**
**Files to edit:**
- `src/App.jsx` (lines 19-49)
  - Search logic: lines 23-31
  - Status filter: lines 34-36
  - Location filters: lines 39-45
- `src/components/Header.jsx` (lines 28-53)
  - Filter button labels and icons

### 3. **Change Politician Categories/Stamps**
**Files to edit:**
- `src/components/PoliticianCard.jsx` (lines 7-18)
  - Stamp text labels: lines 9-12
  - Add new categories by adding cases in the switch statement
- `src/components/PoliticianModal.jsx` (lines 7-18)
  - Same stamp logic for modal view
- `src/data/politicians.js`
  - Each politician's `status` field: `'rapist'`, `'garbage'`, or `'clean'`

### 4. **Add/Edit Politician Data**
**Files to edit:**
- `src/data/politicians.js` (main database)
  - Structure of each entry:
    ```javascript
    {
      id: 1,
      name: "Politician Name",
      party: "Party Name",
      position: "Position/Role",
      image: "URL or path to image",
      state: "State Name",
      district: "District Name",
      status: "rapist" | "garbage" | "clean",
      cases: {
        sexualAssault: 0,
        other: 0
      },
      caseDetails: {
        sexualAssault: ["Detail 1", "Detail 2"],
        other: ["Detail 1", "Detail 2"]
      },
      sources: [
        { title: "Source Title", url: "https://..." }
      ]
    }
    ```

### 5. **Modify Statistics Bar**
**Files to edit:**
- `src/App.jsx` (lines 67-90)
  - Add/remove stat tiles
  - Change stat labels and calculations
  - Current stats: Total, Sexual Assault Cases, Other Cases, Clean Record

### 6. **Change Color Scheme/Theme**
**Files to edit:**
- `src/index.css` - Global CSS variables (root colors)
- Component-specific CSS files:
  - `src/App.css` - Main app background/container styles
  - `src/components/PoliticianCard.css` - Card colors and stamp colors
  - `src/components/Header.css` - Header gradient and button colors
  - `src/components/PoliticianModal.css` - Modal theme
  - `src/components/SpinWheel.css` - Wheel colors

### 7. **Adjust Location Filters (States/Districts)**
**Files to edit:**
- `src/data/geography.js`
  - States list: lines 3-32
  - Union territories list: lines 33-42
  - Helper functions for district filtering: lines 45-83
- `src/components/LocationFilter.jsx`
  - Dropdown UI logic: entire component
  - Filter display: lines 126-135

### 8. **Customize Spin Wheel**
**Files to edit:**
- `src/components/SpinWheel.jsx`
  - Spin animation: lines 9-32
  - Wheel segments: lines 50-66
  - Spin duration: line 26 (currently 4000ms)
  - Rotation amount: line 14 (currently 5-8 full rotations)

### 9. **Modify Modal/Detail View**
**Files to edit:**
- `src/components/PoliticianModal.jsx`
  - Case details display: lines 54-96
  - Sources section: lines 98-114
  - Image handling: lines 26-43

### 10. **Change Grid Layout**
**Files to edit:**
- `src/components/PoliticianGrid.jsx` - Grid wrapper logic
- `src/components/PoliticianGrid.css` - Grid CSS
  - Columns, spacing, responsive breakpoints

### 11. **Update Favicon/Title/Meta**
**Files to edit:**
- `index.html`
  - Favicon: line 4 (`/vekkam-modi.gif`)
  - Page title: line 8
  - Meta description: line 7

### 12. **Add New Filter Types**
**Files to edit:**
- `src/App.jsx`
  - Add state variable: line 11-14 area
  - Add filter logic: line 19-49 area (useEffect)
  - Pass to relevant component
- Create new filter component or modify `Header.jsx`

### 13. **Modify Build Configuration**
**Files to edit:**
- `vite.config.js` - Vite settings (port, plugins, build options)
- `package.json` - Scripts, dependencies, metadata

### 14. **Change Development Port**
**Files to edit:**
- `vite.config.js` (line 7)
  - Currently: `port: 3000`

### 15. **Update Dependencies**
**Files to edit:**
- `package.json` (lines 13-23)
  - Add/remove/update dependencies
  - Then run: `npm install`

---

## 🔧 Key Data Generation Scripts

These scripts were used to generate and process the politician database:

1. **`generate-politicians.js`** - Generates bulk politician entries with state/district data
2. **`link-images.js`** - Links politician entries to image files
3. **`fix-and-create.js`** - Cleans up and fixes politician data
4. **`merge-final.js`** - Merges multiple data sources
5. **`rebuild-clean.js`** - Rebuilds clean politician data
6. **`rebuild-politicians.py`** - Python script for data rebuilding
7. **`create-final.js`** - Creates final politician database
8. **`image-mapping.js`** - Maps images to politician entries

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Run image linking utility
npm run link-images
```

---

## 📊 Data Schema Reference

### Politician Object Structure
```javascript
{
  id: Number,                    // Unique identifier
  name: String,                  // Full name
  party: String,                 // Political party
  position: String,              // Current/former position
  image: String,                 // Image URL or path
  state: String,                 // Indian state or UT
  district: String,              // District name
  status: String,                // 'rapist' | 'garbage' | 'clean'
  cases: {
    sexualAssault: Number,       // Count of sexual assault cases
    other: Number                // Count of other criminal cases
  },
  caseDetails: {
    sexualAssault: Array<String>, // Detailed case descriptions
    other: Array<String>          // Other case descriptions
  },
  sources: Array<{              // Source citations
    title: String,
    url: String
  }>
}
```

### Status Categories
- **`rapist`** - Ongoing sexual assault/rape cases → Red stamp
- **`garbage`** - Other criminal cases (corruption, murder, etc.) → Orange stamp
- **`clean`** - No reported criminal cases → Green stamp

---

## 🎨 Styling System

The project uses CSS custom properties (CSS variables) for theming. Global variables are in `src/index.css`.

### Component Style Organization
Each component has its own CSS file co-located with the JSX file:
- `ComponentName.jsx` → logic
- `ComponentName.css` → styles

This keeps component code modular and maintainable.

---

## 📝 Notes

- The project uses **no external UI libraries** - all UI is custom CSS
- Images are loaded from `public/policians-images/` directory
- The database currently contains **1213 politician entries**
- All data is compiled from publicly available sources
- The project is deployed on Vercel (`.vercel/` directory)
- Development mode includes hot module replacement (HMR)

---

## 🔍 Quick Reference: Common Tasks

| Task | File(s) to Edit |
|------|----------------|
| Add politician | `src/data/politicians.js` |
| Change app colors | `src/index.css` + component CSS files |
| Modify search bar | `src/components/Header.jsx` |
| Update stamp labels | `src/components/PoliticianCard.jsx` + `PoliticianModal.jsx` |
| Add filter option | `src/App.jsx` + `src/components/Header.jsx` |
| Change grid layout | `src/components/PoliticianGrid.css` |
| Update favicon | `index.html` + replace file in `/public/` |
| Modify wheel spin | `src/components/SpinWheel.jsx` |
| Add new state/UT | `src/data/geography.js` |
| Change page title | `index.html` |

---

*Last updated: 2026-11-05*
