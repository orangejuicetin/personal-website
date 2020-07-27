export const theme = {
  typography: {
    header: {
      fontSize: "3.75vw",
      fontFamily: "Comfortaa",
    },
    subtitle: {
      fontSize: "2.75vw",
      fontFamily: "Quicksand",
    },
    large: {
      fontSize: "2vw",
      fontFamily: "Quicksand",
    },
    regular: {
      fontSize: "1.3vw",
      fontFamily: "Quicksand",
    },
    small: {
      fontSize: "1.1vw",
      fontFamily: "Quicksand",
    },
    caption: {
      fontSize: "0.9vw",
      fontFamily: "Quicksand",
      marginTop: "1.25vw",
    },
  },

  colors: {
    black: "#000000",
    gray: {
      0: "#58627a",
      1: "#aab1c2",
    },
    white: "#FFFFFF",
    blue: {
      0: "#0c417c",
      1: "#19508e",
      2: "#6bb3f2",
    },
    orange: {
      0: "#ffa500",
    },
  },
};

type ThemeType = typeof theme;
export { ThemeType };
