'use client';
import { cn } from 'clsx-tailwind-merge';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navlink({ href, children, icon }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={cn('flex items-center text-base hover:text-primary', {
        'text-primary': pathName === href,
      })}
    >
      <span className='mr-3 inline-block text-xl'>{icon}</span>
      <span className='mt-1 inline-block'>{children} </span>
    </Link>
  );
}

export default Navlink;
