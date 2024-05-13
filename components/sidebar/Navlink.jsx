'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navlink({ href, children }) {
  const pathName = usePathname();
  return (
    <Link href={href} className={`${pathName === href ? 'text-red' : ''}`}>
      {children}
    </Link>
  );
}

export default Navlink;
