import React from 'react'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

  export const themeContext = React.createContext(themes.light)
  const ThemeProvider = themeContext.Provider
  const ThemeConsumer = themeContext.Consumer

  export { ThemeProvider, ThemeConsumer }
