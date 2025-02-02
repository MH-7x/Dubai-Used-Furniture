import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0rem",
        screens: {
          "2xl": "1400px",
          xl: "1200px",
          lg: "992px",
          md: "768px",
          sm: "576px",
          xs: "480px",
        },
      },
      colors: {
        primary: "#0E4D2F",
        secondary: "#FD990E",
        accent: "#F2F2F2",
        text: "#3B3838",
      },
    },
  },
  plugins: [],
} satisfies Config;
