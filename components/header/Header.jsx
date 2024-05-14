import DarkModeToggleBtn from '../darkmodetoggle/DarkModeToggleBtn';
import { GoBellFill } from 'react-icons/go';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2';
function Header() {
  return (
    <header className='bg-white dark:bg-gray-900 dark:text-white py-6 px-20 border-b border-solid border-gray-200 dark:border-gray-900 flex justify-end items-center gap-2 space-x-6'>
      <div>user image</div>
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
    </header>
  );
}

export { Header };
