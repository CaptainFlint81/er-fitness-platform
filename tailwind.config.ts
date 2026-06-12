import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fff7ed",
          100: "#ffedd5",
          400: "#fb923c",
          500: "#ff6a00",
          600: "#ea580c"
        },
        volt: {
          300: "#b6ff4a",
          400: "#8cff00",
          500: "#67d600"
        },
        graphite: {
          800: "#191b1f",
          900: "#101215",
          950: "#070809"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(140,255,0,0.18), 0 20px 60px rgba(255,106,0,0.16)"
      },
      fontFamily: {
        display: ["Arial", "Helvetica", "sans-serif"],
        body: ["Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
