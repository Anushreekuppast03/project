import { motion } from 'framer-motion'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Icon from '../ui/Icon'
import { loveStory } from '../../data/siteData'

export default function LoveStory() {
  return (
    <Section id="story">
      <SectionTitle
        eyebrow="Our Journey"
        title="Our Love Story"
        subtitle="Every great love story has its milestones. Here are the moments that shaped ours."
      />

      <div className="relative">
        {/* center line */}
        <span className="absolute left-4 top-0 h-full w-[2px] bg-gold/30 md:left-1/2 md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {loveStory.map((item, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col gap-4 pl-12 md:w-1/2 md:pl-0 ${
                  isLeft
                    ? 'md:self-start md:pr-12 md:text-right'
                    : 'md:self-end md:pl-12'
                }`}
              >
                {/* node */}
                <span
                  className={`absolute left-[6px] top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-white shadow-soft md:left-auto ${
                    isLeft ? 'md:-right-[14px]' : 'md:-left-[14px]'
                  }`}
                >
                  <Icon name={item.icon} size={14} />
                </span>

                <div className="glass overflow-hidden p-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-5">
                    <span className="heading-script text-2xl">{item.year}</span>
                    <h3 className="heading-serif text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 dark:text-cream/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
