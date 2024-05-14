'use client';
import { createContext } from 'react';

const PopupModalContext = createContext();

function PopupModal({ children }) {
    
  return <PopupModalContext.Provider>{children}</PopupModalContext.Provider>;
}

export { PopupModal };
