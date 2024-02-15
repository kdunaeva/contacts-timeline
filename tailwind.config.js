/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        slategray: "#757d8a",
        black: "#000",
        "beige-500-pr": "#c6a056",
        "base-beige": "#e8ddc3",
        "grey-100": "#e2e2e2",
        darkgray: "#b2b2b2",
        "grey-900": "#231f20",
        darkkhaki: "#c59e55",
        "beige-25-pr": "#fdfaf2",
        dimgray: "#707073",
        "grey-700": "#49494a",
        "gray-900": "#101828",
        "grey-25": "#f5f5f5",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "new-hero": "'New Hero'",
        "recoleta-text-md": "Recoleta",
        "gotham-bold": "'Gotham Bold'",
      },
      borderRadius: {
        "56xl": "75px",
        "8xs": "5px",
        "6xs": "7px",
      },
    },
    fontSize: {
      sm: "0.88rem",
      base: "1rem",
      "xl-2": "1.26rem",
      "13xl": "2rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      md: {
        max: "960px",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
