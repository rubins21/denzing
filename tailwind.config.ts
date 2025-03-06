import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(136, 23%, 42%)",
        "primary-content": "hsl(133, 23%, 92%)",
        "primary-dark": "hsl(135, 24%, 32%)",
        "primary-light": "hsl(136, 23%, 52%)",

        secondary: "hsl(226, 23%, 42%)",
        "secondary-content": "hsl(227, 23%, 92%)",
        "secondary-dark": "hsl(225, 24%, 32%)",
        "secondary-light": "hsl(225, 23%, 52%)",

        background: "hsl(120, 7%, 94%)",
        foreground: "hsl(0, 0%, 98%)",
        border: "hsl(132, 8%, 88%)",

        copy: "hsl(140, 8%, 15%)",
        "copy-light": "hsl(135, 8%, 40%)",
        "copy-lighter": "hsl(134, 7%, 55%)",

        success: "hsl(120, 23%, 42%)",
        warning: "hsl(60, 23%, 42%)",
        error: "hsl(0, 23%, 42%)",

        "success-content": "hsl(120, 23%, 92%)",
        "warning-content": "hsl(60, 23%, 92%)",
        "error-content": "hsl(0, 23%, 92%)"
      },
    },
  },
  plugins: [
    // @ts-ignore
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // @ts-ignore
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
