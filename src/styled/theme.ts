export const theme = {
  typography: {
    header: {
      fontSize: "3.75vw",
      fontFamily: "Comfortaa",
    },
    subtitle: {
      fontSize: "3vw",
      fontFamily: "Quicksand",
    },
    large: {
      fontSize: "2vw",
      fontFamily: "Quicksand",
    },
    regular: {
      fontSize: "1.4vw",
      fontFamily: "Quicksand",
    },
    small: {
      fontSize: "1.25vw",
      fontFamily: "Quicksand",
    },
    caption: {
      fontSize: "1.15vw",
      fontFamily: "Quicksand",
      marginTop: "2vw",
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
