'use client';
import { createContext, useState } from 'react';

const DashboardContext = createContext();

function DashboardContextProvider({ children }) {
  // show / hide sidebar
  const [showSidebar, setshowSidebar] = useState(true);
  const [showDashMobilemenu, setshowDashMobilemenu] = useState(false);

  // handle open
  function handleOpen() {
    setshowSidebar(true);
  }

  // function close
  function handleClose() {
    setshowSidebar(false);
  }

  // handle mobile menu
  function handleOpenMobileDashMenu() {
    setshowDashMobilemenu(true);
  }

  // function close
  function handleCloseMobileDashMenu() {
    setshowDashMobilemenu(false);
  }

  return (
    <DashboardContext.Provider
      value={{
        handleOpen,
        handleClose,
        showSidebar,
        showDashMobilemenu,
        handleCloseMobileDashMenu,
        handleOpenMobileDashMenu,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export { DashboardContextProvider, DashboardContext };
