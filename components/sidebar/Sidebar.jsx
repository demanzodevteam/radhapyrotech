import Logo from './Logo';
import NavMenus from './NavMenus';

function Sidebar() {
  return (
    <aside className='flex row-span-3 flex-col py-14 px-10 gap-12 bg-white dark:bg-gray-900 border-r border-solid border-gray-200'>
      <Logo />
      <NavMenus />
    </aside>
  );
}

export default Sidebar;
