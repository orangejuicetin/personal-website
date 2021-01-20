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
      0: "#5C78AB", // blue yonder
      1: "#0B46B5", // absolute zero
      2: "#89B3FF", // french sky blue
    },
    orange: {
      0: "#ffa500", // orange web
      1: "#ffd589", // deep champagne
    },
  },
};

type ThemeType = typeof theme;
export { ThemeType };
