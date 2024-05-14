'use client';
import { createContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setDarkMode] = useState(function () {
    try {
      const status = localStorage.getItem('DarkMode');
      return status
        ? JSON.parse(status)
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (error) {
      return false;
    }
  });

  // set that value in localstorage
  useEffect(() => {
    localStorage.setItem('DarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // change darkMode & lightMode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  //   function for toggle
  function toggleDarkMode() {
    setDarkMode((isDarkMode) => !isDarkMode);
  }

  // console.log(isDarkMode);
  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export { DarkModeProvider, DarkModeContext };
