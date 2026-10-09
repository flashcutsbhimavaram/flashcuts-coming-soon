import { useEffect, useState } from 'react'
import { LottieLight } from 'lottie-react'

function App() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)

    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <>
      <div className="ambient-glow" aria-hidden="true" />
      <main className="coming-soon" role="main">
        {/* Brand Logo */}
        <header className="brand">
          <img
            src="/flashcuts-logo.png"
            alt="Flashcuts"
            className="brand__logo"
          />
        </header>

        {/* Headline */}
        <div className="headline">
          <h1 className="headline__text">SITE UNDER CONSTRUCTION</h1>
        </div>

        {/* Supporting text */}
        <div className="supporting">
          <p className="supporting__text">Something cinematic is coming.</p>
        </div>

        {/* Large Centered Lottie Animation */}
        <div
          className="animation-container"
          role="img"
          aria-label="Under construction animation"
        >
          <LottieLight
            src="/animations/under-construction.json"
            loop
            autoplay={!prefersReducedMotion}
            className="lottie-player"
          />
        </div>

        {/* Divider */}
        <div className="divider" aria-hidden="true" />

        {/* Humorous Tagline - Pure White & Prominently Visible */}
        <div className="humor">
          <p className="humor__text">
            Our editors are still arguing with the timeline. The timeline is winning.
          </p>
        </div>
        {/* Social and contact links */}
        <div className="social-links">
          <a className="social-link social-link--call" href="tel:9114566777">
            <img src="/call.svg" alt="Call" className="social-icon" />
            <span>9114566777</span>
          </a>
          <a className="social-link social-link--whatsapp" href="https://wa.me/9114566999" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.svg" alt="WhatsApp" className="social-icon" />
            <span>9114566999</span>
          </a>
          <a className="social-link social-link--instagram" href="https://instagram.com/flashcuts_bhimavaram" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="social-icon" />
            <span>@flashcuts_bhimavaram</span>
          </a>
        </div>
      </main>
    </>
  )
}

export default App
