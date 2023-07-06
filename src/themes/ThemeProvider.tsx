import React, { createContext, useState } from 'react';
import { Theme, classicTheme, modernTheme } from './Theme';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: {} as Theme,
  setTheme: () => {},
});

interface ThemeProviderProps {
  theme: 'classic' | 'modern';
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const themes: { [key: string]: Theme } = {
    classic: classicTheme,
    modern: modernTheme,
  };

  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleThemeChange }}>
      <div className={currentTheme.section.backgroundColor}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
