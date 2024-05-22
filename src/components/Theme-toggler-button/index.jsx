import React, { useContext } from 'react';
import { Button } from 'style-components';
import { ThemeContext, themes } from '../../contexts/theme-context';

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="btn-theme">
      <Button
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        ☀
      </Button>
    </div>
  );
};
