import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

interface Props {
  children: ReactNode
}

export const SmoothScrollProvider = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Make lenis available globally
    ;(window as any).lenis = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      ;(window as any).lenis = null
    }
  }, [])

  return <>{children}</>
} 