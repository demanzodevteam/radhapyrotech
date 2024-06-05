'use client';
import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { useState } from 'react';

function UpdateUserDataForm({ userDetails }) {
  // get the user details for prefill
  const { id, ...editValues } = userDetails ?? {};
  // console.log(editValues, id);

  // update user details hook
  const [details] = useState({ ...editValues });
  // console.log(details);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: editValues,
  });

  function handledata(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handledata)}
      className='flex flex-col md:grid md:grid-cols-2 dark:text-white select-none  gap-y-3 gap-x-6'
    >
      <FormRow label='First Name' error={errors?.firstname?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='firstname'
          defaultValue={details.firstname}
          placeholder='firstname'
          {...register('firstname')}
        />
      </FormRow>
      <FormRow label='Last Name' error={errors?.lastname?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='lastname'
          defaultValue={details.lastname}
          placeholder='lastname'
          {...register('lastname')}
        />
      </FormRow>
      <FormRow colspan={2} label='Email' error={errors?.email?.message}>
        <input
          type='email'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='email'
          autoComplete='off'
          defaultValue={details.email}
          placeholder='email'
          {...register('email')}
        />
      </FormRow>
      <FormRow label='Role' error={errors?.role?.message}>
        <select
          className='px-2 py-2 border-2   focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='role'
          defaultValue={details.role}
          {...register('role')}
        >
          <option value='Admin'>Admin</option>
          <option value='Manager'>Manager</option>
        </select>
      </FormRow>
      <FormRow label='Image'>
        <input
          className='dark:bg-gray-900 px-2 py-[5.5px] rounded outline-none border-2 border-gray-600 focus:border-primary'
          type='file'
          id='image'
          {...register('image')}
        />
      </FormRow>
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
            {/* {isPending ? 'Creating...' : 'Create'} */}Update Account
          </button>
        </div>
      </div>
    </form>
  );
}

export { UpdateUserDataForm };
