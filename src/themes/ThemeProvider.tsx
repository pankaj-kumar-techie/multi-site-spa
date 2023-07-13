import React, { createContext, useState } from 'react';
import {Theme, themes} from "./Theme";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: themes.default,
  setTheme: () => {},
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
  const { background } = theme;
  const {
    backgroundColor,
    backgroundImage,
    backgroundAttachment,
    backgroundPosition,
    backgroundRepeat,
    backgroundClip,
    backgroundSize,
  } = background;
  return `${backgroundColor || ''} ${backgroundImage || ''} ${backgroundAttachment || ''} ${backgroundPosition || ''} ${backgroundRepeat || ''} ${backgroundClip || ''} ${backgroundSize || ''}`;
};

export default ThemeProvider;
