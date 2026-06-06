import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null && index >= 0

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate(1)
      if (e.key === 'ArrowLeft') onNavigate(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, onNavigate])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 p-4 backdrop-blur"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 text-cream/80 hover:text-white"
          >
            <X size={32} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(-1)
            }}
            aria-label="Previous"
            className="absolute left-3 text-cream/70 hover:text-white sm:left-8"
          >
            <ChevronLeft size={40} />
          </button>

          <motion.figure
            key={images[index].id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
          >
            <img
              src={images[index].src}
              alt={images[index].caption}
              className="max-h-[78vh] w-full object-contain"
            />
            <figcaption className="bg-black/40 py-3 text-center text-sm text-cream">
              {images[index].caption} · {images[index].category}
            </figcaption>
          </motion.figure>

          <button
            onClick={(e) => {
              e.stopPropagation()
              onNavigate(1)
            }}
            aria-label="Next"
            className="absolute right-3 text-cream/70 hover:text-white sm:right-8"
          >
            <ChevronRight size={40} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
