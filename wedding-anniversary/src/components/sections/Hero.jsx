import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'
import { couple } from '../../data/siteData'
import Countdown from '../ui/Countdown'
import { fireConfetti } from '../effects/Confetti'

export default function Hero() {
  const scrollToStory = () => {
    document.querySelector('#story')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 pt-24"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={couple.heroImage}
          alt="The couple"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/50 to-cream dark:from-ink/85 dark:via-ink/70 dark:to-ink" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.span
          variants={fadeUp}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/40 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gold-dark backdrop-blur dark:bg-white/10 dark:text-gold-light"
        >
          <Heart size={12} fill="currentColor" /> {couple.subtitle}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-script text-6xl leading-tight text-gold-dark dark:text-gold-light sm:text-7xl md:text-8xl"
        >
          {couple.partnerOne} &amp; {couple.partnerTwo}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="heading-serif mt-2 text-2xl text-ink/80 dark:text-cream/80 sm:text-3xl md:text-4xl"
        >
          <span className="gold-text">{couple.anniversaryLabel}</span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-base text-ink/70 dark:text-cream/70"
        >
          {couple.welcomeMessage}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <Countdown />
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={scrollToStory} className="btn-primary">
            <Heart size={16} fill="currentColor" /> Explore Our Story
          </button>
          <button onClick={() => fireConfetti()} className="btn-ghost">
            Celebrate with Us 🎊
          </button>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToStory}
        aria-label="Scroll down"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 z-10 text-gold-dark dark:text-gold-light"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}
