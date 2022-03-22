import { createContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { theme } from "./theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const currentTheme = "dark";

  useEffect(() => {
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        />
        <style>{themeStyles}</style>
      </Helmet>
      <ThemeContext.Provider value={currentTheme}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

const generateCustomCSSProperties = (theme) => {
  return Object.keys(theme)
    .filter((key) => key !== "themeType")
    .map((key) => `--${key}: ${theme[key]};`)
    .join("\n");
};

const themeStyles = `
  .dark {
  ${generateCustomCSSProperties(theme.dark)}
}
  .light {
  ${generateCustomCSSProperties(theme.light)}
}`;

export { ThemeProvider, ThemeContext };
