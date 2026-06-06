import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Send } from 'lucide-react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { initialWishes } from '../../data/siteData'

export default function Wishes() {
  const [wishes, setWishes] = useState(initialWishes)
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim() || !message.trim()) return
    const newWish = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      avatar: `https://i.pravatar.cc/120?u=${encodeURIComponent(name.trim())}`,
    }
    setWishes((prev) => [newWish, ...prev])
    setName('')
    setMessage('')
  }

  return (
    <Section id="wishes">
      <SectionTitle
        eyebrow="From the Heart"
        title="Family & Friends Wishes"
        subtitle="Warm words from the people who have been part of our journey."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Add wish form */}
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass h-fit p-6"
        >
          <h3 className="heading-serif mb-4 text-xl">Leave a Wish</h3>
          <label className="mb-2 block text-sm font-medium">Your Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Aunt Rita"
            className="mb-4 w-full rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 dark:bg-white/10"
          />
          <label className="mb-2 block text-sm font-medium">Your Wish</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="Share your blessings…"
            className="mb-4 w-full resize-none rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 dark:bg-white/10"
          />
          <button type="submit" className="btn-primary w-full">
            <Send size={16} /> Send Wish
          </button>
        </motion.form>

        {/* Wishes grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <AnimatePresence>
            {wishes.map((wish) => (
              <motion.div
                layout
                key={wish.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="glass flex h-fit flex-col gap-3 p-5"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={wish.avatar}
                    alt={wish.name}
                    className="h-11 w-11 rounded-full border-2 border-gold/50 object-cover"
                  />
                  <span className="font-medium text-gold-dark dark:text-gold-light">
                    {wish.name}
                  </span>
                </div>
                <p className="text-sm italic text-ink/75 dark:text-cream/75">
                  “{wish.message}”
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  )
}
