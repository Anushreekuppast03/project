import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Download, Maximize2 } from 'lucide-react'
import Section from '../ui/Section'
import SectionTitle from '../ui/SectionTitle'
import Lightbox from '../ui/Lightbox'
import { galleryCategories, galleryImages } from '../../data/siteData'
import { downloadAlbum } from '../../utils/downloadAlbum'

export default function Gallery({ showAll = false }) {
  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(null)

  const filtered = useMemo(() => {
    const base =
      filter === 'All'
        ? galleryImages
        : galleryImages.filter((g) => g.category === filter)
    return showAll ? base : base.slice(0, 8)
  }, [filter, showAll])

  const navigate = (dir) => {
    setActiveIndex((i) => {
      if (i === null) return i
      const next = (i + dir + filtered.length) % filtered.length
      return next
    })
  }

  return (
    <Section id="gallery">
      <SectionTitle
        eyebrow="Captured Moments"
        title="Photo Gallery"
        subtitle="A collection of our favourite memories through the years."
      />

      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {galleryCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-gold text-white shadow-soft'
                : 'border border-gold/30 text-gold-dark hover:bg-gold/10 dark:text-gold-light'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-2 gap-4 sm:columns-3 lg:columns-4">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.figure
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActiveIndex(i)}
              className="group relative mb-4 block w-full cursor-pointer overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="text-cream" size={26} />
                <span className="mt-2 px-2 text-center text-sm text-cream">
                  {img.caption}
                </span>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <button onClick={() => downloadAlbum(galleryImages)} className="btn-ghost">
          <Download size={16} /> Download Photo Album
        </button>
      </div>

      <Lightbox
        images={filtered}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={navigate}
      />
    </Section>
  )
}
