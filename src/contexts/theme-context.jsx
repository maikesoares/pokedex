import { createContext, useState } from 'react';

export const themes = {
  light: {
    color: '#000000',
    background: '#DCDCDC',
  },
  dark: {
    color: '#ffffff',
    background: '	#1C1C1C',
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
