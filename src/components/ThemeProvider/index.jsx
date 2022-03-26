import { createContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { theme } from "./theme";

const ThemeContext = createContext();

const ThemeProvider = ({ children, themeType }) => {
  const [currentTheme, setCurrentTheme] = useState(themeType);

  useEffect(() => {
    localStorage.setItem("theme", currentTheme);
    document.body.classList.remove("dark", "light");
    document.body.classList.add(currentTheme);
  }, [currentTheme]);

  const themeStyles = `
  .${currentTheme} {
    ${generateCustomCSSProperties(theme[currentTheme])}
  }`;

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <style id="theme-provider" type="text/css">
          {themeStyles}
        </style>
      </Helmet>
      <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
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

export { ThemeProvider, ThemeContext };
