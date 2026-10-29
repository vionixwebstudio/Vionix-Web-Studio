import { useRef, useState } from 'react'
import { gsap, useGSAP, reduced } from './gsap.js'
import { studio } from './data.js'
import { finishIntro } from './intro.js'
import { lockScroll, unlockScroll } from './scroll.js'
import { LogoMark } from './parts.jsx'

// The opening: the logo tile pops in and draws its V (the orbit dot pops last), the name types itself in, then the whole mark
// flies up into its spot in the header while the page underneath is revealed. Reduced motion skips straight to the page.
export function Intro() {
  const root = useRef(null)
  const [gone, setGone] = useState(false)

  useGSAP(
    () => {
      if (reduced()) {
        finishIntro()
        setGone(true)
        return
      }
      lockScroll(0)
      const logo = document.querySelector('.top-home')
      gsap.set(logo, { autoAlpha: 0 })
      const mark = root.current.querySelector('.intro-mark')
      const chars = root.current.querySelectorAll('.intro-word span')

      const tl = gsap.timeline({
        defaults: {},
        onComplete: () => {
          gsap.set(logo, { autoAlpha: 1 })
          unlockScroll()
          setGone(true)
        },
      })
      tl.from('.intro-tile', { scale: 0, rotate: -90, duration: 0.7, ease: 'back.out(1.8)' })
        .fromTo('.intro-tile .logo-v', { strokeDasharray: 40, strokeDashoffset: 40 }, { strokeDashoffset: 0, duration: 0.7, ease: 'power2.inOut' }, 0.2)
        .from('.intro-tile .logo-dot', { scale: 0, transformOrigin: '50% 50%', duration: 0.5, ease: 'back.out(3)' }, 0.75)
        .from(chars, { yPercent: 110, duration: 0.5, stagger: 0.035, ease: 'power3.out' }, 0.35)
        .add(() => {
          // Fly the mark to the header logo's exact spot and size.
          const a = mark.getBoundingClientRect()
          const b = logo.getBoundingClientRect()
          gsap.to(mark, { x: b.left - a.left, y: b.top - a.top, scale: b.height / a.height, transformOrigin: '0 0', duration: 0.85, ease: 'power3.inOut' })
        }, 1.25)
        .to('.intro-bg', { yPercent: -100, duration: 0.85, ease: 'power3.inOut' }, 1.3)
        .add(finishIntro, 1.55)
        .to({}, { duration: 0.1 })
      tl.timeScale(0.75)
      return () => unlockScroll()
    },
    { scope: root }
  )

  if (gone) return null
  return (
    <div className="intro" ref={root} aria-hidden="true">
      <div className="intro-bg" />
      <div className="intro-mark">
        <span className="intro-tile">
          <LogoMark id="vx-intro" />
        </span>
        <span className="intro-word">
          {[...studio.name].map((c, i) => (
            <span key={i}>{c === ' ' ? ' ' : c}</span>
          ))}
        </span>
      </div>
    </div>
  )
}
