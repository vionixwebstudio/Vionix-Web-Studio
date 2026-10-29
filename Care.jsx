import { useEffect, useRef, useState } from 'react'
import { Check, Megaphone } from 'lucide-react'
import { gsap, useGSAP, reduced } from './gsap.js'
import { carePoints, requests } from './data.js'
import { revealTitle } from './reveal.js'
import { Storefront } from './parts.jsx'

// Updates, any day. Tap a sample request: it sends, we reply, and the sample site changes to match.
// Tap the same request again to undo it.

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const today = () => (new Date().getDay() + 6) % 7

export function Care() {
  const root = useRef(null)
  const [pick, setPick] = useState(null)
  const [stage, setStage] = useState('idle') // idle, sent, typing, done
  const req = requests.find((r) => r.id === pick)
  const live = stage === 'done' ? pick : null

  useEffect(() => {
    if (!pick) return setStage('idle')
    if (reduced()) return setStage('done')
    setStage('sent')
    const a = setTimeout(() => setStage('typing'), 450)
    const b = setTimeout(() => setStage('done'), 1500)
    return () => {
      clearTimeout(a)
      clearTimeout(b)
    }
  }, [pick])

  useGSAP(() => {
    revealTitle('.care-title', root.current)
  }, { scope: root })
  useGSAP(
    () => {
      if (reduced() || !live) return
      gsap.fromTo('.care-site .is-fresh', { backgroundColor: 'rgba(0, 113, 227, 0.22)' }, { backgroundColor: 'rgba(0, 113, 227, 0)', duration: 1.6, ease: 'power2.out' })
      gsap.from('.care-site .is-fresh', { y: 8, autoAlpha: 0, duration: 0.5, ease: 'power3.out' })
    },
    { scope: root, dependencies: [live] }
  )

  return (
    <section className="care" id="care" ref={root}>
      <div className="wrap">
        <header className="sec-head">
          <h2 className="h2 care-title">Changes? Just ask. Any day.</h2>
          <p className="lede">We’re available 7 days a week to make any update to your website, from new hours to a whole new page. It’s all included in your monthly maintenance.</p>
        </header>

        <ol className="care-week" aria-label="Days we take updates">
          {DAYS.map((d, i) => (
            <li key={d} className={i === today() ? 'is-today' : ''}>
              <span>{d}</span>
              <Check size={16} strokeWidth={3} aria-hidden="true" />
            </li>
          ))}
        </ol>

        <div className="care-grid">
          <div className="care-chat">
            <p className="care-label">Try it. Pick an update:</p>
            <div className="care-picks" role="group" aria-label="Sample update requests">
              {requests.map((r) => (
                <button key={r.id} type="button" className={`pick${pick === r.id ? ' is-on' : ''}`} aria-pressed={pick === r.id} onClick={() => setPick((p) => (p === r.id ? null : r.id))}>
                  {r.label}
                </button>
              ))}
            </div>
            <div className="thread" aria-live="polite">
              {!req && <p className="thread-empty">Your messages to us show up here.</p>}
              {req && (
                <>
                  <p className="bubble is-you" key={`ask-${req.id}`}>
                    {req.ask}
                  </p>
                  {stage === 'typing' && (
                    <p className="bubble is-us is-typing" aria-label="We’re typing">
                      <i />
                      <i />
                      <i />
                    </p>
                  )}
                  {stage === 'done' && (
                    <p className="bubble is-us" key={`done-${req.id}`}>
                      <Check size={16} strokeWidth={3} aria-hidden="true" /> {req.done}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          <div className={`care-site${live === 'photo' ? ' is-photo' : ''}`} aria-hidden="true">
            <div className="care-art">
              <Storefront />
              {live === 'photo' && <span className="care-tag is-fresh">New photos</span>}
            </div>
            {live === 'notice' && (
              <p className="care-notice is-fresh">
                <Megaphone size={16} /> Closed Thanksgiving Day. See you Friday!
              </p>
            )}
            <div className="care-body">
              <p className="care-name">Your shop</p>
              <p className="care-pages">
                <span>Home</span>
                <span>Services</span>
                <span>Contact</span>
                {live === 'page' && <span className="is-fresh is-new-page">Team</span>}
              </p>
              <p className="care-head">Hours</p>
              <p className="care-row">
                <span>Mon–Sat</span>
                <span>9 AM–6 PM</span>
              </p>
              <p className={`care-row${live === 'hours' ? ' is-fresh' : ''}`}>
                <span>Sun</span>
                <span>{live === 'hours' ? '10 AM–4 PM' : 'Closed'}</span>
              </p>
              <p className="care-head">Services</p>
              <p className={`care-row${live === 'prices' ? ' is-fresh' : ''}`}>
                <span>Consultations</span>
                <span>{live === 'prices' ? '$45' : '$40'}</span>
              </p>
              <p className={`care-row${live === 'prices' ? ' is-fresh' : ''}`}>
                <span>Same-day service</span>
                <span>{live === 'prices' ? '$85' : '$75'}</span>
              </p>
              {live === 'service' && (
                <p className="care-row is-fresh">
                  <span>Gift cards</span>
                  <span className="care-new">New</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <ul className="care-points">
          {carePoints.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
