import { TableActions } from './TableActions';
import { ToggleBtn } from '../togglebtn/ToggleBtn';

function CategoryTableRow({ data }) {
  const { id, category_name } = data ?? {};
  console.log(data);
  return (
    <tr className='text-gray-900 font-medium text-sm dark:text-white'>
      <td className='px-4 py-3 max-w-4 w-4 border border-gray-300 dark:border-gray-600'>
        <span>{id}</span>
      </td>
      <td className='px-4 py-3  border border-gray-300 dark:border-gray-600'>
        <span>{category_name}</span>
      </td>

      <td className='px-4 py-3  border border-gray-300 dark:border-gray-600'>
        {/* <TableActions
          updateProduct={{
            id,
            product_code,
            product_name,
            product_piece,
            product_box,
            product_reqular_price,
            product_selling_price,
            product_image,
            product_status,
            product_categories,
          }}
          resource={product_name}
          productId={id}
        /> */}
      </td>
    </tr>
  );
}

export { CategoryTableRow };