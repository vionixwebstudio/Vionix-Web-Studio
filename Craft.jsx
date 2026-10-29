import { useEffect, useRef, useState } from 'react'
import { Gauge, Monitor, Timer } from 'lucide-react'
import { gsap, useGSAP, reduced } from './gsap.js'
import { revealTitle } from './reveal.js'

// Built right: this very page, measured live on the visitor's device.

// Frames per second, counted from the browser's own refresh while the section is on screen.
// Screens refresh at set rates, so a reading of 59.6 is really 60. Snap close readings to the nearest one.
const RATES = [30, 60, 90, 120, 144]
const snap = (v) => RATES.find((r) => Math.abs(v - r) <= 4) ?? Math.round(v)

function FpsStat() {
  const tile = useRef(null)
  const [fps, setFps] = useState(null)
  useEffect(() => {
    let raf = 0
    let frames = 0
    let since = performance.now()
    let live = false
    const tick = (t) => {
      frames += 1
      if (t - since >= 1000) {
        setFps(snap((frames * 1000) / (t - since)))
        frames = 0
        since = t
      }
      if (live) raf = requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !live) {
        live = true
        since = performance.now()
        frames = 0
        raf = requestAnimationFrame(tick)
      } else if (!e.isIntersecting) {
        live = false
        cancelAnimationFrame(raf)
      }
    })
    io.observe(tile.current)
    return () => {
      live = false
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [])
  return (
    <li className="stat" ref={tile}>
      <Gauge size={26} aria-hidden="true" />
      <p className="stat-num">
        {fps ?? '–'}
        <small>fps</small>
      </p>
      <p className="stat-label">
        {fps != null && fps <= 32
          ? 'Your browser is saving power right now, so it caps every site at 30. Plug in or turn off battery saver and watch this jump to 60.'
          : 'Smoothness on your screen, right now. Scroll and watch it hold.'}
      </p>
    </li>
  )
}

// How long this page took to be ready, from the browser's own timing data.
function LoadStats() {
  const [load, setLoad] = useState(null)
  useEffect(() => {
    const read = () => {
      const nav = performance.getEntriesByType('navigation')[0]
      if (nav && nav.domContentLoadedEventEnd > 0) setLoad(nav.domContentLoadedEventEnd / 1000)
    }
    read()
    const id = setTimeout(read, 1500)
    return () => clearTimeout(id)
  }, [])
  return (
    <>
      <li className="stat">
        <Timer size={26} aria-hidden="true" />
        <p className="stat-num">
          {load == null ? '–' : load.toFixed(2)}
          <small>s</small>
        </p>
        <p className="stat-label">Until this page was ready to use on your device.</p>
      </li>
    </>
  )
}

// The layout this screen is getting, updated live as the window changes size.
function ScreenStat() {
  const [w, setW] = useState(() => window.innerWidth)
  useEffect(() => {
    const on = () => setW(window.innerWidth)
    window.addEventListener('resize', on)
    return () => window.removeEventListener('resize', on)
  }, [])
  const kind = w <= 640 ? 'Phone' : w <= 1100 ? 'Tablet' : 'Desktop'
  return (
    <li className="stat">
      <Monitor size={26} aria-hidden="true" />
      <p className="stat-num">
        {w}
        <small>px wide</small>
      </p>
      <p className="stat-label">{kind} layout, picked for your screen. Resize the window and watch the page rearrange itself.</p>
    </li>
  )
}

const STACK = ['React', 'Vite', 'GSAP', 'ScrollTrigger', 'Smooth scrolling', 'Responsive CSS', 'SVG animation', 'Accessibility']

export function Craft() {
  const root = useRef(null)
  useGSAP(
    () => {
      revealTitle('.craft-title', root.current)
      if (reduced()) return
      gsap.from('.stat', { y: 40, autoAlpha: 0, duration: 0.8, stagger: 0.07, ease: 'power3.out', scrollTrigger: { trigger: '.stats', start: 'top 85%' } })
    },
    { scope: root }
  )
  return (
    <section className="craft" id="craft" ref={root}>
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2 craft-title">Fast, smooth, built to last.</h2>
          <p className="lede">Every site is hand-coded from scratch with the same tools behind many of the biggest sites on the web. Don’t take our word for it: here’s this page, measured live on your device.</p>
          <ul className="stack" aria-label="What we build with">
            {STACK.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </header>
        <ul className="stats">
          <FpsStat />
          <LoadStats />
          <ScreenStat />
        </ul>
      </div>
    </section>
  )
}
