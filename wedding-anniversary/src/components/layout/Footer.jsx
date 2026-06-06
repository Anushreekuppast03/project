import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import Icon from '../ui/Icon'
import { contact, couple, socials } from '../../data/siteData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-gold/20 bg-white/40 px-5 py-14 backdrop-blur-md dark:bg-white/5">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-script text-3xl text-gold-dark dark:text-gold-light">
            {couple.partnerOne} &amp; {couple.partnerTwo}
          </h3>
          <p className="mt-3 max-w-xs text-sm text-ink/70 dark:text-cream/70">
            {couple.welcomeMessage}
          </p>
          <p className="mt-4 text-sm font-medium text-gold-dark dark:text-gold-light">
            {couple.hashtag}
          </p>
        </div>

        <div>
          <h4 className="heading-serif mb-4 text-lg">Get in Touch</h4>
          <p className="text-sm text-ink/70 dark:text-cream/70">{contact.email}</p>
          <p className="mt-1 text-sm text-ink/70 dark:text-cream/70">
            {contact.phone}
          </p>
        </div>

        <div>
          <h4 className="heading-serif mb-4 text-lg">Follow the Celebration</h4>
          <div className="flex gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-colors hover:bg-gold hover:text-white dark:text-gold-light"
              >
                <Icon name={s.icon} size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-gold/15 pt-6 text-center text-xs text-ink/60 dark:text-cream/60 sm:flex-row">
        <p className="flex items-center gap-1">
          Made with <Heart size={12} fill="currentColor" className="text-blush-dark" /> for
          {' '}{couple.partnerOne} &amp; {couple.partnerTwo}
        </p>
        <p>© {year} · All rights reserved.</p>
      </div>
    </footer>
  )
}
