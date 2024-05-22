'use client';

import { FormRow } from '../formrow/FormRow';
import { useCategories } from '@/hooks/categories/useCategories';
import { HandleCreateProduct } from '@/services/products/createProduct';

function CreateProductForm() {
  const { data: categories } = useCategories();

  return (
    <form
      className='flex flex-col md:grid md:grid-cols-2 pb- gap-y-3 gap-x-6'
      action={HandleCreateProduct}
    >
      <FormRow label='Product Code'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_code'
          name='product_code'
          placeholder='Product Code'
        />
      </FormRow>
      <FormRow label='Product Name'>
        <input
          type='text'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_name'
          name='product_name'
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Piece'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_piece'
          name='product_piece'
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Box'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_box'
          name='product_box'
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='MRP'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_reqular_price'
          name='product_reqular_price'
          placeholder='Product Name'
        />
      </FormRow>
      <FormRow label='Selling Price'>
        <input
          type='number'
          className='px-2 py-2 border-2  focus:border-primary dark:bg-gray-900 border-gray-600 rounded outline-none'
          id='product_selling_price'
          name='product_selling_price'
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
