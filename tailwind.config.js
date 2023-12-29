/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    opacity: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
    },
    cursor: {
      grab: "grab",
      pointer: "pointer",
    },
    extend: {},
  },
  plugins: [],
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
};
