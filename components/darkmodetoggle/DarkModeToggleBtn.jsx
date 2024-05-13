'use client';
import useDarkMode from '@/darkmodecontext/useDarkMode';
import { FiSun } from 'react-icons/fi';
import { IoMoonSharp } from 'react-icons/io5';
function DarkModeToggleBtn() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? <IoMoonSharp /> : <FiSun />}
    </button>
  );
}

export default DarkModeToggleBtn;
