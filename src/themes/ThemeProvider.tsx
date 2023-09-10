import React, { createContext, useState } from 'react';
import { themes } from "./ThemeData";
import { Theme } from '../modal/Theme';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  backgroundClasses: string;
  typographyClasses: string;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.default,
  setTheme: () => { },
  backgroundClasses: '',
  typographyClasses: '',
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

  const backgroundClasses = getBackgroundClasses(currentTheme);
  const typographyClasses = getTypographyClasses(currentTheme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChange, backgroundClasses, typographyClasses }}>
      <div className={`${backgroundClasses} ${typographyClasses}`}>
        {children}
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
  return `${secondary || primary}`;
};

export default ThemeProvider;
