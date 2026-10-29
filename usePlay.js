import { useEffect, useRef, useState } from 'react'
import { reduced } from './gsap.js'

// Small looping demos play while hovered on a desktop, and while on screen on a phone,
// so the page never has nine things moving at once.
export function usePlay() {
  const ref = useRef(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || reduced()) return
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const on = () => setPlay(true)
      const off = () => setPlay(false)
      el.addEventListener('pointerenter', on)
      el.addEventListener('pointerleave', off)
      return () => {
        el.removeEventListener('pointerenter', on)
        el.removeEventListener('pointerleave', off)
      }
    }
    const io = new IntersectionObserver(([e]) => setPlay(e.isIntersecting), { threshold: 0.6 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return [ref, play]
}
