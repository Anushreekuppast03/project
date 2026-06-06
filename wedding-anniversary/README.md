# 💍 Wedding Anniversary Website

A modern, responsive, and elegant **Wedding Anniversary** website built with
**React + Vite**, **Tailwind CSS**, **React Router**, and **Framer Motion**.

Live theme: romantic & premium — gold, blush pink, cream, and light lavender,
with glassmorphism, smooth animations, and a dark/light mode toggle.

## ✨ Features

**Sections**
1. **Hero** — background image, couple's names, anniversary title, live countdown timer, CTAs
2. **Our Love Story** — animated milestone timeline (first meeting → 25 years)
3. **Photo Gallery** — masonry grid, category filters, lightbox preview, hover effects
4. **Video Memories** — embedded YouTube highlights & family wishes
5. **Family & Friends Wishes** — interactive cards + "add a wish" form (avatars)
6. **Event Details** — date/time/venue, Google Maps embed, RSVP modal
7. **Digital Guest Book** — leave messages with heart reactions
8. **Memory Timeline** — year-by-year horizontal journey with animated icons
9. **Couple Statistics** — animated count-up counters
10. **Footer** — social links, contact info, copyright

**Bonus**
- 🎵 Background music player (play / pause / mute)
- 💕 Floating hearts ambient animation
- ⏳ Anniversary countdown widget
- 👋 Personalized welcome message
- ⬇️ Downloadable photo album (generated HTML)
- 🎊 Confetti animation on page load (and on demand)
- 🌗 Dark / Light mode toggle (persisted)
- 📜 Smooth scrolling, scroll progress bar, loading animation

## 🧱 Tech Stack

- React 19 (functional components + hooks)
- Vite
- React Router
- Tailwind CSS (with `darkMode: 'class'`)
- Framer Motion
- lucide-react (icons)
- canvas-confetti

## 🚀 Getting Started

```bash
cd wedding-anniversary
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## 🗂️ Project Structure

```
src/
├── components/
│   ├── effects/     # Confetti, FloatingHearts, Loader, MusicPlayer, ScrollProgress
│   ├── layout/      # Navbar, Footer, ScrollToTop, BackToTop
│   ├── sections/    # Hero, LoveStory, Gallery, VideoMemories, Wishes,
│   │                #   EventDetails, GuestBook, MemoryTimeline, Stats
│   └── ui/          # Section, SectionTitle, GlassCard, Countdown, Lightbox, Icon
├── context/         # ThemeContext (dark/light)
├── data/            # siteData.js — all sample content & config
├── hooks/           # useCountdown, useCountUp
├── pages/           # Home, GalleryPage, StoryPage, NotFound
├── utils/           # downloadAlbum
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Personalizing

All content (names, dates, photos, videos, wishes, event details, stats, socials)
lives in [`src/data/siteData.js`](src/data/siteData.js). Edit that single file to
make the site your own. Theme colors are defined in `tailwind.config.js`.
