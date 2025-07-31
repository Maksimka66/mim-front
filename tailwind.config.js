/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#eedec5",
        "background-dark": "#813344",
        foreground: "#d38e57",
        "foreground-dark": "#65705c",
      },
    },
  },
  plugins: [],
};
