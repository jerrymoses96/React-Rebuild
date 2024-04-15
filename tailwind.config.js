module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxl: { max: "1439px" }, // Targets screens up to 1439px (exclusive)
      xl: { max: "1279px" }, // Targets screens up to 1279px (exclusive)
      lg: { max: "1079px" }, // Targets screens up to 1079px (exclusive)
      md: { max: "979px" }, // Targets screens up to 979px (exclusive)
      sm: { max: "767px" }, // Targets screens up to 767px (exclusive)
      tablet: { max: "639px" }, // Ensures media query applies up to 639px
      mobileL: { max: "539px" }, // Ensures media query applies up to 539px
      mobileM: { max: "479px" }, // Ensures media query applies up to 479px
      mobileS: { max: "359px" }, // Ensures media query applies up to 359px
      xs: "320px", // Regular min-width for xs breakpoint (included for completeness)
    },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_99: "#ffffff99" },
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          600: "#6b7280",
          900: "#111827",
          "900_02": "#212529",
          "900_90": "#11182790",
        },
        deep_purple: { 600: "#634c9f" },
        blue_gray: {
          100: "#d1d5db",
          300: "#9ca3af",
          700: "#4b5563",
          800: "#39245f",
        },
        black: {
          900: "#030712",
          "900_99": "#03071299",
          "900_87": "#03071287",
          "900_01": "#020617",
        },
        red: { 50: "#fef2f2", 700: "#dc2626", 900: "#7c2d12" },
        orange: { 50: "#ffedd5", 900: "#ea580c", "900_66": "#ea580c66" },
        yellow: { 50: "#fff7ed" },
        green: { 700: "#16a34a", 900: "#166534" },
        cyan: { 700: "#0891b2" },
        amber_500: "#facc15",
      },
      boxShadow: { xs: "0px 1px  2px 0px #0000000b" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #16a34a7f,#22c55e00)",
        gradient1: "linear-gradient(90deg, #a5efff,#e7f8fd)",
        gradient2: "linear-gradient(90deg, #d4fc79,#96e6a1)",
        gradient3: "linear-gradient(to right #ea580c66,#ea580c00)",
        gradient4: "linear-gradient(90deg, #ffd200,#dc2626)",
        gradient5: "linear-gradient(90deg, #dc2626,#ea580c)",
      },
      fontFamily: { barlow: "Barlow", inter: "Inter" },
      opacity: { 0.7: 0.7, 0.6: 0.6, 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
