import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { UpdateuserDetailsWrapper } from '@/components/auth/UpdateuserDetailsWrapper';
import { LoadingSpinner } from '@/components/loadingspinner/LoadingSpinner';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { Suspense } from 'react';

async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect('/login');
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
