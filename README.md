# Vionix Web Studio website

The complete source code for the Vionix Web Studio website (a web studio for businesses big and small, Corona area, CA).
Built with React 19, Vite 8, GSAP (ScrollTrigger, SplitText), Lenis smooth scrolling.

## Two ways to use this folder

- **`ready-to-host/`** is the finished website, already built: plain HTML, CSS, JavaScript, fonts and images. Upload that folder to any web host (Netlify, Vercel, Cloudflare Pages) and it works as-is.
- **Everything else** is the source code, for making changes. Edit `src/`, then rebuild with the steps below.

## Run it

Needs Node.js 20 or newer (https://nodejs.org).

```
npm install
npm run dev
```

Then open the address it prints (usually http://localhost:5173).

## Build it for hosting

```
npm run build
```

This makes a `dist/` folder of plain HTML, CSS, JavaScript and images that any web host can serve
(Netlify, Vercel, Cloudflare Pages, GitHub Pages or a normal web server).

## What's where

| Path | What it is |
|---|---|
| `index.html` | The page shell, title and meta tags |
| `src/App.jsx` | The page: every section, in order |
| `src/Care.jsx` | Updates, any day |
| `src/Craft.jsx` | Built right: this very page, measured live on the visitor's device |
| `src/Intro.jsx` | The opening: the logo tile pops in and draws its V (the orbit dot pops last), the name types itself in, then the whole mark |
| `src/Who.jsx` | Who we build for: one tab per kind of business |
| `src/Why.jsx` | Why a website: every benefit sits beside a live demo that proves it |
| `src/data.js` | All business facts: phone, address, hours, services and review quotes |
| `src/gsap.js` | GSAP and Lenis smooth-scroll setup |
| `src/intro.js` | The opening animation tells the rest of the page when it has finished, so the hero can start right after |
| `src/main.jsx` | Starts the app and loads the fonts and styles |
| `src/parts.jsx` |  |
| `src/reveal.js` | Section titles rise word by word out of a mask as they scroll in |
| `src/scroll.js` | Scroll helper used by jump links |
| `src/status.js` | Works out open / closing soon / closed in Pacific time for the door sign |
| `src/styles.css` | All styling: colors, type, layout, animation states and phone sizes |
| `src/usePlay.js` | Small looping demos play while hovered on a desktop, and while on screen on a phone |
| `public/` | Favicon, photos and any video |
| `PRODUCT.md`, `DESIGN.md`, `design-notes/` | The brief and design system |
| `_old-versions/` | Earlier drafts kept for reference (not used by the site) |

## Notes

- Business facts (phone, hours, services, reviews) live in `src/data.js` where the site has one.
- Fonts: Mona Sans (open source, bundled via Fontsource).
