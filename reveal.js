import { gsap, SplitText, reduced } from './gsap.js'

// Section titles rise word by word out of a mask as they scroll in.
export function revealTitle(target, trigger, start = 'top 78%') {
  const split = SplitText.create(target, { type: 'lines,words', mask: 'lines' })
  if (reduced()) return
  gsap.from(split.words, { yPercent: 110, stagger: 0.04, duration: 0.9, ease: 'power4.out', scrollTrigger: { trigger, start } })
}

// Subheads fill in word by word as you read down the page, from faint to full ink.
export function readLede(target, trigger) {
  const split = SplitText.create(target, { type: 'words' })
  if (reduced()) return
  gsap.fromTo(split.words, { opacity: 0.22 }, { opacity: 1, stagger: 0.05, ease: 'none', scrollTrigger: { trigger, start: 'top 85%', end: 'top 45%', scrub: true } })
}
