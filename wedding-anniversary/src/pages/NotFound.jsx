import { Link } from 'react-router-dom'
import { HeartCrack } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-5 text-center">
      <HeartCrack size={56} className="text-blush-dark" />
      <h1 className="heading-serif text-5xl text-gold-dark dark:text-gold-light">
        404
      </h1>
      <p className="max-w-md text-ink/70 dark:text-cream/70">
        This page wandered off our love story. Let's get you back home.
      </p>
      <Link to="/" className="btn-primary">
        Back Home
      </Link>
    </div>
  )
}
