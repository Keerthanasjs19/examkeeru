// import React, { useContext } from 'react';

// import { ThemeContext } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
//     </button>
//   );
// };

// export default ThemeToggle;
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;