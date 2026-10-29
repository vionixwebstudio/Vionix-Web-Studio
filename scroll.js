// One place to scroll the page from, so jumps use Lenis on desktop
// and the browser's own smooth scroll everywhere else.
let lenis = null
let jumpingUntil = 0

export function setLenis(instance) {
  lenis = instance
  if (locked) lenis?.stop()
}

export function scrollToY(y, duration = 1.4) {
  // A menu jump passes straight through the How it works section without stopping there.
  jumpingUntil = performance.now() + duration * 1000 + 200
  if (lenis) lenis.scrollTo(y, { duration })
  else window.scrollTo({ top: y, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
}

export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  scrollToY(el.getBoundingClientRect().top + window.scrollY)
}

export const isJumping = () => performance.now() < jumpingUntil

// Hold the page still (wheel, touch and keys) while something plays, then hand scrolling back.
let locked = false
const KEYS = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End'])
const stop = (e) => locked && e.cancelable && e.preventDefault()
const stopKey = (e) => locked && KEYS.has(e.key) && e.preventDefault()

export function lockScroll(y) {
  if (locked) return
  locked = true
  if (y != null) {
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true })
    else window.scrollTo(0, y)
  }
  lenis?.stop()
  window.addEventListener('wheel', stop, { passive: false })
  window.addEventListener('touchmove', stop, { passive: false })
  window.addEventListener('keydown', stopKey)
}

export function unlockScroll() {
  if (!locked) return
  locked = false
  lenis?.start()
  window.removeEventListener('wheel', stop)
  window.removeEventListener('touchmove', stop)
  window.removeEventListener('keydown', stopKey)
}

// "Get in touch" goes straight to the email, call and text card, centered on screen, not the section's headline.
export function scrollToContact() {
  const card = document.querySelector('.contact-card')
  if (!card) return scrollToId('contact')
  const r = card.getBoundingClientRect()
  const top = Math.max(88, (window.innerHeight - r.height) / 2)
  scrollToY(r.top + window.scrollY - top, 1.6)
}

// Settle the page onto a section: it glides into place and holds for just that glide (under a second),
// then scrolling is free again.
export function scrollToSection(el) {
  const y = el.getBoundingClientRect().top + window.scrollY
  if (lenis) return lenis.scrollTo(y, { duration: 0.9, lock: true, force: true })
  lockScroll()
  window.scrollTo({ top: y, behavior: 'smooth' })
  setTimeout(unlockScroll, 900)
}
