'use client';

import { FormRow } from '../formrow/FormRow';
import { useCategories } from '../hooks/categories/useCategories';
import { useCreateProduct } from '../hooks/products/useCreateProduct';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';

function CreateProductForm({ onCloseModal }) {
  // retriving categories for form input
  const { data: categories, isLoading } = useCategories();

  // create new product
  const { createProduct, isPending } = useCreateProduct();

  function HandleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    //   create a object
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
    createProduct(formData, {
      onSuccess: () => {
        onCloseModal?.();
      },
    });
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <form
      className='flex flex-col md:grid md:grid-cols-2 dark:text-white pb- gap-y-3 gap-x-6'
      onSubmit={HandleSubmit}
    >
      <FormRow label='Product Code'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_code'
          name='product_code'
          required
          placeholder='code'
        />
      </FormRow>
      <FormRow label='Product Name'>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_name'
          name='product_name'
          required
          placeholder='name'
        />
      </FormRow>
      <FormRow label='Piece'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_piece'
          name='product_piece'
          placeholder='piece'
          required
        />
      </FormRow>
      <FormRow label='Box'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_box'
          required
          placeholder='box'
        />
      </FormRow>
      <FormRow label='MRP'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_reqular_price'
          name='product_reqular_price'
          required
          placeholder='regular price'
        />
      </FormRow>
      <FormRow label='Selling Price'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_selling_price'
          name='product_selling_price'
          required
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Product Status'>
        <select
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_status'
          name='product_status'
          defaultValue={true}
        >
          <option value={true}>Enable</option>
          <option value={false}>Disable</option>
        </select>
      </FormRow>
      <FormRow label='Product Image'>
        <input
          type='file'
          id='product_image'
          name='product_image'
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
        />
      </FormRow>
      <FormRow label='Product Category'>
        <select
          multiple
          id='product_categories'
          name='product_categories'
          className='dark:bg-gray-900 px-2 py-2 rounded outline-none border-2 border-gray-600 focus:border-primary'
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
            type='reset'
          >
            Clear
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
