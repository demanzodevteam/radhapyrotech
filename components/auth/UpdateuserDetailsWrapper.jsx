'use client';

import { useUserbyId } from '../hooks/users/useUserbyId';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { UpdateUserDataForm } from './UpdateUserDataForm';
import { UpdateUserPassword } from './UpdateUserPassword';

function UpdateuserDetailsWrapper() {
  // get user details
  const { isLoading, user } = useUserbyId();
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <h3 className='text-xl font-medium'>Update user data</h3>
      <div className='w-full md:max-w-[700px] border-b-2 border-gray-400 pb-12 dark:border-gray-600'>
        <UpdateUserDataForm userDetails={user} />
      </div>
      <h3 className='text-xl font-medium'>Update user password</h3>
      <div className='w-full md:max-w-[700px]'>
        <UpdateUserPassword />
      </div>
    </>
  );
}

export { UpdateuserDetailsWrapper };
