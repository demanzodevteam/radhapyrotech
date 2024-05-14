/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-nunitoSans)", "sans-serif"],
      },
      gridTemplateColumns: {
        "24/1fr": "16rem 1fr",
        "15/1fr": "15rem 1fr",
      },
      gridTemplateRows: {
        "auto/1fr": "auto 1fr",
      },
      colors: {
        dashboard: "#f9fafb",
      },
      height: {
        "product-modal": "calc(100vh - 10rem)",
      },
    },
  },
  plugins: [],
};
