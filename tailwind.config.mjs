/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        "counter-bg": "url('/images/stats-bg.jpg')",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1250px",
        "3xl": "1350px",
        "4xl": "1550px",
        "5xl": "1650px",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-3%)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'translateY(3%)', animationTimingFunction: 'ease-in-out' },
        },
        easeIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        easeOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        bounce: 'bounce 5s infinite',
        easeIn: 'easeIn 0.7s ease-in',
        easeOut: 'easeOut 0.7s ease-out',
      },
    },
  },
  plugins: [],
};
