// Everything the page says lives here. No personal name, age or tooling is ever mentioned.
// The studio name is a working name: change it here and it changes everywhere.

export const studio = {
  name: 'Vionix Web Studio',
  base: 'Corona, CA',
  cities: ['Corona', 'Riverside', 'Norco', 'Eastvale'],
}

// Fill these in when the business email and number are ready. Empty values show "Coming soon"
// and do nothing; filled values turn into working mailto:, tel: and sms: links automatically.
export const contact = {
  email: '',
  phone: '', // e.g. '(951) 555-0123'
}

// The four steps of the pinned build, in scroll order.
export const steps = [
  { id: 'find', title: 'Find', body: 'You reach out, or we spot your business on the map. Either way, we start from your real listing and your real reviews.' },
  { id: 'build', title: 'Build', body: 'We design and code a custom site around what makes your business different. No templates, no page builders.' },
  { id: 'show', title: 'Show', body: 'We meet you in person and show you the finished demo on your own phone, before you decide anything.' },
  { id: 'launch', title: 'Launch', body: 'Say yes and it goes live on your own web address, with your photos and your details.' },
]

// The proof strip under the hero. All true: nine sites built, four cities, the reply promise, updates any day.
export const proof = [
  { n: 9, label: 'custom websites built' },
  { n: 4, label: 'cities we serve' },
  { n: 1, label: 'business day to hear back' },
  { n: 7, label: 'days a week for updates' },
]

// Every business gets its own idea. Trades only: business names stay private until each owner says yes.
export const worlds = [
  { id: 'tint', trade: 'Window tinting', title: 'Roll it down', body: 'Limo glass rolls down as you scroll, then a car window dims to each film’s real darkness.' },
  { id: 'clock', trade: 'Barbershop', title: 'An hour in the chair', body: 'A clock dial walks through a visit, from the first look in the mirror to the last line-up.' },
  { id: 'tape', trade: 'Tax office', title: 'The return', body: 'An adding machine prints the office’s details and counts down the days to Tax Day.' },
  { id: 'planks', trade: 'Flooring', title: 'Underfoot', body: 'Samples hang on brass rails. Tap one and a whole room is laid in that floor, board by board.' },
  { id: 'stitch', trade: 'Tailor', title: 'The fitting', body: 'A red stitch sews itself under the headline while a tailor’s tape measures out each job.' },
  { id: 'bubbles', trade: 'Dog grooming', title: 'Bath day', body: 'Soap bubbles you can push around, and a bath photo that fills with a rising wave.' },
  { id: 'chrome', trade: 'Mobile detailing', title: 'Night bay', body: 'A liquid-chrome name that reflects the sky, and water that ripples under the cursor.' },
  { id: 'check', trade: 'House cleaning', title: 'Room by room', body: 'A checklist ticks off each room while the photos open up like a window.' },
  { id: 'house', trade: 'House painting', title: 'Point to it', body: 'Walk around a house and tap what needs work. The quote writes itself as you go.' },
]

// Why a website: each benefit sits next to a live demo that proves it (see Why.jsx).
export const benefits = [
  { id: 'search', title: 'Get found when people search', body: 'When someone searches for what you do, a real website gives them something to find, and a reason to pick you.' },
  { id: 'tap', title: 'Turn visitors into calls', body: 'Call, text or book in one tap, right under their thumb on every screen.' },
  { id: 'phone', title: 'Perfect on every phone', body: 'Most visitors are on a phone. Every site is designed for phones first and checked at phone size before it’s done.' },
  { id: 'sign', title: 'Open or closed, at a glance', body: 'Your hours on the front page, with a sign that knows whether you’re open right now.' },
  { id: 'facts', title: 'Build trust before they walk in', body: 'Your rating, your real reviews and your real details, front and center. Nothing made up.' },
  { id: 'own', title: 'A home page that’s actually yours', body: 'Social pages change the rules all the time. Your own website, on your own address, is yours to keep.' },
]

// No storefront, no problem: businesses that work from a truck, a garage or the customer's place.
export const roamTrades = ['Mobile detailing', 'Window tinting', 'House cleaning', 'Painting', 'Handyman work', 'Mobile grooming']

export const roamPoints = [
  { id: 'area', title: 'Your service area, not an address', body: 'The site shows the towns you cover, so nobody goes looking for a shop that isn’t there.' },
  { id: 'reach', title: 'Booked by text or call', body: 'Customers reach you straight from their phone, wherever you happen to be working.' },
  { id: 'meet', title: 'We come to you', body: 'A coffee shop, a job site or your driveway. We’ll meet wherever works and show you your site in person.' },
]

// Who we build for: one tab per kind of business (see Who.jsx).
export const audiences = [
  {
    id: 'store',
    tab: 'Storefronts',
    title: 'Shops, salons, studios and offices.',
    body: 'Your front door, online. Customers see your hours, find you on the map and call before they ever pull into the lot.',
    points: ['Hours, directions and an open sign, up front', 'Your best reviews where new customers see them', 'Call, text or book in one tap'],
  },
  {
    id: 'roam',
    tab: 'On the go',
    title: 'No storefront? No problem.',
    body: 'Plenty of great businesses work out of a truck, a garage or a customer’s driveway. You don’t need a shop to get a website, and you don’t need to come to us.',
    points: ['Your service area instead of a street address', 'Booked by text or call, wherever you’re working', 'We meet you in person, wherever works'],
  },
  {
    id: 'new',
    tab: 'Just starting out',
    title: 'Just getting started?',
    body: 'New in town, only a handful of reviews, or still finding your first regulars? That’s a great time for a website, and we’d love to help you grow from day one.',
    points: ['Look established before the reviews pile up', 'One link for your cards, your truck and your Instagram bio', 'A site that grows as the reviews, photos and services come in'],
  },
  {
    id: 'big',
    tab: 'Bigger businesses',
    title: 'More locations, more pages.',
    body: 'Running more than one spot, or outgrowing an old site? We build bigger sites with the same care, so every location and every page feels like you.',
    points: ['Every location on one site, each with its own hours and directions', 'Services, menus, team and careers pages with the same polish', 'Links to the booking and ordering tools you already use'],
  },
]

// Sample locations for the "Bigger businesses" demo.
export const locations = [
  { id: 'corona', city: 'Corona', street: 'Main Street', hours: 'Mon–Sat 9 AM–6 PM' },
  { id: 'riverside', city: 'Riverside', street: 'University Ave', hours: 'Mon–Fri 8 AM–5 PM' },
  { id: 'eastvale', city: 'Eastvale', street: 'Hamner Ave', hours: 'Every day 10 AM–7 PM' },
]

// Updates, any day: tap a request and watch it get done on the sample site (see Care.jsx).
export const requests = [
  { id: 'hours', label: 'New Sunday hours', ask: 'Can you change our Sunday hours to 10 to 4?', done: 'Done. Sunday now shows 10 AM–4 PM.' },
  { id: 'service', label: 'Add a service', ask: 'We started selling gift cards. Can you add them?', done: 'Done. Gift cards are on your services list.' },
  { id: 'notice', label: 'Holiday notice', ask: 'We’re closed for Thanksgiving. Can you post a notice?', done: 'Done. The holiday notice is up on your front page.' },
  { id: 'photo', label: 'Fresh photos', ask: 'Here are some new photos of the shop.', done: 'Done. Your new photos are live.' },
  { id: 'prices', label: 'Update prices', ask: 'Our prices changed a little. Can you update them?', done: 'Done. Your new prices are live.' },
  { id: 'page', label: 'Add a new page', ask: 'Can we get a page that introduces our team?', done: 'Done. Your new Team page is up.' },
]

export const carePoints = [
  { title: 'Any update, any day', body: 'New hours, prices, photos, services or a whole new page. We’re available 7 days a week.' },
  { title: 'Included in your monthly maintenance', body: 'Every update is covered by your monthly maintenance fee. No separate bill for each change.' },
  { title: 'Ask however’s easiest', body: 'Call, text or email. A real person reads it and takes care of it.' },
]

// What happens after someone reaches out.
export const nextSteps = [
  { title: 'You reach out', body: 'By email, call or text, whichever is easiest.' },
  { title: 'We reply within one business day', body: 'A real reply from us, not an auto-response.' },
  { title: 'We meet you in person', body: 'We’ll show you your demo on your own phone and answer every question.' },
]

// For businesses that are new or still collecting reviews.
export const growPoints = [
  { id: 'look', title: 'Look established from day one', body: 'A real website gives new customers confidence before the reviews have had time to pile up.' },
  { id: 'share', title: 'One link to share everywhere', body: 'On your cards, your truck, your Instagram bio, and with every happy customer who wants to pass you along.' },
  { id: 'grow', title: 'A site that grows with you', body: 'As the reviews, photos and services come in, we’re here to help your site keep up.' },
]

// "Sound like your business?" Each line toggles on and off.
export const fit = [
  { id: 'reviews', label: 'Your customers leave great reviews' },
  { id: 'nosite', label: 'No website yet, or just a Facebook or Instagram page' },
  { id: 'found', label: 'New customers find you on the map or by word of mouth' },
  { id: 'area', label: 'You’re in Corona, Riverside, Norco or Eastvale' },
]

export const faq = [
  { q: 'What do I need to do to get started?', a: 'Just reach out. We can build the first version from your public listing and real reviews, so you see it before deciding anything.' },
  { q: 'How soon will I hear back?', a: 'Within one business day. Then we’ll find a time to meet in person and walk you through your demo.' },
  { q: 'What does the monthly maintenance cover?', a: 'Any update you need, any day of the week: new hours, photos, prices, services, notices or whole new pages. Just tell us, and we take care of it. It’s all included in your monthly maintenance fee.' },
  { q: 'I already have a website. Can you make a better one?', a: 'Yes. We’ll rebuild it from scratch so it’s faster, cleaner and works perfectly on phones.' },
  { q: 'Do you work with bigger businesses?', a: 'Yes. Multiple locations, more pages, links to your booking or ordering tools. We build whatever the business needs.' },
  { q: 'Do I need a shop or an office?', a: 'No. Plenty of great businesses work out of a truck or from home. We’ll meet you wherever works.' },
  { q: 'Is the site public right away?', a: 'No. It stays private, shared only with you, until you say yes.' },
  { q: 'Can I use my own photos?', a: 'Yes. Sample photos hold the place until yours are ready, and they’re swapped out before launch.' },
  { q: 'Do I get the code?', a: 'If you ask for it, yes. We can send you all of it, neatly organized into folders with a guide to every file, so another developer could pick it up anytime.' },
]
