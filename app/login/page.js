import LoginFormwrapper from '@/components/auth/LoginFormwrapper';

export const metadata = {
  title: 'Login',
  description: 'RadhaPyroTech Login Page',
};

async function LoginPage({ searchParams }) {
  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-8 w-full max-w-[350px] bg-white rounded-md shadow-sm'>
        <LoginFormwrapper callbackUrl={searchParams.callbackUrl} />
      </div>
    </main>
  );
}

export default LoginPage;
