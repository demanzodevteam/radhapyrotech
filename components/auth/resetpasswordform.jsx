'use client';

import { resetasswordformSchema } from '@/utils/forgotformschema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { LoadingSpinnermini } from '../loadingspinner/LoadingSpinnermini';
import { resetPassword } from '@/actions/auth/action';

function Resetpasswordform({ userId }) {
  const [showPass, setshowPass] = useState(false);

  // password field show action
  function handlePasswordVisible() {
    setshowPass((isvisiblePass) => !isvisiblePass);
  }

  // form
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetasswordformSchema),
  });

  const router = useRouter();

  // handle form submission
  async function handleformsubmission(data) {
    try {
      const { password } = data;

      const res = await resetPassword({ password, userId });
      if (res.error) {
        const errorData = res.error;
        throw new Error(errorData);
      }
      router.push(`/login`);
      toast.success(res.success);
      reset();
    } catch (error) {
      reset();
      toast.error(error.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleformsubmission)}
      className='flex flex-col dark:text-white select-none gap-y-4'
    >
      <div className='flex flex-col gap-2 col-span-2'>
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
            placeholder='password'
            {...register('password')}
          />

          {showPass ? (
            <IoIosEye
              onClick={handlePasswordVisible}
              className='text-xl md:text-2xl cursor-pointer absolute right-3 top-3 md:top-[10px] dark:text-white'
            />
          ) : (
            <IoIosEyeOff
              className='text-xl md:text-2xl cursor-pointer absolute right-3 top-3 md:top-[10px] dark:text-white'
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
      <div className='flex flex-col gap-2 col-span-2'>
        <label
          className='text-gray-800 capitalize dark:text-white text-base'
          htmlFor='password'
        >
          Confirm Password
        </label>
        <div className='flex'>
          <input
            type={showPass ? 'text' : 'password'}
            className='px-2 py-2 border-2 flex-grow focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
            id='confirmpassword'
            placeholder='confirmpassword'
            {...register('confirmpassword')}
          />
        </div>
        {errors?.confirmpassword && (
          <span className='text-red-600 capitalize text-sm font-normal'>
            {errors?.confirmpassword?.message}
          </span>
        )}
      </div>
      <button
        disabled={isSubmitting}
        className='px-6 flex items-center justify-center gap-x-3 mt-2 py-2 bg-primary text-lg hover:bg-primary hover:bg-opacity-90 rounded-md text-white'
        type='submit'
      >
        {isSubmitting && <LoadingSpinnermini />}
        Confirm password
      </button>
    </form>
  );
}

export { Resetpasswordform };
