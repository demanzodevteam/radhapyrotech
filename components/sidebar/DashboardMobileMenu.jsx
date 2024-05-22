'use client';
import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';
import Logo from './Logo';
import NavMenus from './NavMenus';

function DashboardMobileMenu() {
  const { showDashMobilemenu } = useDashboardContext();
  return (
    <aside
      className={`${
        showDashMobilemenu ? 'flex' : 'hidden'
      } md:hidden row-span-3  flex-col p-4 py-8 gap-12 bg-white  border-t border-solid border-gray-500 dark:bg-gray-900 `}
    >
      <Logo />
      <NavMenus />
    </aside>
  );
}

export { DashboardMobileMenu };
