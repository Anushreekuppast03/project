import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'
import BackToTop from './components/layout/BackToTop'
import Loader from './components/effects/Loader'
import FloatingHearts from './components/effects/FloatingHearts'
import MusicPlayer from './components/effects/MusicPlayer'
import ScrollProgress from './components/effects/ScrollProgress'
import { fireConfetti } from './components/effects/Confetti'

import Home from './pages/Home'
import GalleryPage from './pages/GalleryPage'
import StoryPage from './pages/StoryPage'
import NotFound from './pages/NotFound'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
      // Celebratory confetti once the page is revealed.
      setTimeout(fireConfetti, 400)
    }, 1800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <ScrollProgress />
      <FloatingHearts />
      <ScrollToTop />
      <Navbar />

      <main className="relative z-10">
        <AnimatedRoutes />
      </main>

      <Footer />
      <MusicPlayer />
      <BackToTop />
    </>
  )
}
