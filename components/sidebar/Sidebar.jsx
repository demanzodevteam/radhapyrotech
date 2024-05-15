import Logo from './Logo';
import NavMenus from './NavMenus';

function Sidebar() {
  return (
    <aside className='md:flex row-span-3 flex-col py-14 px-10 gap-12 bg-white  border-r border-solid border-gray-200 dark:bg-gray-900 dark:border-gray-900'>
      <Logo />
      <NavMenus />
    </aside>
  );
}

export { Sidebar };
