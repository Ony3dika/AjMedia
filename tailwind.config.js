/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        main:"#120821",
        alt:"#fca311",
        sub:"#222222",
        border:"#223F5D",
        black_bg:"#36303f"
      }
    },
  },
  plugins: [],
};

