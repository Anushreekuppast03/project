import { useCallback } from 'react'
import confetti from 'canvas-confetti'

const COLORS = ['#c9a35e', '#e7c98f', '#f3c6cd', '#d8cdf5', '#fdf8f1']

export function fireConfetti() {
  const end = Date.now() + 1200
  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 65,
      origin: { x: 0 },
      colors: COLORS,
      scalar: 0.9,
    })
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 65,
      origin: { x: 1 },
      colors: COLORS,
      scalar: 0.9,
    })
    if (Date.now() < end) requestAnimationFrame(frame)
  }
  frame()
  confetti({
    particleCount: 120,
    spread: 90,
    origin: { y: 0.6 },
    colors: COLORS,
  })
}

// Hook-friendly wrapper so buttons can re-trigger confetti on demand.
export default function useConfetti() {
  return useCallback(() => fireConfetti(), [])
}
