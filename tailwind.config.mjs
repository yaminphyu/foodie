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
      },
      animation: {
        bounce: 'bounce 5s infinite',
      },
    },
  },
  plugins: [],
};
