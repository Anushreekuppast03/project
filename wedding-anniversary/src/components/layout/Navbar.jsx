import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, Moon, Sun, X } from 'lucide-react'
import { couple, navLinks } from '../../data/siteData'
import { useTheme } from '../../context/ThemeContext'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (link) => {
    setOpen(false)
    if (link.hash) {
      if (location.pathname !== '/') {
        navigate('/' + link.hash)
      } else {
        document
          .querySelector(link.hash)
          ?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      navigate(link.to)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled ? 'glass rounded-none py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <Link
          to="/"
          className="flex items-center gap-2 font-script text-2xl text-gold-dark dark:text-gold-light"
        >
          <Heart size={20} fill="currentColor" strokeWidth={0} />
          {couple.partnerOne} &amp; {couple.partnerTwo}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link)}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-gold/10 hover:text-gold-dark dark:text-cream/80 dark:hover:text-gold-light"
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-full p-2 text-gold-dark dark:text-gold-light"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="glass mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="rounded-xl px-4 py-3 text-left text-sm font-medium text-ink/80 transition-colors hover:bg-gold/10 dark:text-cream/80"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-gold-dark transition-colors hover:bg-gold/10 dark:text-gold-light"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
