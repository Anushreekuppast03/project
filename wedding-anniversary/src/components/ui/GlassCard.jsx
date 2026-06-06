import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={`glass p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
