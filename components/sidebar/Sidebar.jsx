'use client';
import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';
import Logo from './Logo';
import NavMenus from './NavMenus';
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2';
import { signOut } from 'next-auth/react';

function Sidebar() {
  const { showSidebar } = useDashboardContext();
  return (
    <aside
      className={`${
        showSidebar ? 'md:flex' : 'hidden'
      } hidden row-span-3 flex-col py-14 px-10 gap-12 bg-white  border-r border-solid border-gray-200 dark:bg-gray-900 dark:border-gray-900`}
    >
      <Logo href='/dashboard' />
      <NavMenus />
      <button
        onClick={() => signOut()}
        className='bg-primary flex justify-center items-center gap-x-2 mt-auto hover:bg-primary text-lg  hover:bg-opacity-90 text-white font-bold py-2 px-6 rounded'
      >
        <HiOutlineArrowRightStartOnRectangle />
        Logout
      </button>
    </aside>
  );
}

export { Sidebar };
