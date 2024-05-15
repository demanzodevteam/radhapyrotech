'use client';

import { useForm } from 'react-hook-form';
import FormRow from '../formrow/FormRow';
import { useCategories } from '@/hooks/categories/useCategories';

function CreateProductForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: categories } = useCategories();

  function handleform(data) {
    console.log(data);
  }
  return (
    <form
      className='flex flex-col md:grid md:grid-cols-2 pb- gap-y-3 gap-x-6'
      onSubmit={handleSubmit(handleform)}
    >
      <FormRow label='Product Code' error={errors?.product_code?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_code'
          {...register('product_code', {
            required: 'please enter the product code',
          })}
          placeholder='Product Code'
        />
      </FormRow>
      <FormRow label='Product Name' error={errors?.product_name?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_name'
          {...register('product_name', {
            required: 'please enter the product name',
          })}
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Piece' error={errors?.product_piece?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_piece'
          {...register('product_piece', {
            required: 'piece',
          })}
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Box' error={errors?.product_box?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_box'
          {...register('product_box', {
            required: 'box',
          })}
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='MRP' error={errors?.product_reqular_price?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_reqular_price'
          {...register('product_reqular_price', {
            required: 'MRP',
          })}
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow
        label='Selling Price'
        error={errors?.product_selling_price?.message}
      >
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_selling_price'
          {...register('product_selling_price', {
            required: 'selling price',
          })}
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Product Status' error={errors?.product_status?.message}>
        <select
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_status'
          {...register('product_status', {
            required: 'select the product status',
          })}
          defaultValue={true}
        >
          <option value={true}>Enable</option>
          <option value={false}>Disable</option>
        </select>
      </FormRow>
      <FormRow label='Product Image' error={errors?.product_image?.message}>
        <input
          type='file'
          id='product_image'
          {...register('product_image', {
            required: 'please select the product category',
          })}
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
        />
      </FormRow>
      <FormRow
        label='Product Category'
        error={errors?.product_categories?.message}
      >
        <select
          multiple
          id='product_categories'
          {...register('product_categories', {
            required: 'please select the product category',
          })}
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
        >
          {categories?.map((category) => (
            <option key={category.id} value={category.id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </FormRow>

      <div className='flex mt-6  flex-col col-span-2 justify-end'>
        <div className='flex gap-x-4 justify-start'>
          <button
            className='px-6 py-2 border border-primary hover:bg-opacity-90 rounded-md text-gray-800 dark:text-white text-base'
            type='reset'
          >
            Clear
          </button>
          <button
            className='px-6 py-2 bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
            type='submit'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default CreateProductForm;
