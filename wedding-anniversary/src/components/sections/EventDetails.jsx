import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin, Shirt, X } from 'lucide-react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { event } from '../../data/siteData'
import { fireConfetti } from '../effects/Confetti'

export default function EventDetails() {
  const [rsvpOpen, setRsvpOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const details = [
    { icon: CalendarDays, label: 'Date', value: event.date },
    { icon: Clock, label: 'Time', value: event.time },
    { icon: MapPin, label: 'Venue', value: `${event.venueName}, ${event.venueAddress}` },
    { icon: Shirt, label: 'Dress Code', value: event.dressCode },
  ]

  const submitRsvp = (e) => {
    e.preventDefault()
    setSubmitted(true)
    fireConfetti()
    setTimeout(() => {
      setRsvpOpen(false)
      setSubmitted(false)
    }, 2200)
  }

  return (
    <Section id="event" className="bg-blush-light/40 dark:bg-white/[0.03]">
      <SectionTitle
        eyebrow="You're Invited"
        title="Anniversary Event Details"
        subtitle="We would be honoured to have you celebrate this milestone with us."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass flex flex-col gap-5 p-8"
        >
          <h3 className="heading-serif text-2xl text-gold-dark dark:text-gold-light">
            {event.title}
          </h3>
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark dark:text-gold-light">
                <d.icon size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink/50 dark:text-cream/50">
                  {d.label}
                </p>
                <p className="text-base">{d.value}</p>
              </div>
            </div>
          ))}
          <button onClick={() => setRsvpOpen(true)} className="btn-primary mt-2 w-fit">
            RSVP Now
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass overflow-hidden p-0"
        >
          <iframe
            title="Venue location"
            src={event.mapEmbed}
            className="h-full min-h-[320px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {rsvpOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setRsvpOpen(false)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/70 p-4 backdrop-blur"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass relative w-full max-w-md p-8"
            >
              <button
                onClick={() => setRsvpOpen(false)}
                aria-label="Close"
                className="absolute right-4 top-4 text-ink/60 dark:text-cream/60"
              >
                <X size={22} />
              </button>
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="heading-script text-4xl text-gold-dark dark:text-gold-light">
                    Thank you!
                  </p>
                  <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">
                    Your RSVP has been received. See you there! 🥂
                  </p>
                </div>
              ) : (
                <form onSubmit={submitRsvp} className="flex flex-col gap-4">
                  <h3 className="heading-serif text-2xl">RSVP</h3>
                  <input
                    required
                    placeholder="Full name"
                    className="rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold dark:bg-white/10"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold dark:bg-white/10"
                  />
                  <select
                    className="rounded-xl border border-gold/30 bg-white/60 px-4 py-3 text-sm outline-none focus:border-gold dark:bg-white/10"
                    defaultValue="1"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                  <button type="submit" className="btn-primary">
                    Confirm Attendance
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
