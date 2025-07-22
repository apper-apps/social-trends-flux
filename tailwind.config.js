/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
colors: {
        'dark-bg': '#0A0A0B',
        'dark-card': '#1A1A1D',
        'dark-input': '#1F1F1F',
        'neon-cyan': '#00F5FF',
        'neon-lime': '#39FF14',
        'neon-blue': '#1E90FF',
        'text-primary': '#FFFFFF',
        'text-secondary': '#E0E0E0',
        'text-muted': '#B0B0B0',
      },
      fontFamily: {
        'display': ['Plus Jakarta Sans', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { 
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(57, 255, 20, 0.5)'
          },
          '100%': { 
            transform: 'scale(1.05)',
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.8)'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glow': {
          '0%': { textShadow: '0 0 10px rgba(0, 245, 255, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(0, 245, 255, 0.8)' }
        }
      }
    },
  },
  plugins: [],
}