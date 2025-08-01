/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  darkMode: "class",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FFFAEE",
        foreground: "#D7CFBC",
        "background-dark": "#1C1A3F",
        "foreground-dark": "#403E66",
      },
    },
  },
  plugins: [],
};
