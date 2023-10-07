/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-grey": "#F4F4F4",
        "pink-text": "#ea2678",
        "custom-grey-text": "#777777",
      },
      fontSize: {
        "header-xxl": "2.8rem",
        "header-xl": "2rem",
      },
      screens: {
        xs: "300px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
