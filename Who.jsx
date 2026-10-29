import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, CalendarDays, Check, Coffee, MapPin, Navigation, Phone, Star, Truck } from 'lucide-react'
import { gsap, useGSAP, reduced } from './gsap.js'
import { audiences, locations } from './data.js'
import { sampleSign } from './status.js'
import { scrollToContact } from './scroll.js'
import { revealTitle } from './reveal.js'
import { CITIES, Storefront } from './parts.jsx'

// Who we build for: one tab per kind of business. Each panel's picture plays when the tab opens,
// and tapping the open tab again replays it.

function StoreVisual() {
  const root = useRef(null)
  const [sign, setSign] = useState(() => sampleSign())
  useEffect(() => {
    const id = setInterval(() => setSign(sampleSign()), 30000)
    return () => clearInterval(id)
  }, [])
  useGSAP(
    () => {
      if (reduced()) return
      gsap.from('.store-card > *', { y: 18, autoAlpha: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out' })
    },
    { scope: root }
  )
  return (
    <div className="who-visual store-visual" ref={root} aria-hidden="true">
      <div className="store-card">
        <div className="store-art">
          <Storefront />
        </div>
        <p className="store-name">Your shop</p>
        <p className="sign-row store-sign">
          <span className={`sign${sign.open ? '' : ' is-closed'}`}>{sign.word}</span>
          <span className="sign-time">{sign.time}</span>
        </p>
        <div className="store-actions">
          <span className="store-btn is-blue">
            <Navigation size={16} /> Directions
          </span>
          <span className="store-btn is-ink">
            <Phone size={16} /> Call
          </span>
        </div>
      </div>
    </div>
  )
}

function RoamVisual() {
  const root = useRef(null)
  useGSAP(
    () => {
      if (reduced()) {
        root.current.classList.add('is-static')
        return
      }
      gsap
        .timeline({ defaults: { ease: 'none' }, delay: 0.15 })
        .fromTo('.roam-zone', { scale: 0.82, autoAlpha: 0, transformOrigin: '50% 50%' }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'power2.out' }, 0)
        .fromTo('.roam-trail', { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1.8, ease: 'power1.inOut' }, 0.3)
        .to('.roam-van', { motionPath: { path: '.roam-route', align: '.roam-route', alignOrigin: [0.5, 0.5] }, duration: 1.8, ease: 'power1.inOut', immediateRender: true }, 0.3)
        .fromTo('.roam-meet', { autoAlpha: 0, y: 12, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(2)' }, 2.1)
    },
    { scope: root }
  )
  return (
    <figure className="who-visual roam-map" ref={root}>
      <div className="roam-stage">
        <svg viewBox="-90 0 490 266" role="img" aria-label="A van driving a service area from Corona through Norco and Eastvale to Riverside, ending at a meeting spot">
          <path className="roam-zone" d="M-40 60 C 20 -10, 330 -5, 380 60 S 330 250, 150 258 S -80 170, -40 60 Z" />
          <path className="roam-route" d="M80 222 C 98 190, 106 152, 112 120 S 92 82, 83 66 C 150 34, 250 46, 326 80" />
          <path className="roam-trail" pathLength="1" d="M80 222 C 98 190, 106 152, 112 120 S 92 82, 83 66 C 150 34, 250 46, 326 80" />
          {CITIES.map((c) => (
            <g key={c.name} className="city">
              <circle className="city-dot" cx={c.x} cy={c.y} r="7" />
              <text x={c.x + c.dx} y={c.y + (c.dy ?? 6)} textAnchor={c.anchor}>
                {c.name}
              </text>
            </g>
          ))}
        </svg>
        <span className="roam-van" aria-hidden="true">
          <Truck size={22} strokeWidth={2.25} />
        </span>
        <span className="roam-meet" aria-hidden="true">
          <Coffee size={18} strokeWidth={2.25} /> Let’s meet here
        </span>
      </div>
      <figcaption>Your site lists the towns you serve. We drive to you.</figcaption>
    </figure>
  )
}

function NewVisual() {
  const root = useRef(null)
  const count = useRef(null)
  const badge = useRef(null)
  useGSAP(
    () => {
      const stars = gsap.utils.toArray('.grow-star', root.current)
      const show = (p) => {
        const n = Math.round(p * 24)
        stars.forEach((st, i) => st.classList.toggle('is-on', p > (i + 0.5) / 6))
        count.current.textContent = n === 0 ? 'No reviews yet' : `${n} review${n === 1 ? '' : 's'}`
        badge.current.textContent = n >= 12 ? 'Growing fast' : 'Just opened'
        root.current.classList.toggle('has-reviews', n > 0)
      }
      if (reduced()) return show(1)
      const state = { p: 0 }
      show(0)
      gsap.to(state, { p: 1, duration: 2.8, delay: 0.4, ease: 'power1.inOut', onUpdate: () => show(state.p) })
    },
    { scope: root }
  )
  return (
    <figure className="who-visual grow-stage" ref={root} aria-hidden="true">
      <div className="grow-card">
        <div className="grow-art">
          <Storefront />
        </div>
        <div className="grow-body">
          <p className="grow-badge" ref={badge}>
            Just opened
          </p>
          <p className="grow-name">Your new shop</p>
          <p className="grow-rating">
            <span className="grow-stars">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="grow-star" size={20} strokeWidth={1.75} />
              ))}
            </span>
            <span className="grow-count" ref={count}>
              No reviews yet
            </span>
          </p>
          <div className="grow-chips">
            <span>
              <Phone size={16} /> Call
            </span>
            <span>
              <CalendarDays size={16} /> Book
            </span>
          </div>
        </div>
      </div>
      <figcaption>Every business starts at zero. A great site helps the first reviews come in.</figcaption>
    </figure>
  )
}

// Several locations on one site. Pick one to see its card; tap it again to go back to the overview.
function BigVisual() {
  const root = useRef(null)
  const [pick, setPick] = useState(null)
  const loc = locations.find((l) => l.id === pick)
  useGSAP(
    () => {
      if (reduced()) return
      gsap.from('.loc-panel > *', { y: 14, autoAlpha: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out' })
    },
    { scope: root, dependencies: [pick] }
  )
  return (
    <div className="who-visual big-visual" ref={root}>
      <div className="loc-picks" role="group" aria-label="Sample locations">
        {locations.map((l) => (
          <button key={l.id} type="button" className={`pick${pick === l.id ? ' is-on' : ''}`} aria-pressed={pick === l.id} onClick={() => setPick((p) => (p === l.id ? null : l.id))}>
            <MapPin size={16} /> {l.city}
          </button>
        ))}
      </div>
      <div className="loc-panel" aria-live="polite">
        {loc ? (
          <>
            <p className="loc-kicker">Sample location</p>
            <p className="loc-city">{loc.city}</p>
            <p className="loc-line">{loc.street}</p>
            <p className="loc-line">{loc.hours}</p>
            <div className="store-actions">
              <span className="store-btn is-blue">
                <Navigation size={16} /> Directions
              </span>
              <span className="store-btn is-ink">
                <Phone size={16} /> Call this location
              </span>
            </div>
          </>
        ) : (
          <>
            <p className="loc-kicker">Sample business</p>
            <p className="loc-city">3 locations, one site</p>
            {locations.map((l) => (
              <p key={l.id} className="loc-row">
                <span>{l.city}</span>
                <span>{l.hours}</span>
              </p>
            ))}
            <p className="loc-hint">Tap a location to open its card.</p>
          </>
        )}
      </div>
    </div>
  )
}

const VISUALS = { store: StoreVisual, roam: RoamVisual, new: NewVisual, big: BigVisual }

export function Who() {
  const root = useRef(null)
  const [tab, setTab] = useState(audiences[0].id)
  const [run, setRun] = useState(0)
  const a = audiences.find((x) => x.id === tab)
  const Visual = VISUALS[tab]

  useGSAP(() => revealTitle('.who-title', root.current), { scope: root })
  useGSAP(
    () => {
      if (reduced()) return
      gsap.from('.who-copy > *', { y: 20, autoAlpha: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out' })
    },
    { scope: root, dependencies: [tab, run] }
  )

  const choose = (id) => {
    if (id === tab) setRun((r) => r + 1)
    else setTab(id)
  }

  return (
    <section className="who" id="who" ref={root}>
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2 who-title">For businesses big and small.</h2>
          <p className="lede">A one-truck operation, a corner shop or a business with several locations. We build a site that fits the way you actually work.</p>
        </header>
        <div className="who-tabs" role="tablist" aria-label="Kinds of business">
          {audiences.map((x) => (
            <button key={x.id} type="button" role="tab" id={`tab-${x.id}`} aria-selected={tab === x.id} aria-controls="who-panel" className={`who-tab${tab === x.id ? ' is-on' : ''}`} onClick={() => choose(x.id)}>
              {x.tab}
            </button>
          ))}
        </div>
        <div className="who-panel" id="who-panel" role="tabpanel" aria-labelledby={`tab-${tab}`}>
          <Visual key={`${tab}-${run}`} />
          <div className="who-copy">
            <h3>{a.title}</h3>
            <p>{a.body}</p>
            <ul className="who-points">
              {a.points.map((p) => (
                <li key={p}>
                  <span className="who-check" aria-hidden="true">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-accent" onClick={(e) => (e.preventDefault(), scrollToContact())}>
              Talk to us <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
