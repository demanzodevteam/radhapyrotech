import { UpdateuserDetailsWrapper } from '@/components/auth/UpdateuserDetailsWrapper';
import { LoadingSpinner } from '@/components/loadingspinner/LoadingSpinner';
import { Suspense } from 'react';

function ProfilePage() {
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <h2 className='text-2xl mb-4 font-medium'>Update user account</h2>
      <Suspense fallback={<LoadingSpinner />}>
        <UpdateuserDetailsWrapper />
      </Suspense>
    </div>
  );
}

export default ProfilePage;
