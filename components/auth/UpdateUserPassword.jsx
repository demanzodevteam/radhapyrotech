'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoIosEye, IoIosEyeOff } from 'react-icons/io';
import { useUserbyId } from '../hooks/users/useUserbyId';

function UpdateUserPassword() {
  const [showPass, setshowPass] = useState(false);

  // password field show action
  function handlePasswordVisible() {
    setshowPass((isvisiblePass) => !isvisiblePass);
  }

  // get user details
  const { isLoading, user } = useUserbyId();
  // console.log(user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form className='flex flex-col md:grid md:grid-cols-2 dark:text-white select-none  gap-y-3 gap-x-6'>
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
      <div className='flex mt-6  flex-col col-span-2 justify-end'>
        <div className='flex gap-x-4 justify-end'>
          <button
            type='reset'
            className='px-4 py-2 dark:border dark:border-solid border-gray-600 dark:bg-transparent hover:dark:bg-gray-900 bg-gray-800  hover:bg-gray-800 hover:bg-opacity-90 rounded-md text-white text-base'
          >
            Cancel
          </button>
          <button
            // disabled={isPending}
            className='px-6 py-2 bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
            type='submit'
          >
            {/* {isPending ? 'Creating...' : 'Create'} */} Update Password
          </button>
        </div>
      </div>
    </form>
  );
}

export { UpdateUserPassword };
