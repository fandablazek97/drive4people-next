/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "374px",
      },
      colors: {
        gray: colors.slate,
        primary: {
          DEFAULT: colors.indigo[500],
          ...colors.indigo,
        },
      },
      opacity: {
        15: "0.15",
        35: "0.35",
        45: "0.45",
        55: "0.55",
        65: "0.65",
        85: "0.85",
      },
      zIndex: {
        dropbown: "100",
        "sticky-below": "225",
        sticky: "250",
        "sticky-above": "275",
        "fixed-below": "325",
        fixed: "350",
        "fixed-above": "375",
        "offcanvas-below": "425",
        offcanvas: "450",
        "offcanvas-above": "475",
        "popover-below": "525",
        popover: "550",
        "popover-above": "575",
        "modal-below": "625",
        modal: "650",
        "modal-above": "675",
        tooltip: "700",
      },
      transitionTimingFunction: {
        "in-circ": "cubic-bezier(0.55, 0, 1, 0.45)",
        "out-circ": "cubic-bezier(0, 0.55, 0.45, 1)",
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "in-back": "cubic-bezier(0.36, 0, 0.66, -0.56)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-back": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes -> https://github.com/tailwindlabs/tailwindcss-forms
    }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@tailwindcss/typography"),
  ],
};
