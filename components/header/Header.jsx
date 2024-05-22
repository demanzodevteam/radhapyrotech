'use client';

import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';
import DarkModeToggleBtn from '../darkmodetoggle/DarkModeToggleBtn';
import { GoBellFill } from 'react-icons/go';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import { FaXmark } from 'react-icons/fa6';
import { DashboardMobileMenu } from '../sidebar/DashboardMobileMenu';
function Header() {
  const {
    showSidebar,
    handleOpen,
    handleClose,
    showDashMobilemenu,
    handleCloseMobileDashMenu,
    handleOpenMobileDashMenu,
  } = useDashboardContext();
  // console.log(context);
  return (
    <>
      <header className=' bg-white dark:bg-gray-900 dark:text-white py-6 px-4 md:px-12 border-b border-solid border-gray-200 dark:border-gray-900 '>
        <div className='container mx-auto flex justify-between items-center gap-2 md:space-x-6'>
          {/* dash normal menu */}
          <div className='hidden md:block'>
            {showSidebar ? (
              <IoMenu
                onClick={handleClose}
                className='text-3xl hover:text-primary cursor-pointer'
              />
            ) : (
              <IoMenu
                onClick={handleOpen}
                className='text-3xl hover:text-primary cursor-pointer'
              />
            )}
          </div>
          {/* mobile dash menu */}
          <div className='block md:hidden'>
            {showDashMobilemenu ? (
              <IoMenu
                onClick={handleCloseMobileDashMenu}
                className='text-3xl hover:text-primary cursor-pointer'
              />
            ) : (
              <IoMenu
                onClick={handleOpenMobileDashMenu}
                className='text-3xl hover:text-primary cursor-pointer'
              />
            )}
          </div>
          <div>
            <ul className='flex items-end gap-6 text-2xl'>
              <li>
                <HiOutlineUserCircle />
              </li>
              <li>
                <HiOutlineArrowRightStartOnRectangle />
              </li>
              <li>
                <GoBellFill />
              </li>
              <li className='flex flex-col items-end'>
                <DarkModeToggleBtn />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <>{showDashMobilemenu && <DashboardMobileMenu />}</>
    </>
  );
}

export { Header };
