import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';

const Button = ({ onClick, isLoading }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="container-btn">
      <button
        className="btn-search"
        onClick={onClick}
        disabled={isLoading}
        style={{ color: theme.color, backgroundColor: theme.background }}
      >
        {isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  );
};

export { Button };
