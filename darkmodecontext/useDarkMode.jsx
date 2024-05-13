'use client';
import { useContext } from 'react';
import { DarkModeContext } from './DarkModeProvider';

function useDarkMode() {
  const context = useContext(DarkModeContext);

  // check if context is called correct place
  if (context === undefined) {
    console.error('context is called outside of provider');
  }

  // else return the values
  return context;
}

export default useDarkMode;
