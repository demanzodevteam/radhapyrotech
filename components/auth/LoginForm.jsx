'use client';

import { loginSchema } from '@/utils/loginformschema';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { FormRow } from '../formrow/FormRow';
import { LoadingSpinnermini } from '../loadingspinner/LoadingSpinnermini';
import { useRouter } from 'next/navigation';

function LoginForm({ callbackUrl }) {
  const [showPass, setshowPass] = useState(false);
  const router = useRouter();

  // password field show action
  function handlePasswordVisible() {
    setshowPass((isvisiblePass) => !isvisiblePass);
  }

  // form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function handleformsubmission(data) {
    const res = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!res.ok) {
      reset();
      toast.error(res?.error);
    } else {
      reset();
      router.push(callbackUrl ? callbackUrl : '/dashboard');
      toast.success('Login successfully');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleformsubmission)}
      className='flex flex-col dark:text-white select-none gap-y-4'
    >
      <FormRow label='Email Address' error={errors?.email?.message}>
        <input
          type='email'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='email'
          autoComplete='off'
          placeholder='type your email address'
          {...register('email')}
        />
      </FormRow>
      <div className='flex flex-col gap-2'>
        <label
          className='text-gray-800 capitalize dark:text-white text-base'
          htmlFor='password'
        >
          Password
        </label>
        <div className='flex relative'>
          <input
            type={showPass ? 'text' : 'password'}
            className='px-2 py-2 border-2 flex-grow focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
            id='password'
            autoComplete='off'
            placeholder='type your password'
            {...register('password')}
          />
          {showPass ? (
            <IoIosEye
              onClick={handlePasswordVisible}
              className='text-xl  cursor-pointer absolute right-3 top-3 md:top-[12px] dark:text-white'
            />
          ) : (
            <IoIosEyeOff
              className='text-xl  cursor-pointer absolute right-3 top-3 md:top-[12px] dark:text-white'
              onClick={handlePasswordVisible}
            />
          )}
        </div>
        {errors?.password && (
          <span className='text-red-600 capitalize text-sm font-normal'>
            {errors?.password?.message}
          </span>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className='px-6 flex items-center justify-center gap-x-3 mt-2 py-2 bg-primary text-lg hover:bg-primary hover:bg-opacity-90 rounded-md text-white'
        type='submit'
      >
        {isSubmitting && <LoadingSpinnermini />}
        {isSubmitting ? 'Logging...' : 'Login'}
      </button>
    </form>
  );
}

export { LoginForm };
