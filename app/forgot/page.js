import { Forgotpasswordform } from '@/components/auth/forgotpasswordform';

function ForgotPage() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-8 w-full max-w-[350px] bg-white rounded-md shadow-sm'>
        <div className='flex flex-col gap-y-7'>
          <h1 className='text-2xl text-center font-medium'>Forgot Password</h1>
          <Forgotpasswordform />
        </div>
      </div>
    </main>
  );
}

export default ForgotPage;
