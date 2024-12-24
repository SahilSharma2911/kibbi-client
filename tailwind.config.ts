import type { Config } from "tailwindcss";

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
        red:"#D9292F",
        yellow:"#F9D627",
        slate:"#454A5F",
        sky:"#0483F8"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        caveat: ["Caveat", "cursive"],
        architects:["Architects Daughter", "serif"]
      },
    },
  },
  plugins: [],
} satisfies Config;
