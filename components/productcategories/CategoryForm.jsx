'use client';

import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { useCreateCategory } from '../hooks/categories/useCreateCategory';

function CategoryForm({ onCloseModal }) {
  // form
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  // create new category
  const { createCategory, isPending } = useCreateCategory();

  function handleFormdata(data) {
    const formdata = new FormData();

    // append data to form data
    formdata.append('category_name', data.category_name);

    // send a value
    createCategory(formdata, {
      onSuccess: () => {
        onCloseModal?.();
        reset();
      },
      onError: () => {
        reset();
      },
    });
  }

  return (
    <div className='w-full max-w-full md:w-[23rem] md:max-w-[30rem]  p-2  flex flex-col gap-5'>
      <h3 className='text-gray-800 text-xl md:text-2xl font-bold dark:text-white'>
        New Category Name
      </h3>
      <form
        onSubmit={handleSubmit(handleFormdata)}
        className='dark:text-white flex flex-col gap-5'
      >
        <FormRow error={errors?.category_name?.message}>
          <input
            type='text'
            className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
            id='category_name'
            placeholder='Category Name'
            {...register('category_name', {
              required: 'Please Enter The Category Name',
            })}
          />
        </FormRow>
        <div className='flex justify-end gap-x-4'>
          <button
            className='px-4 py-2 dark:border dark:border-solid border-gray-600 dark:bg-transparent hover:dark:bg-gray-900 bg-gray-800  hover:bg-gray-800 hover:bg-opacity-90 rounded-md text-white text-base'
            onClick={onCloseModal}
          >
            Cancel
          </button>
          <button
            className='px-4 py-2 bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
            type='submit'
            disabled={isPending}
          >
            {isPending ? 'Creating...' : 'create'}
          </button>
        </div>
      </form>
    </div>
  );
}

export { CategoryForm };
