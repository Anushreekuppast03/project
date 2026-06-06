import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import { videos } from '../../data/siteData'

export default function VideoMemories() {
  return (
    <Section id="videos" className="bg-lavender-light/40 dark:bg-white/[0.03]">
      <SectionTitle
        eyebrow="Moving Memories"
        title="Video Memories"
        subtitle="Press play and relive the laughter, the tears, and the love."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {videos.map((video, i) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass overflow-hidden p-0"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h3 className="heading-serif flex items-center gap-2 text-lg">
                <PlayCircle size={18} className="text-gold" /> {video.title}
              </h3>
              <p className="mt-1 text-sm text-ink/70 dark:text-cream/70">
                {video.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
