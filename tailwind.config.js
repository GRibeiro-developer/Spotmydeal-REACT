/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta original SpotMyDeal (extraída de css/style.css)
        cyan: {
          DEFAULT: '#12cdde',
          dark: '#0ea8b7',
        },
        ink: {
          DEFAULT: '#e0eaf3',
          muted: '#7a94ad',
        },
        surface: {
          DEFAULT: '#080e14', // --dark
          2: '#0d1620', // --dark2
          3: '#111d2a', // --dark3
          4: '#162030', // --dark4
        },
        line: {
          DEFAULT: 'rgba(18, 205, 222, 0.12)', // --border
          strong: 'rgba(18, 205, 222, 0.3)', // --border-strong
        },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Barlow"', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px',
        lg: '20px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(18, 205, 222, 0.4)',
        'glow-lg': '0 20px 40px rgba(0,0,0,0.35), 0 0 40px rgba(18, 205, 222, 0.18)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(18, 205, 222, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(18, 205, 222, 0)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          from: { opacity: 0, transform: 'translateX(10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        pulseGlow: 'pulseGlow 2s infinite',
        floaty: 'floaty 4s ease-in-out infinite',
        slideIn: 'slideIn 0.3s ease',
        fadeUp: 'fadeUp 0.4s ease',
      },
    },
  },
  plugins: [],
};
