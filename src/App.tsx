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
            width="240"
            height="100"
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
      </main>
    </>
  )
}

export default App
