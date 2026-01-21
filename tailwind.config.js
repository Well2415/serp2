/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: {
          DEFAULT: "#0092D1",
          hover: "#0077aa",
        },
        text: "#334155",
        "light-text": "#64748b",
        "body-bg": "#1a365d", // Changed to match primary
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        shine: 'shine 3s infinite',
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        shine: 'shine 3s infinite',
        scroll: 'scroll 40s linear infinite',
        'text-shimmer': 'text-shimmer 5s linear infinite',
      },
    },
  },
  plugins: [],
}
