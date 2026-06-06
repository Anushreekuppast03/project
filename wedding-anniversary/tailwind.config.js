/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#e7c98f',
          DEFAULT: '#c9a35e',
          dark: '#a07c3b',
        },
        blush: {
          light: '#fbe4e7',
          DEFAULT: '#f3c6cd',
          dark: '#e79aa6',
        },
        cream: '#fdf8f1',
        lavender: {
          light: '#efeafc',
          DEFAULT: '#d8cdf5',
          dark: '#b9a8ec',
        },
        ink: '#2b2430',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Poppins"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(160, 124, 59, 0.25)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
        glow: '0 0 30px rgba(231, 154, 166, 0.45)',
      },
      backgroundImage: {
        'romantic-gradient':
          'linear-gradient(135deg, #fdf8f1 0%, #fbe4e7 35%, #efeafc 70%, #fdf8f1 100%)',
        'gold-shine':
          'linear-gradient(120deg, #a07c3b 0%, #e7c98f 50%, #a07c3b 100%)',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.6)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-110vh) scale(1.2)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        floatUp: 'floatUp linear forwards',
        shimmer: 'shimmer 4s linear infinite',
        floaty: 'floaty 5s ease-in-out infinite',
        pulseSoft: 'pulseSoft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
