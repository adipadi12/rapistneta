# RapistNeta - Political Accountability Tracker

A transparency project tracking criminal cases against Indian politicians. Each politician is categorized and stamped based on their criminal record:

- 🔴 **RAPIST** — Ongoing sexual assault / rape cases
- 🟠 **STILL GARBAGE** — Other criminal cases (corruption, murder, extortion, etc.)
- 🟢 **CLEAN** — No reported criminal cases

## Features

- **Interactive Card Grid** — Browse all politicians with visual stamps on their profiles
- **Search & Filter** — Filter by name, party, position, or case status
- **Spin the Wheel** — Random politician selector with animated spin wheel
- **Detailed Modal** — Click any card for full case details and sources
- **Responsive Design** — Works on desktop, tablet, and mobile
- **Dark Theme** — Easy on the eyes

## How to contribute
### Option A: Through PRs
1. <code>git clone https://github.com/adipadi12/rapistneta.git</code>
2. Open src/static/politicians-15k.json in any Text Editor
   <img width="1743" height="639" alt="image" src="https://github.com/user-attachments/assets/d76b05da-0d22-4951-8760-e0a127098193" />
3. Make your changes in the format as is given in the image. Or just copy paste the format below and change the id, name, party, position, image, state, district, status, cases, case details & sources
<pre>
   <code>
     {
      "id": 1,
      "name": "Brij Bhushan Sharan Singh",
      "party": "Bharatiya Janata Party (BJP)",
      "position": "Former Member of Parliament (Kaiserganj)",
      "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Brij_Bhushan_Sharan_Singh.jpg/250px-Brij_Bhushan_Sharan_Singh.jpg",
      "state": "Uttar Pradesh",
      "district": "Gonda",
      "status": "rapist",
      "cases": {
        "sexualAssault": 7,
        "other": 0
      },
      "caseDetails": {
        "sexualAssault": [
          "Multiple FIRs filed under IPC sections 354, 354A, 354D (sexual harassment)",
          "Allegations by female wrestlers including Olympic medalists",
          "Cases filed at Connaught Place Police Station, New Delhi (2023)"
        ]
      },
      "sources": [
        {
          "title": "BBC News - Wrestlers' protest",
          "url": "https://www.bbc.com/news/world-asia-india-65743355"
        },
        {
          "title": "The Hindu - Sexual harassment charges",
          "url": "https://www.thehindu.com/news/national/delhi-court-frames-charges-against-ex-wfi-chief-brij-bhushan-singh-in-sexual-harassment-case/article68199335.ece"
        }
      ]
    },
  </code>
</pre>
4. Commit your changes and submit a PR. I will verify and merge. Boom you contributed to open source

### Option B: Opening an Issue
1. Go to the issues tab on the top of this repo:
<img width="1750" height="548" alt="image" src="https://github.com/user-attachments/assets/b8cf9bae-d0d9-4e4b-9a07-c5fb88dbe650" />
2. Click on new issue.
3. Submit your entry in the same .json format as above. I'll add it myself after verifying
    
## Tech Stack

- **React 18** with Vite
- **CSS3** with custom properties and animations
- **No external UI library** — lightweight and fast

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Data Sources

Case information is compiled from publicly available court records, news reports, and government disclosures. This is a transparency project — all data is sourced from public domain information.

## Disclaimer

This website presents publicly available information about criminal cases against Indian politicians. The categorizations are based on reported and ongoing cases. "Clean" status means no publicly reported criminal cases were found — it does not constitute an endorsement. Information is provided as-is for public awareness.

## License

MIT
