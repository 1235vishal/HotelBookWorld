

// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [daisyui],
//     daisyui: {
//         themes: ["light", "dark"],
//     },
// };

import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ["Inter", "ui-sans-serif", "system-ui"], 
      },
      colors: {
        brand: {
          50: "#FFF7F3",
          100: "#FFEAE1",
          200: "#FFD0BF",
          300: "#FFAD91",
          400: "#FF865F",
          500: "#FF6A3C",
          600: "#FF534E",
          700: "#E53D63",
          800: "#C72E5F",
          900: "#8F1E46",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(143,30,70,.25)",
        card: "0 20px 50px -20px rgba(143,30,70,.35)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(1200px 600px at 0% 0%, rgba(255,138,0,.20), rgba(255,255,255,0) 60%), radial-gradient(900px 500px at 100% 0%, rgba(255,61,119,.18), rgba(255,255,255,0) 60%)",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", lg: "2rem" },
      },
    },
  },
  future: { hoverOnlyWhenSupported: true },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};
