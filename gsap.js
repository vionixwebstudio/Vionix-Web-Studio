import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import { setLenis } from './scroll.js'

gsap.registerPlugin(ScrollTrigger, SplitText, MotionPathPlugin, useGSAP)

export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Lenis drives the smooth scroll on desktop; GSAP's ticker drives Lenis, and every Lenis scroll
// tells ScrollTrigger to update, so pins and scrubs never drift from the real scroll position.
export function startSmoothScroll() {
  if (reduced() || window.matchMedia('(pointer: coarse)').matches) return () => {}
  const lenis = new Lenis({ lerp: 0.1 })
  setLenis(lenis)
  if (import.meta.env.DEV) window.__lenis = lenis
  if (import.meta.env.DEV) window.__gsap = gsap
  lenis.on('scroll', ScrollTrigger.update)
  const tick = (t) => lenis.raf(t * 1000)
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)
  return () => {
    gsap.ticker.remove(tick)
    setLenis(null)
    lenis.destroy()
  }
}

export { gsap, ScrollTrigger, SplitText, useGSAP }
