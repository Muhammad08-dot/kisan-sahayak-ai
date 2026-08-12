import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        agri: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          800: '#166534',
          900: '#14532d',
        }
      },
    },
  },
  plugins: [],
};
export default config;
