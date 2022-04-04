const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "12rem"
        }
      },
      fontFamily: {
        "sans": ["Poppins", ...defaultTheme.fontFamily.sans],
        "mono": ["Roboto Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        dim: {
          "50":   "rgba(0,0,0,0.05)",
          "100":  "rgba(0,0,0,0.10)",
          "200":  "rgba(0,0,0,0.20)",
          "300":  "rgba(0,0,0,0.30)",
          "400":  "rgba(0,0,0,0.40)",
          "500":  "rgba(0,0,0,0.50)",
          "600":  "rgba(0,0,0,0.60)",
          "700":  "rgba(0,0,0,0.70)",
          "800":  "rgba(0,0,0,0.80)",
          "900":  "rgba(0,0,0,0.90)",
        },
        lighter: {
          "50":   "rgba(255,255,255,0.05)",
          "100":  "rgba(255,255,255,0.10)",
          "200":  "rgba(255,255,255,0.20)",
          "300":  "rgba(255,255,255,0.30)",
          "400":  "rgba(255,255,255,0.40)",
          "500":  "rgba(255,255,255,0.50)",
          "600":  "rgba(255,255,255,0.60)",
          "700":  "rgba(255,255,255,0.70)",
          "800":  "rgba(255,255,255,0.80)",
          "900":  "rgba(255,255,255,0.90)",
        },
      },
      keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "200ms fadeIn ease-in-out"
      }
    },
  },
  plugins: [],
}
