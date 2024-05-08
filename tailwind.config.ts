import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-color": "#272fa5",
        "secondary-color": "#003B71",
        "green-au": "#027A53",
      },
      listStyleImage: {
        checkmark: 'url("/img/checkmark.png")',
      },
    },
  },
  plugins: [],
};
export default config;
