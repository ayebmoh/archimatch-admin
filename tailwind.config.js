const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      
      fontFamily: {
        Unbounded: ["Unbounded", "sans-serif"],
        "Montserrat-Alternates": ['"Montserrat Alternates"', "sans-serif"],
      },
      colors: {
        page_bg: "#fafbff",
        client: {
          primary: "#11abec",
          secondary_text_color: "#888fa7",
          dark_blue: "#1b2534",
          success: "#008f5d",
          destructive: "#ff0000",
          text_hover: "#0c1e5b",
          red_dark:"#B71D18",
        },
        architect: {
          primary: "#f65858",
          secondary_text_color: "#888fa7",
          dark_blue: "#1b2534",
          success: "#008f5d",
          destructive: "#ff0000",
          text_hover: "#0c1e5b",
        },
      },
    },
  },
  plugins: [],
});