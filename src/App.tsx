import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

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
        {/* Brand */}
        <header className="brand">
          <span className="brand__name">Flashcuts</span>
        </header>

        {/* Headline */}
        <div className="headline">
          <h1 className="headline__text">
            We're <span className="headline__accent">almost</span> ready.
          </h1>
        </div>

        {/* Supporting text */}
        <div className="supporting">
          <p className="supporting__text">Something cinematic is coming.</p>
        </div>

        {/* Lottie Animation */}
        <div
          className="animation-container"
          role="img"
          aria-label="Under construction animation"
        >
          <DotLottieReact
            src="/animations/under-construction.lottie"
            loop
            autoplay={!prefersReducedMotion}
            className="lottie-player"
          />
        </div>

        {/* Divider */}
        <div className="divider" aria-hidden="true" />

        {/* Humor */}
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
