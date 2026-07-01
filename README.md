# Pr Lavrič — Turistična kmetija

Single-page marketing website for Eco Farm Pr Lavrič.

## Structure

```
website/
├── index.html          ← Entry point
├── css/
│   └── styles.css      ← All design tokens (colors, fonts, spacing, elevation)
├── js/
│   ├── ds-bundle.js    ← Design system components (Button, Field, Card, etc.)
│   ├── data.js         ← Shared data (nav links, accommodations, testimonials, etc.)
│   ├── icon.jsx        ← Lucide icon wrapper
│   ├── pattern.jsx     ← SVG pattern backgrounds + stamp logo loader
│   ├── animations.jsx  ← Scroll-triggered fade-in + decorative stamp elements
│   ├── sections-top.jsx    ← Nav, Hero, Intro, Story sections
│   ├── sections-bottom.jsx ← Accommodations, Food, Surroundings, Testimonials, Gallery, Contact, Footer
│   ├── blog.jsx        ← Blog section + CTA band
│   ├── modal.jsx       ← Accommodation detail modal
│   └── app.jsx         ← Main App component (assembles all sections)
└── assets/
    └── stamp.svg       ← Farm stamp/seal logo (70KB vector)
```

## Deploy to Vercel

1. Push this `website/` folder to a GitHub repo
2. Connect the repo to [Vercel](https://vercel.com)
3. Set the **Root Directory** to `website` (if it's inside a larger repo)
4. Deploy — no build step needed

Or use the Vercel CLI:
```bash
cd website
npx vercel
```

## How it works

- **React 18** + **Babel Standalone** transpile JSX in the browser (no build step)
- **Lucide** provides icons via the UMD global
- **Google Fonts** load Kalam, Playfair Display, and Jost
- All images come from Unsplash CDN

## Production tips

- For better performance, switch React CDN URLs from `development.js` to `production.min.js`
- Consider pre-compiling JSX with a build tool (Vite, etc.) for faster page loads
- The stamp.svg compresses to ~15KB with gzip (Vercel enables this by default)
