export const theme = {
  typography: {
    header: {
      fontSize: "3vw",
      fontFamily: "Comfortaa",
    },
    subtitle: {
      fontSize: "2.5vw",
      fontFamily: "Quicksand",
    },
    large: {
      fontSize: "2vw",
      fontFamily: "Quicksand",
    },
    regular: {
      fontSize: "1.5vw",
      fontFamily: "Quicksand",
    },
    small: {
      fontSize: "1.25vw",
      fontFamily: "Quicksand",
    },
    caption: {
      fontSize: "1.2vw",
      fontFamily: "Quicksand",
      marginTop: "2vw",
    },
  },

  colors: {
    black: "#000000",
    gray: {
      0: "#4d4d4d",
      1: "#aab1c2",
    },
    white: "#FFFFFF",
    blue: {
      0: "#1B595D",
      1: "#468DA0",
      2: "#93C1CC",
    },
    orange: {
      0: "#ffa500",
      1: "#ffd589",
    },
  },
};

type ThemeType = typeof theme;
export { ThemeType };
