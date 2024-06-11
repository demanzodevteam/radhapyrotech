'use client';
import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';
import Logo from './Logo';
import NavMenus from './NavMenus';

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
    </aside>
  );
}

export { Sidebar };
