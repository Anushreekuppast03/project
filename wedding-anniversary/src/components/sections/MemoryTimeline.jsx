import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Icon from '../ui/Icon'
import { loveStory } from '../../data/siteData'

export default function MemoryTimeline() {
  return (
    <Section id="timeline" className="bg-lavender-light/40 dark:bg-white/[0.03]">
      <SectionTitle
        eyebrow="Year by Year"
        title="Memory Timeline"
        subtitle="Scroll through the chapters of our journey, one milestone at a time."
      />

      <div className="flex gap-6 overflow-x-auto pb-6 [scrollbar-width:thin]">
        {loveStory.map((item, i) => {
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass flex min-w-[220px] flex-col items-center gap-3 p-6 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-shine text-white shadow-soft animate-floaty">
                <Icon name={item.icon} size={24} />
              </span>
              <span className="heading-script text-3xl text-gold-dark dark:text-gold-light">
                {item.year}
              </span>
              <h3 className="heading-serif text-lg">{item.title}</h3>
              <p className="text-xs text-ink/60 dark:text-cream/60">
                {item.description.slice(0, 70)}…
              </p>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
