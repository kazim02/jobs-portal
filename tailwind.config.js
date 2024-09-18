/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #C599E5 0%, #E2CCF2 80%, #C599E5 100%)",
      },
    },
  },
  plugins: [],
};
