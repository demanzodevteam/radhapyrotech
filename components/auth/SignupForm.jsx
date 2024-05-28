'use client';
import { loginSchema } from '@/utils/loginformschema';
import { zodResolver } from '@hookform/resolvers/zod';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { useCreateUser } from '../hooks/users/useCreateUser';

function SignupForm() {
  const [showPass, setshowPass] = useState(false);

  // password field show action
  function handlePasswordVisible() {
    setshowPass((isvisiblePass) => !isvisiblePass);
  }

  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { createUser, isPending } = useCreateUser();

  function handlesignindata(data) {
    console.log(data);

    const formData = new FormData();

    // append form values in form data
    formData.append('firstname', data.firstname);
    formData.append('lastname', data.lastname);
    formData.append('email', data.email);
    formData.append('image', data.image);
    formData.append('password', data.password);

    // make request to create new user
    // createUser(formData, {
    //   onSuccess: () => {
    //     reset();
    //     router.push('/dashboard/users');
    //   },
    //   onError: () => {
    //     reset();
    //   },
    // });
  }
  // function handleerror(data) {
  //   console.log(data);
  // }
  return (
    <form
      onSubmit={handleSubmit(handlesignindata)}
      className='flex flex-col md:grid md:grid-cols-2 dark:text-white  gap-y-3 gap-x-6'
    >
      <FormRow label='First Name' error={errors?.firstname?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='firstname'
          placeholder='firstname'
          {...register('firstname')}
        />
      </FormRow>
      <FormRow label='Last Name' error={errors?.lastname?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='lastname'
          placeholder='lastname'
          {...register('lastname')}
        />
      </FormRow>
      <FormRow colspan={2} label='Email' error={errors?.email?.message}>
        <input
          type='email'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='email'
          placeholder='email'
          {...register('email')}
        />
      </FormRow>
      <FormRow colspan={2} label='Image'>
        <input
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
          type='file'
          id='image'
          {...register('image')}
        />
      </FormRow>
      <FormRow colspan={2} label='Password' error={errors?.password?.message}>
        <input
          type={showPass ? 'text' : 'password'}
          className='px-2 py-2 border-2 flex-grow focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='password'
          placeholder='password'
          {...register('password')}
        />
      </FormRow>
      <FormRow
        colspan={2}
        relativeField={true}
        label='Confirm Password'
        error={errors?.confirmpassword?.message}
      >
        <input
          type={showPass ? 'text' : 'password'}
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='confirmpassword'
          placeholder='confirmpassword'
          {...register('confirmpassword')}
        />
      </FormRow>
      <div className='flex mt-6  flex-col col-span-2 justify-end'>
        <div className='flex gap-x-4 justify-end'>
          <Link
            href='/dashboard/users'
            className='px-4 py-2 dark:border dark:border-solid border-gray-600 dark:bg-transparent hover:dark:bg-gray-900 bg-gray-800  hover:bg-gray-800 hover:bg-opacity-90 rounded-md text-white text-base'
          >
            Cancel
          </Link>
          <button
            disabled={isPending}
            className='px-6 py-2 bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
            type='submit'
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
}
export { SignupForm };
