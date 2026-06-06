import { motion } from 'framer-motion'
import useCountdown from '../../hooks/useCountdown'
import { couple } from '../../data/siteData'

function Unit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-semibold text-gold-dark dark:text-gold-light sm:h-20 sm:w-20 sm:text-3xl">
        <motion.span
          key={value}
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(value).padStart(2, '0')}
        </motion.span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-ink/60 dark:text-cream/60">
        {label}
      </span>
    </div>
  )
}

export default function Countdown({ target = couple.anniversaryDate }) {
  const { days, hours, minutes, seconds, isComplete } = useCountdown(target)

  if (isComplete) {
    return (
      <p className="heading-script text-3xl text-gold-dark dark:text-gold-light">
        The day is here — Happy Anniversary! 🎉
      </p>
    )
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5">
      <Unit value={days} label="Days" />
      <Unit value={hours} label="Hours" />
      <Unit value={minutes} label="Minutes" />
      <Unit value={seconds} label="Seconds" />
    </div>
  )
}
