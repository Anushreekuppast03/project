import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { musicTrack } from '../../data/siteData'

export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = 0.4
    audio.loop = true
  }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        await audio.play()
        setPlaying(true)
      }
    } catch {
      // Autoplay restrictions — user can retry with the button.
      setPlaying(false)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !muted
    setMuted(!muted)
  }

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2">
      <audio ref={audioRef} src={musicTrack.src} preload="none" />
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        aria-label={playing ? 'Pause music' : 'Play music'}
        className="glass flex h-12 w-12 items-center justify-center rounded-full text-gold-dark dark:text-gold-light"
      >
        <motion.span
          animate={playing ? { rotate: 360 } : { rotate: 0 }}
          transition={
            playing
              ? { repeat: Infinity, duration: 6, ease: 'linear' }
              : { duration: 0.3 }
          }
          className="absolute"
        >
          <Music size={16} className="opacity-40" />
        </motion.span>
        {playing ? <Pause size={20} /> : <Play size={20} />}
      </motion.button>
      {playing && (
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMute}
          aria-label={muted ? 'Unmute' : 'Mute'}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-gold-dark dark:text-gold-light"
        >
          {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        </motion.button>
      )}
    </div>
  )
}
