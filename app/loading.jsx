'use client';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { MoonLoader } from 'react-spinners';

function Loading({ loading }) {
  const isFetching = useIsFetching(); // for now, just don't display
  const isMutating = useIsMutating();

  // check is there condition true show the loader
  const checkLoading = isFetching || isMutating || loading;

  const override = {
    display: 'block',
    margin: '100px auto',
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800'>
      <MoonLoader
        color='#F59000'
        loading={checkLoading}
        cssOverride={override}
        size={60}
        aria-label='Loading Spinner'
        // className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
      />
    </div>
  );
}

export default Loading;
