/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 5.577px 11.154px 0px #ebebeb",
        nav: "0px 4px 8px 0px rgba(0,0,0,0.07)",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
