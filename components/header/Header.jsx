import DarkModeToggleBtn from '../darkmodetoggle/DarkModeToggleBtn';

function Header() {
  return (
    <header className='bg-white dark:bg-gray-900 dark:text-white py-6 px-20 border-b border-solid border-gray-200 flex justify-end items-center gap-2 space-x-6'>
      <div>user image</div>
      <ul className='flex gap-6'>
        <li>Profile</li>
        <li>logout</li>
        <li>orders</li>
        <DarkModeToggleBtn />
      </ul>
    </header>
  );
}

export default Header;
