/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(0deg, #C599E5 0%, #E2CCF2 100%, #C599E5 0%)",
      },

      colors: {
        customWhite: "#FFFFFF",
        customGrey: "#767F8C",
        customPurpleLight: "#AE71DB",
        customPurpleDark: "#6300B3",
        customPinkLight: "#B781DF",
      },
    },
  },
  plugins: [],
};
