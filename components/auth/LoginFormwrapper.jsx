'use client';
import { useEffect, useState } from 'react';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { LoginForm } from './LoginForm';
import Logo from '../sidebar/Logo';

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
          <div className='flex flex-col gap-y-10'>
            <Logo href='/' />
            <LoginForm callbackUrl={callbackUrl} />
          </div>
        </>
      )}
    </>
  );
}

export default LoginFormwrapper;
