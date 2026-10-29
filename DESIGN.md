---
name: add website
description: The studio's own site. A map listing's empty "Add website" button, turned into a studio.
colors:
  lime: "#c8f53c"
  lime-hi: "#d6fb60"
  ink: "#0c0e12"
  ink-2: "#2e333b"
  muted: "#5b626c"
  bg: "#f2f3f5"
  surface: "#ffffff"
  line: "#dde0e5"
  line-2: "#c4c9d0"
  star: "#e2a012"
  night: "#0d0f12"
  night-2: "#15181d"
  night-3: "#1d2128"
  night-line: "#2a2f37"
  night-muted: "#a3aab4"
  night-ink: "#f2f3f5"
typography:
  display:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "min(6.4vw, 11.4svh)"
    fontWeight: 760
    lineHeight: 0.94
    letterSpacing: "-0.048em"
    fontVariation: "'wdth' 116"
  headline:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(40px, min(5.2vw, 10svh), 84px)"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(26px, 2.2vw, 32px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 114"
  lede:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 21px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontFamily: "'Mona Sans Variable', system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 650
    lineHeight: 1
    fontVariation: "'wdth' 108"
  label:
    fontFamily: "'Martian Mono Variable', ui-monospace, monospace"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.03em"
rounded:
  tick-box: "10px"
  tap: "18px"
  card: "24px"
  panel: "28px"
  phone: "32px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 4vw, 56px)"
  section: "clamp(88px, 10vw, 140px)"
  section-night: "clamp(88px, 12vw, 160px)"
  grid-gap: "16px"
  max: "1360px"
components:
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "46px"
  button-ink-hover:
    backgroundColor: "{colors.ink-2}"
  button-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  button-lime-hover:
    backgroundColor: "{colors.lime-hi}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 26px"
    height: "54px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
  listing-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "1.5em"
    padding: "1.25em 1.4em 1.4em"
  world-card:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.card}"
    padding: "22px 24px 26px"
  bento-cell:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "26px"
  tick:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tap}"
    padding: "18px 20px"
  tick-on:
    backgroundColor: "{colors.surface}"
  contact-card:
    backgroundColor: "{colors.night-2}"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.panel}"
    padding: "6px 28px"
---

# Design System: add website

## Overview

**Creative North Star: "Add Website"**

The page is the moment a map listing shows an empty, dashed "Add website" button, and what happens after someone presses it. Cool concrete white and near-black ink carry everything; one acid lime is the press, the fill, the "yes". Since 2026-10-27 (the user asked for apple.com): section headlines, labels and body run in Apple's own SF Pro through the system stack (SF on Apple devices, the platform font elsewhere), big and centered with a muted subhead, on Apple greys (#f5f5f7, #1d1d1f, #6e6e73) and pure-black night sections. Mona Sans stretched wide is kept only for brand moments: the hero headline, the logo, the footer wordmark and the miniature client sites drawn inside the demos.

It is a light page with two night sections (the work, then contact and footer), and the header turns dark with them. The signature is the pinned build: a listing becomes a browser window becomes a phone becomes a live address, all drawn in CSS and scaled as one picture. Everything else is a small live demo of a real promise, not a picture of it.

**Key Characteristics:**
- Concrete white ground, white cards, two night bands; lime is a fill only.
- SF Pro (system stack) for headlines (600, tight tracking), subheads (500, muted) and body; wide Mona Sans only for the hero, logo, wordmark and drawn client sites; SF Mono only for the code tree.
- Pills for actions, 18–28px rounded cards, hairline borders, almost no shadow.
- One pinned, scrubbed story (Find, Build, Show, Launch); every other motion is small and earned.
- No business names, no screenshots: the work is nine tiny CSS vignettes of ideas.

## Colors

Cool greys and ink with one electric lime that only ever fills.

### Primary
- **Acid Lime** (lime): Fills only: the lime button, the "Add website" chip as it builds, the hero highlighter bar, the logo tile, ticked boxes, the open accordion icon, the Live tag, the magnet ball, the call button inside drawn sites, and the header button over night sections. On night it may also tint a small icon or the first line of the code tree.
- **Bright Lime** (lime-hi): Hover of the lime button only.

### Neutral
- **Ink** (ink): Headings, body, borders on lime fills, the ink button, the Private tag, the mini phone frame, the focus ring.
- **Ink 2** (ink-2): Secondary copy (hero sub, step bodies), ink-button hover, unticked box border.
- **Muted** (muted): Ledes, notes, captions, inactive steps, scroll cues.
- **Concrete** (bg): The page ground, ticks, tap buttons, map card.
- **Surface** (surface): Cards, bento cells, the listing, the "Who it's for" band.
- **Line / Line 2** (line, line-2): Hairlines and rails; line-2 for control borders and accordion rules.
- **Star** (star): Rating stars only.
- **Night / Night 2 / Night 3** (night, night-2, night-3): The work and contact grounds, their cards, and the contact icon wells.
- **Night Line / Night Muted / Night Ink** (night-line, night-muted, night-ink): Borders, secondary text and headings on night.

### Named Rules
**The Lime Is A Fill Rule.** Lime is never text on a light ground. It fills a shape outlined or labelled in ink. Anything pressed, ticked, built or live turns lime; nothing decorative does.

**The Two Nights Rule.** Night grounds belong to the work and to contact plus footer. New sections are concrete or surface.

## Typography

**Headline and body font:** `-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Segoe UI', Roboto, Arial, sans-serif` (no font-stretch on it)
**Brand font:** Mona Sans Variable, stretched wide (hero headline, logo, footer wordmark, drawn client sites)
**Code font:** ui-monospace / SF Mono (code tree only)

**Character:** Apple-plain everywhere a visitor reads; the wide brand face only where the studio signs its name. No monospace labels (the user disliked them).

### Hierarchy
- **Display** (760, wdth 116, 0.94, -0.048em): The hero's three lines. The footer wordmark goes to 800, wdth 125, up to 30svh.
- **Headline** (SF 600, 44–88px, 1.04, -0.028em, balanced, centered with `.sec-head`): "How it works.", "Every business gets its own idea.", "What's included.", "Sound like your business?", "Questions, answered.", and the contact question.
- **Title** (700, wdth 110–114, 24–32px): Vignette card titles, bento titles, step titles (22–30px), accordion questions (650, wdth 106, 20–26px).
- **Lede** (SF 500, 20–27px, 1.3, max 34em, muted): The subhead under a section title.
- **Body** (400, 18px, 1.55): Reading text. Supporting text sits at 17px; answers and ticks at 19px.
- **Button** (650, wdth 108, 17px): Buttons, tap rows (20px), verdict line (20px).
- **Label** (SF 600, 17px, sentence case): Trade names on vignette cards, contact row labels, the facts columns' heads, step numbers. The code tree uses SF Mono at 16px.

### Named Rules
**The 15px Floor Rule.** No page text is smaller than 15px. Only text inside the scaled build picture is exempt, because it is drawn, not read.

**The Masked Rise Rule.** Headings arrive word by word out of SplitText line masks (yPercent 110, power4.out, 0.04–0.06s stagger). Masks carry descender padding. No blur reveals.

## Layout

A 1360px measure with a fluid gutter (16–56px); light sections step 88–140px, night sections 88–160px. The hero is a 1.1 : 0.9 split (copy left, listing card right) at full height. The build pins at 100svh with a 0.75 : 1.25 split, steps left, stage right. The work is a three-column card grid (two at 1100px, one at 900px). The kit is a four-column bento with a 260px row floor (sign, facts and private span two columns; tap and phone span two rows), two columns at 1100px, one at 640px. "Who it's for", the questions and contact are two-column splits that stack at 900px.

At 900px the nav hides, the header drops to 64px, and the build becomes copy above a taller stage (100 : 122) showing only the active step.

## Elevation & Depth

Flat and tonal: depth comes from concrete versus white versus night, and from hairline borders. Shadows exist only on the drawn objects in the hero and the build, as if they sit on a desk.

### Shadow Vocabulary
- **Listing** (`box-shadow: 0 1px 0 rgb(12 14 18 / 0.04), 0 1.6em 3.6em -1.8em rgb(12 14 18 / 0.3)`): The sample listing card.
- **Browser** (`box-shadow: 0 3cqw 7cqw -3cqw rgb(12 14 18 / 0.32)`) and **Phone** (`0 3cqw 6cqw -2cqw rgb(12 14 18 / 0.4)`): The drawn window and phone in the build.

### Named Rules
**The Desk Objects Rule.** Only the drawn listing, browser and phone cast shadows. Cards, cells and ticks stay flat. Nothing glows. The header's 14px backdrop blur is the only frost.

## Shapes

Pills for every action, chip, tag and URL bar. Cards step up with their size: 10px tick boxes and door signs, 18px ticks and tap rows, 24px vignette cards and bento cells, 28px map and contact panels, 32px mini phone. The logo tile is a 9px-radius lime square with an ink border, and it scales to the footer wordmark. Borders are 1px hairlines, 1.5px ink on lime, and dashed for anything not there yet (the "Add website" chip, "Coming soon").

## Components

### Buttons
- **Shape:** Full pill, 54px (46px for the header's ink button).
- **Lime:** Lime fill, ink text and a 1.5px ink border. The main action.
- **Ink:** Ink fill, concrete text; turns lime over night sections.
- **Line:** 1.5px ink outline that fills ink on hover.
- **States:** Hover only on fine pointers; press scales to 0.97; focus is a 3px ink outline offset 3px.

### Listing Card
A map listing drawn in CSS, sized in em from one font size (the container width divided by 27.5 in the hero), so it scales as one object. A storefront picture, "Your shop", 4.9 stars, Directions and Call chips, and a dashed "Add website" chip whose lime fill sweeps in from the left when a cursor clicks it.

### Build Stage (signature)
A 100 : 68.75 container-unit stage (all sizes in cqw) pinned for 320% of a screen, scrubbed at 0.6. A magnifier scans the listing, a "No website" tag drops in, the chip fills, a browser grows out of it and assembles a site (nav, lines, storefront, door sign, call button, reviews), a phone slides in under a Private tag, then the tag flips to a lime Live with a single ring and the address types in. A three-pixel rail fills beside four numbered steps; tapping a step jumps the scroll there. The hint reads "Scroll down to build it, up to take it apart." Reduced motion shows the finished picture.

### Trade Vignettes
Nine night cards (16 : 10 picture, SF trade label, SF title, one line; 28px radius, no border). Each picture is a tiny CSS loop of that site's idea. Every loop is paused on a finished-looking frame (negative delays) and runs only while hovered on desktop or 60% on screen on a phone, so nine things never move at once. Trades only, no numbers.

### Bento Demos
Seven white cells, each a working miniature: a live door sign (bordered display word plus time), Call/Text/Book tap rows that toggle lime, an auto-scrolling mini phone, a facts-versus-never list, an elastic magnet ball with two eyes that squishes and blinks on tap while a ring, four rounded ink lines and four lime dots burst from the tap point, a code tree on night, and a Private/Live switch with a URL pill.

### Ticks
Full-width rows with a 34px box that fills lime with a springy check. Each toggles off on a second tap. A 140px meter and a verdict follow; three or more shows a contact button, and the area tick lights the sketch map of the four cities and the 15 and 91.

### Accordion
Five rows between line-2 rules; a 46px round icon rotates 45 degrees and fills lime when open. One open at a time, tap again to close; the answer opens by animating its grid row.

### Contact Rows
A night card of rows: 46px icon well (lime icon), SF label, SF value; the card is centered under a centered headline. Empty values show a dashed "Coming soon" pill that does nothing. A giant wide wordmark with the logo tile closes the page.

## Do's and Don'ts

### Do:
- **Do** use lime only as a fill outlined or labelled in ink.
- **Do** draw the work as small CSS pictures of ideas, paused until hovered or on screen.
- **Do** size anything inside the build stage in container units so it scales as one picture.
- **Do** run motion through GSAP and ScrollTrigger with Lenis on the ticker (fine pointers only), and refresh after fonts load.
- **Do** make every selectable control toggle off on a second tap, and give the pin its scroll-up/down hint.

### Don't:
- **Don't** put section kicker labels above headings or numbers on the vignette cards; both were removed on purpose.
- **Don't** set page text under 15px.
- **Don't** add glows, halos or shadows on flat cards.
- **Don't** show business names, screenshots of pitch sites, personal names, prices or mentions of AI tools.
- **Don't** use lime as text on light grounds or as a section ground.


## Update 2026-10-27 (later)
- Accent is now a warm orange (silver was tried and rejected for lacking character): `--accent` #ff6a1f (Apple Cosmic Orange / system orange family), `--accent-hi` #ff8240, `--accent-soft` #ffe6d6, `--accent-deep` #d94e06 (map zone outline), `--accent-glow` #ff9a5c (text and icons on night). Ink text on orange (about 6:1), never white. The accent button has no outline, Apple style. Every former lime fill (buttons, ticks, tags, chip, awning stripes, logo tile, motion ball, burst dots, highlighter, number discs, icon wells) uses it. Lime is kept as `--lime` for a quick switch back.
- New section between What's included and Who it's for: "No storefront? No problem." White ground, centered head with trade pills, a service-area map card (dashed zone scales in, an ink trail draws Corona → Norco → Eastvale → Riverside while a dark van rides it via MotionPath, scrubbed, then a silver "Let's meet here" pill pops) beside three point tiles with silver icon wells.
- Contact gains a three-step "what happens next" row (night tiles with silver number discs): reach out, reply within one business day, meet in person for the demo.
- Section grounds alternate: hero bg, build bg, work night, kit bg, roam white, fit bg, FAQ white, contact night.


## Update 2026-10-27 (latest): white, black and blue
- Palette: white, black (ink #1d1d1f) and Apple blue `--blue` #0071e3 (`--blue-hi` #0077ed, `--blue-glow` #2997ff for text and icons on night). White text on blue, never ink. `--accent*` tokens now point at the blue.
- Deliberate variety: hero primary white-on-blue, secondary black-on-white with a black outline, header CTA white-on-black (white-on-blue over night), trade pills cycle blue / black / outlined white / blue-on-black, roam icon wells blue / black / outlined white, next-step discs white / blue / outlined black, tap rows go black when on, ticks and facts checks blue.
- Type: the hero headline, logo and footer wordmark moved to SF Pro (600, tight tracking); "Not anymore." is blue text instead of a highlighter bar. Wide Mona Sans remains only inside the drawn client-site miniatures and vignettes.
- Logo tile is black on light, blue on night. Awning stripes blue and white.
- New night section "Just getting started?" between Who it's for and Questions: centered head, a night tile holding a white sample listing ("Just opened" black badge, outline stars that fill amber one by one as you scroll while the count climbs to 24 reviews and the badge flips to "Growing fast"; Call white-on-blue, Book outlined), beside three night point tiles with icon wells blue / white / outlined white. The header turns dark over it too.

## Restructure 2026-10-28
Order: hero → proof strip → Why (bento of benefit + live demo) → How it works (pinned) → Our work (night) → Who it's for (white, segmented tabs: black active pill on a grey track; 2×2 grid on phones; panel = picture tile + copy with blue check bullets and a white-on-blue CTA) → Engineered, not assembled (night: three live stat tiles with blue-glow icons and big SF numbers, stack pills cycling blue / outlined / dark, then motion, code and accessibility tiles) → FAQ → Contact. Search demo: grey pill search box with a blue caret, results with the sample business outlined in blue and a white-on-blue Website pill; picks are outlined pills that go black when on.

## Update 2026-10-28 (later): woven-in interactivity and dark mode
- Removed the Our work vignette grid and the motion/code/accessibility tiles; the engineering section is now just the three live stats and the stack pills ("Fast, smooth, built to last.").
- Dark mode: `:root[data-theme='dark']` swaps bg #000, surface #1c1c1e, ink #f5f5f7, muted #a1a1a6, lines #38383a/#48484a, night #0f0f11; `--on-ink` flips text on ink fills; `--header` is the translucent bar. A round header button (moon/sun) toggles it with a circular reveal from the click point.
- Site-wide motion: section subheads fill from 22% to full opacity word by word as they scroll in; `.btn` elements lean toward the cursor (magnetic, desktop only); nav links get an underline and bold weight for the section in view; a 2px blue progress line sits under the header.
- Updates section (bg ground): Mon–Sun pills with blue checks (today white-on-blue), a chat card with outlined request picks and a thread (blue "you" bubbles, outlined "us" bubbles, typing dots), beside a sample site card whose hours, services, notice bar or photos change with a blue flash, then three point tiles.

## Update 2026-10-28 (latest)
- How it works is no longer scroll-scrubbed: the four-step timeline autoplays (timeScale 0.7, about 5.7 s) and holds the page at the section only if the visitor arrives before it finishes; the cue reads "Building it now. Watch it come together." then "Tap a step to watch it again."
- Opening animation on every load: full-screen ground, a large ink logo tile pops in with a back ease while its plus spins, the name rises letter by letter from a mask, then the mark flies (FLIP) into the header logo while the ground slides up; the hero headline then rises from a 10px blur word by word and the card tilts up into place.
