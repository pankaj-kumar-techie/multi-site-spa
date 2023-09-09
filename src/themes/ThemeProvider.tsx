import React, { createContext, useState } from 'react';
import { themes } from "./ThemeData";
import { Theme } from '../modal/Theme';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.default,
  setTheme: () => { },
});

interface ThemeProviderProps {
  theme: keyof typeof themes;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChange }}>
      <div className={getBackgroundClasses(currentTheme)}>
        <div className={getTypographyClasses(currentTheme)}>{children}</div>
      </div>
    </ThemeContext.Provider>
  );
};

const getTypographyClasses = (theme: Theme) => {
  const { typography } = theme;
  const { fontFamily, fontSize } = typography;
  return `${fontFamily} ${fontSize}`;
};

const getBackgroundClasses = (theme: Theme) => {
  const { colors } = theme;
  const {
    primary,
    secondary,

  } = colors;
  return `${secondary || primary }`;
};

export default ThemeProvider;
