import Image from 'next/image';
import logo from '@/assets/logo.png';
import Link from 'next/link';
function Logo() {
  return (
    <div className='relative h-[70px] w-auto'>
      <Link href='/dashboard'>
        <Image
          src={logo}
          alt='logo'
          priority={true}
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-contain absolute left-0 top-0'
        />
      </Link>
    </div>
  );
}

export default Logo;
