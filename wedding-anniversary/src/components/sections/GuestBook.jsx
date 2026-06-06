import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Heart, PenLine } from 'lucide-react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { initialGuestBook } from '../../data/siteData'

export default function GuestBook() {
  const [entries, setEntries] = useState(initialGuestBook)
  const [liked, setLiked] = useState({})
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const addEntry = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    setEntries((prev) => [
      { id: Date.now(), name: name.trim(), message: message.trim(), hearts: 0 },
      ...prev,
    ])
    setName('')
    setMessage('')
  }

  const toggleHeart = (id) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id
          ? { ...entry, hearts: entry.hearts + (liked[id] ? -1 : 1) }
          : entry,
      ),
    )
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <Section id="guestbook">
      <SectionTitle
        eyebrow="Sign Our Book"
        title="Digital Guest Book"
        subtitle="Leave a message for us to treasure forever, and show some love to others."
      />

      <form
        onSubmit={addEntry}
        className="glass mx-auto mb-10 flex max-w-2xl flex-col gap-4 p-6"
      >
        <div className="flex items-center gap-2 text-gold-dark dark:text-gold-light">
          <PenLine size={18} />
          <h3 className="heading-serif text-lg">Write in our guest book</h3>
        </div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold dark:bg-white/10"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          placeholder="Your message…"
          className="resize-none rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold dark:bg-white/10"
        />
        <button type="submit" className="btn-primary w-fit self-end">
          Add Message
        </button>
      </form>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {entries.map((entry) => (
            <motion.div
              layout
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass flex flex-col gap-3 p-5"
            >
              <p className="text-sm italic text-ink/75 dark:text-cream/75">
                “{entry.message}”
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="font-medium text-gold-dark dark:text-gold-light">
                  — {entry.name}
                </span>
                <button
                  onClick={() => toggleHeart(entry.id)}
                  className="flex items-center gap-1 text-sm text-blush-dark transition-transform active:scale-90"
                  aria-label="React with a heart"
                >
                  <motion.span
                    key={entry.hearts}
                    initial={{ scale: 0.6 }}
                    animate={{ scale: 1 }}
                  >
                    <Heart
                      size={18}
                      fill={liked[entry.id] ? 'currentColor' : 'none'}
                    />
                  </motion.span>
                  {entry.hearts}
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  )
}
