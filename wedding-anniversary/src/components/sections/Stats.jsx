import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Icon from '../ui/Icon'
import useCountUp from '../../hooks/useCountUp'
import { stats } from '../../data/siteData'

function StatCard({ stat, delay }) {
  const { ref, value } = useCountUp(stat.value)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass flex flex-col items-center gap-2 p-8 text-center"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-dark dark:text-gold-light">
        <Icon name={stat.icon} size={26} />
      </span>
      <span className="heading-serif text-4xl text-gold-dark dark:text-gold-light sm:text-5xl">
        {value.toLocaleString()}
        {stat.suffix}
      </span>
      <span className="text-sm uppercase tracking-widest text-ink/60 dark:text-cream/60">
        {stat.label}
      </span>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <Section id="stats">
      <SectionTitle
        eyebrow="By the Numbers"
        title="Our Love in Numbers"
        subtitle="A quarter century, measured in moments that matter."
      />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  )
}
