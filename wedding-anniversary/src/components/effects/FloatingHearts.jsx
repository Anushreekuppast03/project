import { Heart } from 'lucide-react'

// Generated once at module load so render stays pure (no Math.random in render).
const HEARTS = Array.from({ length: 16 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  size: 12 + Math.random() * 22,
  duration: 9 + Math.random() * 12,
  delay: Math.random() * 12,
  opacity: 0.25 + Math.random() * 0.4,
}))

// Ambient hearts drifting upward across the whole page.
export default function FloatingHearts({ count = HEARTS.length }) {
  const hearts = HEARTS.slice(0, count)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {hearts.map((h) => (
        <span
          key={h.id}
          className="absolute bottom-[-40px] animate-floatUp text-blush-dark"
          style={{
            left: `${h.left}%`,
            opacity: h.opacity,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          <Heart size={h.size} fill="currentColor" strokeWidth={0} />
        </span>
      ))}
    </div>
  )
}
