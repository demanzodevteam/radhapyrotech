import LoginFormwrapper from '@/components/auth/LoginFormwrapper';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Login',
  description: 'RadhaPyroTech Login Page',
};

async function LoginPage({ searchParams }) {
  // redirect the user if seesion exist
  const session = await getServerSession(authOptions);
  if (session && session.user) redirect('/dashboard');
  return (
    <main className='min-h-screen flex items-center justify-center bg-gray-200'>
      <div className='p-8 w-full max-w-[350px] bg-white rounded-md shadow-sm'>
        <LoginFormwrapper callbackUrl={searchParams.callbackUrl} />
      </div>
    </main>
  );
}

export default LoginPage;
