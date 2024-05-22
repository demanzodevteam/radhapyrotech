'use client';

import { useForm } from 'react-hook-form';
import { FormRow } from '../formrow/FormRow';
import { useRawcategories } from '../hooks/categories/useRawCategories';
import { useUpdateProduct } from '../hooks/products/useUpdateProduct';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';

function UpdateProductForm({ onCloseModal, productData }) {
  // retriving categories for form input
  const { data: categories, isLoading } = useRawcategories();

  //  get update product data
  const { id: productId, ...editproductvalues } = productData;
  const isEditSession = Boolean(productId);

  //   get all categories from edit product
  let editproductCategories;
  if (isEditSession)
    editproductCategories = editproductvalues.product_categories.map(
      (category) => String(category.id)
    );

  //  use form hook
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: isEditSession
      ? { ...editproductvalues, product_categories: editproductCategories }
      : {},
  });

  // update a product

  const { UpdateProduct, isPending } = useUpdateProduct();

  function handleUpdateProduct(data) {
    //   create a new form data
    const formData = new FormData();

    // check image has url or new file
    let isImageHasPath =
      typeof data.product_image === 'string'
        ? data.product_image
        : data?.product_image[0];

    formData.append('product_code', data.product_code);
    formData.append('product_name', data.product_name);
    formData.append('product_piece', data.product_piece);
    formData.append('product_box', data.product_box);
    formData.append('product_reqular_price', data.product_reqular_price);
    formData.append('product_selling_price', data.product_selling_price);
    formData.append('product_image', isImageHasPath);
    formData.append('product_status', data.product_status);
    formData.append('product_categories', data.product_categories);

    // const newProduct = {
    //   product_code: formData.get('product_code'),
    //   product_name: formData.get('product_name'),
    //   product_piece: formData.get('product_piece'),
    //   product_box: formData.get('product_box'),
    //   product_reqular_price: formData.get('product_reqular_price'),
    //   product_selling_price: formData.get('product_selling_price'),
    //   product_image: formData.get('product_image'),
    //   product_status: formData.get('product_status'),
    //   product_categories: formData.getAll('product_categories'),
    // };

    // sending a request
    UpdateProduct(
      {
        id: productId,
        data: formData,
      },
      {
        onSuccess: () => {
          onCloseModal?.();
          reset();
        },
        onError: () => {
          reset();
        },
      }
    );
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <form
      className='flex flex-col md:grid md:grid-cols-2 dark:text-white pb- gap-y-3 gap-x-6'
      onSubmit={handleSubmit(handleUpdateProduct)}
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
              value: 2,
              message: 'A valid product code must be 2 character in length',
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
      <FormRow label='Product Image (if no updation needed skip it)'>
        <input
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
          type='file'
          id='product_image'
          {...register('product_image')}
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
            onClick={onCloseModal}
          >
            Cancel
          </button>
          <button
            disabled={isPending}
            className='px-6 py-2 bg-primary hover:bg-primary hover:bg-opacity-90 rounded-md text-white text-base'
            type='submit'
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}

export { UpdateProductForm };
