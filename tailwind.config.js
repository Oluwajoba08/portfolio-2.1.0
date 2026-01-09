/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        "lime-accent": "#A7FF00",
        "dark-bg": "#1A1A1A",
        "dark-gray": "#2A2A2A",
        "light-gray": "#E0E0E0",
      },
      fontFamily: {
        sans: ['Poppins', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        "glow": "0 0 20px rgba(180, 255, 129, 0.3)",
        "glow-lg": "0 0 40px rgba(180, 255, 129, 0.4)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
}

