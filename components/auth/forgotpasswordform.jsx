'use client';

import { forgotemailSchema } from '@/utils/forgotformschema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { LoadingSpinnermini } from '../loadingspinner/LoadingSpinnermini';
import { getuserByemail } from '@/actions/auth/action';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function Forgotpasswordform() {
  // form
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotemailSchema),
  });

  const router = useRouter();

  // handle form submission
  async function handleformsubmission(data) {
    try {
      const res = await getuserByemail(data);
      if (res.error) {
        const errorData = res.error;
        throw new Error(errorData);
      }
      router.push(`/resetpassword/${res.userId}`);
      toast.success(res.success);
    } catch (error) {
      toast.error(error.message);
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
      <button
        disabled={isSubmitting}
        className='px-6 flex items-center justify-center gap-x-3 mt-2 py-2 bg-primary text-lg hover:bg-primary hover:bg-opacity-90 rounded-md text-white'
        type='submit'
      >
        {isSubmitting && <LoadingSpinnermini />}
        Reset password
      </button>
    </form>
  );
}

export { Forgotpasswordform };
