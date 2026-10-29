import { useEffect, useRef, useState } from 'react'
import { CalendarDays, Check, Globe, MessageSquare, Phone, Search, X } from 'lucide-react'
import { gsap, useGSAP, reduced } from './gsap.js'
import { benefits } from './data.js'
import { sampleSign } from './status.js'
import { usePlay } from './usePlay.js'
import { revealTitle } from './reveal.js'
import { Stars, Storefront } from './parts.jsx'

// Why a website: every benefit sits beside a live demo that proves it.

// A search box types a real-sounding query; the sample business with a website comes up first.
// Picking a different search re-types it; tapping the same one again goes back to the first search.
const SEARCHES = [
  { id: 'tint', q: 'window tint near me', biz: 'Your tint shop' },
  { id: 'barber', q: 'barbershop near me', biz: 'Your barbershop' },
  { id: 'clean', q: 'house cleaning near me', biz: 'Your cleaning service' },
]

function SearchDemo() {
  const box = useRef(null)
  const [pick, setPick] = useState(null)
  const [typed, setTyped] = useState('')
  const [seen, setSeen] = useState(false)
  const active = SEARCHES.find((s) => s.id === pick) ?? SEARCHES[0]
  const done = typed === active.q

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.15 })
    io.observe(box.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!seen) return
    if (reduced()) return setTyped(active.q)
    let i = 0
    setTyped('')
    const id = setInterval(() => {
      i += 1
      setTyped(active.q.slice(0, i))
      if (i >= active.q.length) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [seen, active.q])

  return (
    <div className="demo demo-search" ref={box}>
      <div className="search-box" aria-hidden="true">
        <Search size={20} strokeWidth={2.25} />
        <span>{typed}</span>
        <i className={`search-caret${done ? ' is-done' : ''}`} />
      </div>
      <ol className={`search-results${done ? ' is-in' : ''}`} aria-hidden="true">
        <li className="result is-you">
          <span className="result-name">{active.biz}</span>
          <span className="result-meta">
            <Stars size={13} /> 4.9 · Open now
          </span>
          <span className="result-link">
            <Globe size={15} /> Website
          </span>
        </li>
        <li className="result">
          <span className="result-name">Another business</span>
          <span className="result-meta">No website</span>
        </li>
        <li className="result">
          <span className="result-name">One more business</span>
          <span className="result-meta">No website</span>
        </li>
      </ol>
      <div className="search-picks" role="group" aria-label="Try a search">
        {SEARCHES.map((s) => (
          <button key={s.id} type="button" className={`pick${pick === s.id ? ' is-on' : ''}`} aria-pressed={pick === s.id} onClick={() => setPick((p) => (p === s.id ? null : s.id))}>
            {s.q.replace(' near me', '')}
          </button>
        ))}
      </div>
    </div>
  )
}

// A social page versus a website of your own.
function OwnDemo() {
  const [own, setOwn] = useState(false)
  return (
    <div className="demo demo-private">
      <div className={`mini-bar-url${own ? ' is-live' : ''}`}>
        {own ? <Check size={16} strokeWidth={3} /> : <Globe size={16} />}
        <span>{own ? 'yourshop.com' : 'instagram.com/yourshop'}</span>
      </div>
      <button type="button" role="switch" aria-checked={own} className="switch" onClick={() => setOwn((o) => !o)}>
        <span className="switch-knob" aria-hidden="true" />
        <span className="switch-label">{own ? 'Your own website' : 'Just a social page'}</span>
      </button>
    </div>
  )
}

function SignDemo() {
  const [sign, setSign] = useState(() => sampleSign())
  useEffect(() => {
    const id = setInterval(() => setSign(sampleSign()), 30000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="demo demo-sign">
      <p className="sign-row">
        <span className={`sign${sign.open ? '' : ' is-closed'}`}>{sign.word}</span>
        <span className="sign-time">{sign.time}</span>
      </p>
      <p className="demo-note">Live right now, with sample hours: Mon–Sat, 9 AM–6 PM.</p>
    </div>
  )
}

const TAPS = [
  { id: 'call', label: 'Call', icon: Phone, does: 'calls the shop' },
  { id: 'text', label: 'Text', icon: MessageSquare, does: 'opens a text to the shop' },
  { id: 'book', label: 'Book', icon: CalendarDays, does: 'opens the booking page' },
]

function TapDemo() {
  const [on, setOn] = useState(null)
  const picked = TAPS.find((t) => t.id === on)
  return (
    <div className="demo demo-tap">
      <div className="tap-row">
        {TAPS.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" className={`tap${on === id ? ' is-on' : ''}`} aria-pressed={on === id} onClick={() => setOn((o) => (o === id ? null : id))}>
            <Icon size={22} strokeWidth={2.25} />
            {label}
          </button>
        ))}
      </div>
      <p className="demo-note" aria-live="polite">
        {picked ? `On a real site, this ${picked.does}.` : 'Tap one to try it.'}
      </p>
    </div>
  )
}

function PhoneDemo() {
  const [ref, play] = usePlay()
  return (
    <div className={`demo demo-phone${play ? ' play' : ''}`} ref={ref} aria-hidden="true">
      <div className="mini-phone">
        <div className="mini-scroll">
          <div className="mini-art">
            <Storefront />
          </div>
          <p className="mini-h">Five stars on Main Street.</p>
          <p className="mini-sign">
            <span>Open</span> until 6 PM
          </p>
          <p className="mini-cta">Call the shop</p>
          <span className="mini-bar" />
          <span className="mini-bar short" />
          <div className="mini-card" />
          <div className="mini-card" />
        </div>
      </div>
    </div>
  )
}

function FactsDemo() {
  const yes = ['Your rating', 'Your hours', 'Your phone', 'Your address', 'Real reviews']
  const no = ['Made-up prices', 'Fake awards', 'Invented quotes']
  return (
    <div className="demo demo-facts">
      <div>
        <p className="facts-head">Always on your site</p>
        <ul>
          {yes.map((t) => (
            <li key={t}>
              <Check size={18} strokeWidth={2.75} className="ok" /> {t}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="facts-head">Never invented</p>
        <ul>
          {no.map((t) => (
            <li key={t} className="is-no">
              <X size={18} strokeWidth={2.75} /> {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const DEMOS = { search: SearchDemo, tap: TapDemo, phone: PhoneDemo, sign: SignDemo, facts: FactsDemo, own: OwnDemo }

export function Why() {
  const root = useRef(null)
  useGSAP(
    () => {
      revealTitle('.why-title', root.current)
      if (reduced()) return
      gsap.from('.cell', { y: 50, autoAlpha: 0, duration: 0.9, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.bento', start: 'top 82%' } })
    },
    { scope: root }
  )
  return (
    <section className="kit" id="why" ref={root}>
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2 why-title">Why your business needs a website.</h2>
          <p className="lede">Before customers call, they look you up. Your website is where they decide. Here’s what yours will do, live, so you can try it.</p>
        </header>
        <ul className="bento">
          {benefits.map((k) => {
            const Demo = DEMOS[k.id]
            return (
              <li key={k.id} className={`cell cell-${k.id}`}>
                <div className="cell-text">
                  <h3>{k.title}</h3>
                  <p>{k.body}</p>
                </div>
                <Demo />
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
