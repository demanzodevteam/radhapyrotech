import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
function Logo({ href }) {
  return (
    <div className='relative h-[70px] w-auto'>
      <Link href={href}>
        <Image
          src={logo}
          alt='logo'
          priority={true}
          width={0}
          height={0}
          sizes='100vw'
          className='w-auto h-full mx-auto object-contain'
        />
      </Link>
    </div>
  );
}

export default Logo;
