'use client';
import { useContext } from 'react';
import { DashboardContext } from './DashboardContextProvider';

function useDashboardContext() {
  const context = useContext(DashboardContext);

  if (context === undefined) {
    console.error('context is called outside of provider');
  }
  return context;
}

export { useDashboardContext };
