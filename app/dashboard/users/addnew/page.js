import { SignupForm } from '@/components/auth/SignupForm';

function AddNewUserPage() {
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <h2 className='text-2xl font-medium'>Create a new user</h2>
      <div className='w-full md:max-w-[700px]'>
        <SignupForm />
      </div>
    </div>
  );
}

export default AddNewUserPage;
