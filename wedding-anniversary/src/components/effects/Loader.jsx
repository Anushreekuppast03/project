import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { couple } from '../../data/siteData'

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-romantic-gradient"
    >
      <motion.div
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
        className="text-blush-dark"
      >
        <Heart size={64} fill="currentColor" strokeWidth={0} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-6 font-script text-4xl text-gold-dark"
      >
        {couple.partnerOne} &amp; {couple.partnerTwo}
      </motion.p>
      <p className="mt-2 text-sm uppercase tracking-[0.3em] text-ink/50">
        Loading our story…
      </p>
    </motion.div>
  )
}
