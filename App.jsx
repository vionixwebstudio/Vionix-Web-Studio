import { useEffect, useRef, useState } from 'react'
import { ArrowDown, Check, Lock, MapPin, Moon, MoveVertical, Hammer, Phone, Plus, RotateCcw, Search, Sun } from 'lucide-react'
import { gsap, ScrollTrigger, SplitText, useGSAP, reduced, startSmoothScroll } from './gsap.js'
import { isJumping, scrollToContact, scrollToId, scrollToSection } from './scroll.js'
import { contact, faq, nextSteps, proof, steps, studio } from './data.js'
import { readLede, revealTitle } from './reveal.js'
import { BubbleGlyph, LogoMark, MailGlyph, PhoneGlyph, PinGlyph, Stars, Storefront } from './parts.jsx'
import { Why } from './Why.jsx'
import { Who } from './Who.jsx'
import { Craft } from './Craft.jsx'
import { Care } from './Care.jsx'
import { Intro } from './Intro.jsx'
import { introDone } from './intro.js'

export default function App() {
  useEffect(() => {
    const stop = startSmoothScroll()
    document.fonts.ready.then(() => ScrollTrigger.refresh())
    return stop
  }, [])

  // Site-wide touches: subheads fill in as you read, and the main buttons lean toward the cursor.
  useGSAP(() => {
    gsap.utils.toArray('.sec-head .lede').forEach((el) => readLede(el, el))
    if (reduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    const off = []
    gsap.utils.toArray('.btn').forEach((btn) => {
      const x = gsap.quickTo(btn, 'x', { duration: 0.5, ease: 'power3.out' })
      const y = gsap.quickTo(btn, 'y', { duration: 0.5, ease: 'power3.out' })
      const move = (e) => {
        const r = btn.getBoundingClientRect()
        x((e.clientX - r.left - r.width / 2) * 0.22)
        y((e.clientY - r.top - r.height / 2) * 0.3)
      }
      const leave = () => {
        x(0)
        y(0)
      }
      btn.addEventListener('pointermove', move)
      btn.addEventListener('pointerleave', leave)
      off.push(() => {
        btn.removeEventListener('pointermove', move)
        btn.removeEventListener('pointerleave', leave)
      })
    })
    return () => off.forEach((f) => f())
  })

  return (
    <>
      <Intro />
      <Header />
      <main>
        <Hero />
        <Proof />
        <Why />
        <Build />
        <Who />
        <Care />
        <Craft />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

function Logo() {
  return (
    <span className="logo">
      <span className="logo-tile" aria-hidden="true">
        <LogoMark id="vx-top" />
      </span>
      {studio.name}
    </span>
  )
}

const NAV = [
  ['why', 'Why a website'],
  ['how', 'How it works'],
  ['who', 'Who it’s for'],
  ['care', 'Updates'],
]

// Dark by default on every load; this switches to light (and back) for the visit. The new theme opens out
// from the button in a circle where the browser supports it.
function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark')
  const flip = (e) => {
    const next = dark ? 'light' : 'dark'
    const apply = () => {
      document.documentElement.dataset.theme = next
      document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#000000' : '#f5f5f7')
      setDark(!dark)
    }
    if (!document.startViewTransition || reduced()) return apply()
    const x = e.clientX || window.innerWidth - 80
    const y = e.clientY || 36
    const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))
    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] }, { duration: 650, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', pseudoElement: '::view-transition-new(root)' })
    })
  }
  return (
    <button type="button" className="theme-toggle" onClick={flip} aria-pressed={dark} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? <Sun size={20} strokeWidth={2.25} /> : <Moon size={20} strokeWidth={2.25} />}
    </button>
  )
}

function Header() {
  const bar = useRef(null)
  // The bar turns dark over the two dark sections. Refreshed last, after the pinned build has added its height.
  useGSAP(() => {
    const dark = (on) => bar.current.classList.toggle('is-dark', on)
    ;['.craft'].forEach((trigger) => ScrollTrigger.create({ trigger, start: 'top 36px', end: 'bottom 36px', refreshPriority: -1, onToggle: (st) => dark(st.isActive) }))
    // Contact runs into the footer at the very bottom, so this one never ends.
    ScrollTrigger.create({ trigger: '.contact', start: 'top 36px', end: () => ScrollTrigger.maxScroll(window) + 1, refreshPriority: -1, onToggle: (st) => dark(st.isActive) })
    // The menu marks the section you're in, and a thin line under the bar shows how far down the page you are.
    NAV.forEach(([id]) => {
      const link = bar.current.querySelector(`[href="#${id}"]`)
      ScrollTrigger.create({ trigger: `#${id}`, start: 'top 50%', end: 'bottom 50%', refreshPriority: -1, onToggle: (st) => link.classList.toggle('is-here', st.isActive) })
    })
    gsap.fromTo('.top-progress', { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } })
  })
  const go = (id) => (e) => {
    e.preventDefault()
    scrollToId(id)
  }
  return (
    <header className="top" ref={bar}>
      <a href="#top" className="top-home" onClick={go('top')} aria-label={`${studio.name}, back to top`}>
        <Logo />
      </a>
      <nav className="top-nav" aria-label="Sections">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={go(id)}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
      <a href="#contact" className="btn btn-ink top-cta" onClick={(e) => (e.preventDefault(), scrollToContact())}>
        Get in touch
      </a>
      <span className="top-progress" aria-hidden="true" />
    </header>
  )
}

// A map listing for a sample business: great rating, everything filled in, except a website.
function Listing({ className = '', clicked = false, chipRef }) {
  return (
    <div className={`listing ${className}`} aria-hidden="true">
      <div className="listing-photo">
        <Storefront />
      </div>
      <div className="listing-body">
        <p className="listing-name">Your shop</p>
        <p className="listing-rating">
          <b>4.9</b> <Stars size={15} /> <span>(128)</span>
        </p>
        <p className="listing-meta">Local business · Corona, CA</p>
        <div className="listing-chips">
          <span className="chip">
            <MapPin size={16} /> Directions
          </span>
          <span className="chip">
            <Phone size={16} /> Call
          </span>
          <span className={`chip chip-add${clicked ? ' is-on' : ''}`} ref={chipRef}>
            <span className="chip-fill" />
            <span className="chip-label">
              <Plus size={16} strokeWidth={2.5} /> {clicked ? 'Building…' : 'Add website'}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const root = useRef(null)
  const [clicked, setClicked] = useState(false)

  useGSAP(
    () => {
      const split = SplitText.create('.hero-title', { type: 'lines,words', mask: 'lines' })
      if (reduced()) {
        setClicked(true)
        return
      }
      // The entrance waits for the opening animation, then the headline rises out of a soft blur word by word.
      const intro = gsap.timeline({ paused: true, defaults: { ease: 'power3.out' } })
      intro
        .from(split.words, { yPercent: 110, filter: 'blur(10px)', stagger: 0.07, duration: 1.1, ease: 'power4.out' })
        .from('.hero-sub, .hero-actions, .hero-meta', { y: 22, autoAlpha: 0, duration: 0.8, stagger: 0.09 }, '-=0.9')
        .from(gsap.utils.toArray(document.querySelectorAll('.top-nav a, .theme-toggle')), { y: -12, autoAlpha: 0, duration: 0.6, stagger: 0.05 }, 0.1)
      introDone.then(() => intro.play())
      // The cursor clicks "Add website". On a desktop the card is in view at load; on a phone it sits below the fold,
      // so there the click waits until the card scrolls into view.
      const click = (tl) =>
        tl
          .fromTo('.cursor', { x: 140, y: 120, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 1.1, ease: 'power2.inOut' })
          .to('.hero-card .chip-add', { scale: 0.93, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.inOut' })
          .add(() => setClicked(true))
          .to('.cursor', { autoAlpha: 0, y: 14, duration: 0.5 }, '+=0.7')
          .from('.hero-hint', { autoAlpha: 0, y: 8, duration: 0.6 }, '<')
      const mm = gsap.matchMedia()
      mm.add('(min-width: 901px)', () => {
        intro.from('.hero-card', { y: 70, rotateX: 18, transformPerspective: 1000, transformOrigin: '50% 100%', autoAlpha: 0, duration: 1.3, ease: 'power3.out' }, 0.25)
        const t = click(gsap.timeline({ paused: true }).to({}, { duration: 1.9 }))
        introDone.then(() => t.play())
      })
      mm.add('(max-width: 900px)', () => {
        click(gsap.timeline({ scrollTrigger: { trigger: '.hero-card', start: 'top 70%', once: true } }))
      })
    },
    { scope: root }
  )

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-copy">
        <h1 className="hero-title">
          Websites for
          <br />
          businesses,
          <br />
          <span className="hero-mark">big and small.</span>
        </h1>
        <p className="hero-sub">
          We design and code custom websites that help businesses get found, look great on every phone and turn visitors into calls. Based in Corona, serving Riverside, Norco and Eastvale.
        </p>
        <div className="hero-actions">
          <a href="#why" className="btn btn-accent" onClick={(e) => (e.preventDefault(), scrollToId('why'))}>
            See what you get <ArrowDown size={18} strokeWidth={2.25} />
          </a>
          <a href="#contact" className="btn btn-line" onClick={(e) => (e.preventDefault(), scrollToContact())}>
            Get in touch
          </a>
        </div>
        <p className="hero-meta">Great reviews but no website? That’s exactly who we love working with.</p>
      </div>

      <div className="hero-art">
        <div className="hero-card">
          <Listing clicked={clicked} />
          <svg className="cursor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 2l16 9.5-7 1.6 4.2 7.4-3 1.6-4.2-7.4L5 19z" />
          </svg>
        </div>
        <p className="hero-hint">
          <MoveVertical size={18} aria-hidden="true" /> No website yet? We add one.
        </p>
      </div>
    </section>
  )
}

// The proof strip: four true numbers that count up as they arrive.
function Proof() {
  const root = useRef(null)
  useGSAP(
    () => {
      if (reduced()) return
      gsap.utils.toArray('.proof-num', root.current).forEach((el) => {
        const to = Number(el.dataset.n)
        const state = { v: 0 }
        gsap.to(state, { v: to, duration: 1.2, ease: 'power2.out', snap: { v: 1 }, scrollTrigger: { trigger: root.current, start: 'top 88%' }, onUpdate: () => (el.textContent = state.v) })
      })
      gsap.from('.proof li', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 88%' } })
    },
    { scope: root }
  )
  return (
    <section className="proof-wrap" ref={root} aria-label="At a glance">
      <ul className="wrap proof">
        {proof.map((p) => (
          <li key={p.label}>
            <span className="proof-num" data-n={p.n}>
              {p.n}
            </span>
            <span className="proof-label">{p.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

// The signature: a listing with no website becomes a full site, then a phone preview, then goes live.
function Build() {
  const root = useRef(null)
  const tlRef = useRef(null)
  const [step, setStep] = useState(0)
  const [phase, setPhase] = useState('waiting') // waiting, playing, done

  useGSAP(
    () => {
      revealTitle('.build-title', root.current)
      if (reduced()) {
        root.current.classList.add('is-static')
        setPhase('done')
        return
      }
      // Plays on its own as the section arrives; no scrolling needed to drive it.
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: 'none' },
        onUpdate: () => {
          const i = Math.min(steps.length - 1, Math.floor(tl.progress() * steps.length * 0.999))
          setStep((s) => (s === i ? s : i))
        },
        onComplete: () => setPhase('done'),
      })
      tlRef.current = tl
      tl.timeScale(0.5)

      tl.fromTo('.steps-fill', { scaleY: 0 }, { scaleY: 1, duration: 4 }, 0)
        // 1. Find
        .fromTo('.scan', { xPercent: -160, autoAlpha: 0 }, { xPercent: 220, autoAlpha: 1, duration: 0.6, ease: 'power1.inOut' }, 0.05)
        .to('.scan', { autoAlpha: 0, duration: 0.12 }, 0.6)
        .fromTo('.no-site', { autoAlpha: 0, y: 12, scale: 0.9 }, { autoAlpha: 1, y: 0, scale: 1, duration: 0.2, ease: 'back.out(2)' }, 0.5)
        .fromTo('.stage .chip-fill', { scaleX: 0 }, { scaleX: 1, duration: 0.25, ease: 'power2.out' }, 0.72)
        // 2. Build
        .to('.no-site', { autoAlpha: 0, duration: 0.15 }, 1)
        .to('.stage .listing', { scale: 0.86, autoAlpha: 0, duration: 0.35, ease: 'power2.in' }, 1.05)
        .fromTo('.bw', { scale: 0.06, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.5, ease: 'power3.inOut' }, 1.05)
        .from('.bp-nav', { y: -10, autoAlpha: 0, duration: 0.15 }, 1.45)
        .fromTo('.bp-line', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.22, stagger: 0.08 }, 1.5)
        .fromTo('.bp-art', { clipPath: 'inset(100% 0 0 0 round 1.2cqw)' }, { clipPath: 'inset(0% 0 0 0 round 1.2cqw)', duration: 0.3, ease: 'power2.out' }, 1.55)
        .from('.bp-sign', { autoAlpha: 0, x: -8, duration: 0.12 }, 1.72)
        .from('.bp-cta', { autoAlpha: 0, scale: 0.8, duration: 0.15, ease: 'back.out(2)' }, 1.78)
        .from('.bp-review', { autoAlpha: 0, y: 14, duration: 0.15, stagger: 0.05 }, 1.82)
        // 3. Show
        .to('.bw', { xPercent: () => (window.innerWidth > 900 ? -5 : 0), duration: 0.4, ease: 'power2.inOut' }, 2.05)
        .fromTo('.ph', { xPercent: 140, rotate: 8, autoAlpha: 0 }, { xPercent: 0, rotate: 0, autoAlpha: 1, duration: 0.45, ease: 'power3.out' }, 2.05)
        .from('.ph-in > *', { autoAlpha: 0, y: 10, duration: 0.12, stagger: 0.05 }, 2.4)
        .fromTo('.tag-private', { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.15 }, 2.3)
        // 4. Launch
        .to('.tag-private', { autoAlpha: 0, y: 8, duration: 0.12 }, 3.05)
        .fromTo('.tag-live', { autoAlpha: 0, y: -8 }, { autoAlpha: 1, y: 0, duration: 0.15, ease: 'back.out(2)' }, 3.12)
        .to('.url-preview', { autoAlpha: 0, duration: 0.1 }, 3.05)
        .fromTo('.url-live', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.3 }, 3.12)
        .fromTo('.live-ring', { scale: 1, autoAlpha: 0.9 }, { scale: 2.2, autoAlpha: 0, duration: 0.4, ease: 'power2.out' }, 3.2)
        .to({}, { duration: 0.45 }, 3.55)

      const start = () => {
        if (tl.progress() < 1 && !tl.isActive()) {
          tl.play()
          setPhase('playing')
        }
      }
      ScrollTrigger.create({ trigger: '.build-pin', start: 'top 55%', once: true, onEnter: start })
      // On the way down, the page settles onto the section once and the animation runs by itself.
      // Nothing is locked: scrolling on carries straight past it, even mid-animation.
      ScrollTrigger.create({
        trigger: '.build-pin',
        start: 'top 35%',
        once: true,
        onEnter: (st) => {
          if (tl.progress() >= 1 || isJumping()) return
          scrollToSection(st.trigger)
          start()
        },
      })
    },
    { scope: root }
  )

  // After it has played once, tapping a step replays the animation from that step.
  const jump = (i) => {
    const tl = tlRef.current
    if (!tl || phase !== 'done') return
    setPhase('playing')
    tl.play(i)
  }

  return (
    <section className="build" id="how" ref={root}>
      <div className="build-pin">
        <div className="build-side">
          <h2 className="h2 build-title">How it works.</h2>
          <p className="build-sub">From your map listing to a live website, in four steps.</p>
          <div className="steps-wrap">
          <span className="steps-track" aria-hidden="true">
            <span className="steps-fill" />
          </span>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.id} className={i === step ? 'is-on' : ''}>
                <button type="button" onClick={() => jump(i)} aria-current={i === step ? 'step' : undefined}>
                  <span className="step-num">0{i + 1}</span>
                  <span className="step-title">{s.title}</span>
                </button>
                <p className="step-body">{s.body}</p>
              </li>
            ))}
          </ol>
          </div>
          <p className="scroll-cue" aria-live="polite">
            {phase === 'done' ? (
              <>
                <RotateCcw size={18} aria-hidden="true" /> Tap a step to watch it again.
              </>
            ) : (
              <>
                <Hammer size={18} aria-hidden="true" /> Building it now. Watch it come together.
              </>
            )}
          </p>
        </div>

        <div className="stage" aria-hidden="true">
          <Listing />
          <span className="scan">
            <Search size={28} strokeWidth={2.25} />
          </span>
          <span className="no-site">No website</span>

          <div className="bw">
            <div className="bw-bar">
              <span className="bw-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="bw-url">
                <span className="url-preview">
                  <Lock size={13} /> private preview
                </span>
                <span className="url-live">yourshop.com</span>
              </span>
              <span className="bw-tags">
                <span className="tag tag-private">
                  <Lock size={14} /> Private
                </span>
                <span className="tag tag-live">
                  <span className="live-ring" />
                  <Check size={14} strokeWidth={3} /> Live
                </span>
              </span>
            </div>
            <div className="bp">
              <div className="bp-nav">
                <b>Your shop</b>
                <span />
                <span />
                <span />
                <i>Call</i>
              </div>
              <div className="bp-hero">
                <div className="bp-copy">
                  <p className="bp-line">Five stars on</p>
                  <p className="bp-line">Main Street.</p>
                  <p className="bp-sign">
                    <span>Open</span> until 6 PM
                  </p>
                  <p className="bp-cta">
                    <Phone size={12} /> Call the shop
                  </p>
                </div>
                <div className="bp-art">
                  <Storefront />
                </div>
              </div>
              <div className="bp-reviews">
                {[0, 1, 2].map((i) => (
                  <div className="bp-review" key={i}>
                    <Stars size={9} />
                    <span />
                    <span />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="ph">
            <div className="ph-in">
              <div className="ph-art">
                <Storefront />
              </div>
              <p className="ph-h">Five stars on Main Street.</p>
              <p className="ph-sign">
                <span>Open</span> until 6 PM
              </p>
              <p className="ph-cta">
                <Phone size={11} /> Call the shop
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Faq() {
  const root = useRef(null)
  const [open, setOpen] = useState(null)
  useGSAP(() => revealTitle('.faq-title', root.current), { scope: root })
  return (
    <section className="faq" ref={root}>
      <div className="wrap faq-grid">
        <header className="sec-head">
          <h2 className="h2 faq-title">Questions, answered.</h2>
        </header>
        <ul className="qa">
          {faq.map((f, i) => {
            const on = open === i
            return (
              <li key={f.q} className={on ? 'is-open' : ''}>
                <button type="button" aria-expanded={on} aria-controls={`qa-${i}`} onClick={() => setOpen((o) => (o === i ? null : i))}>
                  {f.q}
                  <span className="qa-icon" aria-hidden="true">
                    <Plus size={22} strokeWidth={2.25} />
                  </span>
                </button>
                <div className="qa-a" id={`qa-${i}`} role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

function ContactRow({ icon: Icon, tone, label, value, href }) {
  return (
    <li className="crow">
      <span className={`crow-icon is-${tone}`} aria-hidden="true">
        <Icon />
      </span>
      <span className="crow-label">{label}</span>
      {value ? (
        <a className="crow-value" href={href}>
          {value}
        </a>
      ) : (
        <span className="crow-value is-soon">Coming soon</span>
      )}
    </li>
  )
}

function Contact() {
  const root = useRef(null)
  const digits = contact.phone.replace(/\D/g, '')
  useGSAP(
    () => {
      revealTitle('.contact-title', root.current, 'top 70%')
      if (reduced()) return
      gsap.from('.next-step', { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: '.next', start: 'top 85%' } })
    },
    { scope: root }
  )
  return (
    <section className="contact" id="contact" ref={root}>
      <div className="wrap contact-grid">
        <div className="contact-head">
          <h2 className="h2 contact-title">Know a business that deserves a website?</h2>
          <p className="lede">Maybe it’s yours, maybe it’s the place down the street. Either way, we’d love to hear about it.</p>
        </div>
        <ol className="next" aria-label="What happens next">
          {nextSteps.map((n, i) => (
            <li key={n.title} className="next-step">
              <span className="next-num" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </li>
          ))}
        </ol>
        <ul className="contact-card">
          <ContactRow icon={MailGlyph} tone="mail" label="Email" value={contact.email} href={`mailto:${contact.email}`} />
          <ContactRow icon={PhoneGlyph} tone="call" label="Call" value={contact.phone} href={`tel:+1${digits}`} />
          <ContactRow icon={BubbleGlyph} tone="text" label="Text" value={contact.phone} href={`sms:+1${digits}`} />
          <li className="crow crow-area">
            <span className="crow-icon is-area" aria-hidden="true">
              <PinGlyph />
            </span>
            <span className="crow-label">Area</span>
            <span className="crow-value">{studio.cities.join(' · ')}</span>
          </li>
        </ul>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <p className="foot-mark" aria-hidden="true">
          <span className="logo-tile">
            <LogoMark id="vx-foot" />
          </span>
          {studio.name}
        </p>
        <div className="foot-row">
          <p>Custom websites for businesses, big and small · {studio.base}</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
