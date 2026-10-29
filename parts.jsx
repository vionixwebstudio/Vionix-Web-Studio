import { Star } from 'lucide-react'

export function Stars({ size = 16 }) {
  return (
    <span className="stars" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={size} fill="currentColor" strokeWidth={0} />
      ))}
    </span>
  )
}

// A little shopfront drawn in code: striped awning, window, door with an open sign.
export function Storefront() {
  return (
    <svg className="storefront" viewBox="0 0 320 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="320" height="180" fill="var(--sf-sky)" />
      <rect x="28" y="34" width="264" height="146" fill="var(--sf-wall)" />
      <rect x="28" y="34" width="264" height="12" fill="var(--sf-trim)" />
      {Array.from({ length: 11 }, (_, i) => (
        <path key={i} d={`M${28 + i * 24} 46h24v26a12 12 0 0 1-24 0z`} fill={i % 2 ? 'var(--sf-stripe-b)' : 'var(--sf-stripe-a)'} />
      ))}
      <rect x="46" y="96" width="132" height="84" rx="4" fill="var(--sf-glass)" />
      <path d="M58 104l40 0-26 64h-24z" fill="var(--sf-shine)" opacity=".5" />
      <rect x="198" y="96" width="76" height="84" rx="4" fill="var(--sf-door)" />
      <rect x="212" y="110" width="48" height="22" rx="3" fill="var(--sf-wall)" stroke="var(--sf-ink)" strokeWidth="2.5" />
      <text x="236" y="126" textAnchor="middle" className="sf-open">
        OPEN
      </text>
      <circle cx="262" cy="148" r="3.5" fill="var(--sf-wall)" />
    </svg>
  )
}

// Rough sketch of the four cities, roughly to scale, with the 15 and the 91.
export const CITIES = [
  { name: 'Eastvale', x: 83, y: 66, dx: -12, anchor: 'end' },
  { name: 'Norco', x: 112, y: 120, dx: 14, anchor: 'start' },
  { name: 'Riverside', x: 332, y: 83, dx: 0, dy: -20, anchor: 'middle' },
  { name: 'Corona', x: 80, y: 222, dx: -12, anchor: 'end' },
]


// The Vionix mark: a rounded V on Apple's blue-to-purple, with a small dot in orbit (the "ion").
// Each copy needs its own gradient id, so pass a unique id when using it more than once on a page.
export function LogoMark({ id = 'vx', className = '' }) {
  return (
    <svg className={`logo-mark ${className}`} viewBox="0 0 32 32" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a84ff" />
          <stop offset="0.55" stopColor="#5e5ce6" />
          <stop offset="1" stopColor="#bf5af2" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${id}-g)`} />
      <path className="logo-v" d="M9.2 10.4 15.2 22.6c.3.6 1.3.6 1.6 0l5.2-10.6" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle className="logo-dot" cx="24.4" cy="8.1" r="2.3" fill="#fff" />
    </svg>
  )
}

// Contact icons drawn soft and filled, like Apple's Phone, Messages and Mail app icons.
export function MailGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 5.5h14A2.5 2.5 0 0 1 21.5 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8A2.5 2.5 0 0 1 5 5.5Z" fill="#fff" />
      <path d="M3.6 7.2 12 13l8.4-5.8" fill="none" stroke="#0a6fe0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PhoneGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.1 3.1c.6-.5 1.5-.4 2 .2l2 2.5c.4.6.4 1.3 0 1.9l-1.1 1.3c-.3.4-.3.9-.1 1.3.9 1.7 2.3 3.1 4 4 .4.2.9.2 1.3-.1l1.3-1.1c.6-.4 1.3-.4 1.9 0l2.5 2c.6.5.7 1.4.2 2l-1 1.2c-1 1.2-2.6 1.7-4.1 1.2-5-1.7-8.9-5.6-10.6-10.6-.5-1.5 0-3.1 1.2-4.1Z"
        fill="#fff"
      />
    </svg>
  )
}

export function BubbleGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.6c-5 0-9 3.4-9 7.6 0 2.4 1.3 4.5 3.4 5.9-.2 1.3-.9 2.6-2 3.5 2 .1 3.8-.6 5.1-1.7.8.2 1.6.3 2.5.3 5 0 9-3.4 9-7.6S17 3.6 12 3.6Z" fill="#fff" />
    </svg>
  )
}

export function PinGlyph() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.6c-3.9 0-7 3-7 6.9 0 4.8 5.9 11.1 6.2 11.4.4.4 1.2.4 1.6 0 .3-.3 6.2-6.6 6.2-11.4 0-3.9-3.1-6.9-7-6.9Zm0 9.4a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" fill="#fff" />
    </svg>
  )
}
