'use client';

import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';

function DashboardWrapper({ children }) {
  const { showSidebar } = useDashboardContext();
  return (
    <div
      className={`grid grid-cols-1 ${
        showSidebar ? 'md:grid-cols-15/1fr' : 'grid-cols-1'
      }  grid-rows-auto/1fr h-auto md:h-screen`}
    >
      {children}
    </div>
  );
}

export { DashboardWrapper };
