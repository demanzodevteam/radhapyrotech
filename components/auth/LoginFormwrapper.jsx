'use client';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { LoginForm } from './LoginForm';
import Logo from '../sidebar/Logo';
import Link from 'next/link';

function LoginFormwrapper({ callbackUrl }) {
  const [isClient, setisClient] = useState(false);

  useEffect(() => {
    setisClient(true);
  }, []);

  if (!isClient) return <LoadingSpinner />;
  return (
    <>
      {isClient && (
        <>
          <div className='flex flex-col gap-y-7'>
            <Logo href='/' />
            <LoginForm callbackUrl={callbackUrl} />
            <Link
              className='text-center text-base font-medium hover:text-primary mb-2'
              href={'/forgot'}
            >
              Forgot Password ?
            </Link>
          </div>
        </>
      )}
    </>
  );
}

export default LoginFormwrapper;
