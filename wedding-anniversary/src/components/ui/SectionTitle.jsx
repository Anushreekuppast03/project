import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="heading-script text-3xl sm:text-4xl">{eyebrow}</span>
      )}
      <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl">
        <span className="gold-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-ink/70 dark:text-cream/70">
          {subtitle}
        </p>
      )}
      <span className="mt-2 inline-block h-[2px] w-24 rounded-full bg-gold-shine" />
    </motion.div>
  )
}
