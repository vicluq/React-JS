import React from "react";

const theme = React.createContext({
  dark: {
    backgroudColor: "#333",
    fontColor: "greenyellow",
    buttonBackground: "teal",
  },

  light: {
    backgroudColor: "#fff",
    fontColor: "#2d2d2d",
    buttonBackground: "lightgreen",
  },
});

export default theme;
