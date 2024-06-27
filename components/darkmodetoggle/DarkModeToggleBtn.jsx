'use client';
import useDarkMode from '@/darkmodecontext/useDarkMode';
import { useEffect, useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
function DarkModeToggleBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient && (
        <button onClick={toggleDarkMode} className='inline'>
          {isDarkMode ? <FiSun /> : <IoMoonSharp />}
        </button>
      )}
    </>
  );
}

export default DarkModeToggleBtn;
