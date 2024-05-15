'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navlink({ href, children, icon }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${
        pathName === href ? 'text-primary' : ''
      } flex items-center text-base`}
    >
      <span className='mr-3 inline-block text-xl'>{icon}</span>
      <span className='mt-1 inline-block'>{children} </span>
    </Link>
  );
}

export default Navlink;
