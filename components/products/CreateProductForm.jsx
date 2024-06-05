'use client';

import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { useRawcategories } from '../hooks/categories/useRawCategories';
import { useCreateProduct } from '../hooks/products/useCreateProduct';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';

function CreateProductForm({ onCloseModal }) {
  // retriving categories for form input
  const { data: categories, isLoading } = useRawcategories();

  // create new product
  const { createProduct, isPending } = useCreateProduct();

  // use form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleCreateProduct(data) {
    // console.log(data);
    // create a form data
    const formData = new FormData();

    formData.append('product_code', data.product_code);
    formData.append('product_name', data.product_name);
    formData.append('product_piece', data.product_piece);
    formData.append('product_box', data.product_box);
    formData.append('product_reqular_price', data.product_reqular_price);
    formData.append('product_selling_price', data.product_selling_price);
    formData.append('product_image', data?.product_image[0]);
    formData.append('product_status', data.product_status);
    formData.append('product_categories', data.product_categories);

    // sending a request
    createProduct(formData, {
      onSuccess: () => {
        onCloseModal?.();
        reset();
      },
      onError: () => {
        reset();
      },
    });
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <form
      className='flex flex-col md:grid md:grid-cols-2 dark:text-white  gap-y-3 gap-x-6'
      onSubmit={handleSubmit(handleCreateProduct)}
    >
      <FormRow label='Product Code' error={errors?.product_code?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_code'
          placeholder='code'
          {...register('product_code', {
            required: 'Please Enter The Product code',
            minLength: {
              value: 3,
              message: 'A valid product code must be 3 character in length',
            },
          })}
        />
      </FormRow>
      <FormRow label='Product Name' error={errors?.product_name?.message}>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_name'
          placeholder='name'
          {...register('product_name', {
            required: 'Please Enter The Product Name',
          })}
        />
      </FormRow>
      <FormRow label='Piece' error={errors?.product_piece?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_piece'
          placeholder='piece'
          {...register('product_piece', {
            required: 'Please Enter The Product Piece',
          })}
        />
      </FormRow>
      <FormRow label='Box' error={errors?.product_box?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_box'
          placeholder='box'
          {...register('product_box', {
            required: 'Please Enter The Product Box',
          })}
        />
      </FormRow>
      <FormRow label='MRP' error={errors?.product_reqular_price?.message}>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_reqular_price'
          placeholder='regular price'
          {...register('product_reqular_price', {
            required: 'Please Enter The regular price',
          })}
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
          placeholder='Product Name'
          name='product_selling_price'
          {...register('product_selling_price', {
            required: 'Please Enter The Selling Price',
            validate: (value, formvalues) =>
              Number(value) <= Number(formvalues.product_reqular_price) ||
              'Selling Price Should be Less Than Reqular Price',
          })}
        />
      </FormRow>
      <FormRow label='Product Status'>
        <select
          className='px-2 py-2 border-2   focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_status'
          defaultValue={true}
          {...register('product_status')}
        >
          <option value={true}>Enable</option>
          <option value={false}>Disable</option>
        </select>
      </FormRow>
      <FormRow label='Product Image' error={errors?.product_image?.message}>
        <input
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
          type='file'
          id='product_image'
          {...register('product_image', {
            required: 'Please Select The Product Image',
          })}
        />
      </FormRow>
      <FormRow
        label='Product Category'
        error={errors?.product_categories?.message}
      >
        <select
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
          multiple
          id='product_categories'
          {...register('product_categories', {
            required: 'Please Select Atleast one Category',
          })}
        >
          <>
            {categories.length === 0 ? (
              <option>no categories found</option>
            ) : (
              categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.category_name}
                </option>
              ))
            )}
          </>
        </select>
      </FormRow>

      <div className='flex mt-6  flex-col col-span-2 justify-end'>
        <div className='flex gap-x-4 justify-start'>
          <button
            className='px-4 py-2 dark:border dark:border-solid border-gray-600 dark:bg-transparent hover:dark:bg-gray-900 bg-gray-800  hover:bg-gray-800 hover:bg-opacity-90 rounded-md text-white text-base'
            // type='reset'
            onClick={onCloseModal}
          >
            Cancel
          </button>
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

export { CreateProductForm };
