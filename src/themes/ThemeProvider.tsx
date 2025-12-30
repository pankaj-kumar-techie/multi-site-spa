import React, { createContext, useState, useEffect } from 'react';
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

  // Inject CSS Variables for global theme access
  useEffect(() => {
    const root = document.documentElement;
    const { colors } = currentTheme;

    // Helper to resolve Tailwind-like color names if necessary
    // For now, we assume colors are valid CSS values or mapped in tailwind config
    root.style.setProperty('--color-primary', colors.primary || 'black');
    root.style.setProperty('--color-secondary', colors.secondary || 'white');
    root.style.setProperty('--color-accent', colors.accent || colors.primary || 'black');

    // Also inject specific RGB values if we need opacity support (e.g. glassmorphism)
    // This is a more advanced pattern for flexibility
  }, [currentTheme]);

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  const backgroundClasses = getBackgroundClasses(currentTheme);
  const typographyClasses = getTypographyClasses(currentTheme);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChange, backgroundClasses, typographyClasses }}>
      <div className={`${typographyClasses} min-h-screen transition-colors duration-500`}>
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
