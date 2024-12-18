import { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const lightTheme = {
  color: "#000000",
  backgroundColor: "#eeeeee",
};
export const darkTheme = {
  color: "#ffffff",
  backgroundColor: "#222222",
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const setLightTheme = () => setTheme(lightTheme);
  const setDarkTheme = () => setTheme(darkTheme);

  return (
    <StyledThemeProvider
      theme={{
        ...theme,
        setLightTheme,
        setDarkTheme,
      }}
    >
      {children}
    </StyledThemeProvider>
  );
};
