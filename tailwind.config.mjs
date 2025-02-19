const isProduction = process.env.NODE_ENV === 'production';
const basePath = isProduction ? '/test-cliff-stuff' : '';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
        body: ["Lora", "serif"],
      },
      backgroundImage: {
        "hero-bg": `url('${basePath}/background.jpg')`,
        "bg": `url('${basePath}/coner.png')`,
        "background-bg": `url('${basePath}/background-bg.webp')`,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
