'use client';

import { useDashboardContext } from '@/dashboardcontext/useDashboardContext';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { GoBellFill } from 'react-icons/go';
import { HiOutlineArrowRightStartOnRectangle } from 'react-icons/hi2';
import { IoMenu } from 'react-icons/io5';
import DarkModeToggleBtn from '../darkmodetoggle/DarkModeToggleBtn';
import { DashboardMobileMenu } from '../sidebar/DashboardMobileMenu';
import defaultProfileImage from '@/assets/profile.png';
function Header() {
  const {
    showSidebar,
    handleOpen,
    handleClose,
    showDashMobilemenu,
    handleCloseMobileDashMenu,
    handleOpenMobileDashMenu,
  } = useDashboardContext();

  const { data: session, status } = useSession();
  const { image, name, id } = session?.user ?? {};
  console.log(id);
  return (
    <>
      <header className=' bg-white dark:bg-gray-900 dark:text-white py-3 px-4 md:px-12 border-b border-solid border-gray-200 dark:border-gray-900 '>
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
            <ul className='flex items-center gap-6 text-2xl'>
              <li>
                <Link href={`/dashboard/profile/${id}`}>
                  <div className='w-10 h-10 relative'>
                    <Image
                      src={image ?? defaultProfileImage}
                      alt={name}
                      width={0}
                      height={0}
                      sizes='100vw'
                      fill
                      priority
                      className='object-cover rounded-full'
                    />
                  </div>
                </Link>
              </li>
              <li>
                <HiOutlineArrowRightStartOnRectangle
                  onClick={() => signOut()}
                  className='cursor-pointer'
                />
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
