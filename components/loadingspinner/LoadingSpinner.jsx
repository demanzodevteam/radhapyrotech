'use client';

import { MoonLoader } from 'react-spinners';

function LoadingSpinner() {
  const override = {
    display: 'block',
    margin: '100px auto',
  };
  return (
    <div className='flex flex-col items-center justify-center bg-white dark:bg-gray-800'>
      <MoonLoader
        color='#F59000'
        loading={true}
        cssOverride={override}
        size={40}
        aria-label='Loading Spinner'
        // className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
      />
    </div>
  );
}

export { LoadingSpinner };
