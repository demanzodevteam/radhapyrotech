import { DeleteCategory } from '../productcategories/DeleteCategory';
import { UpdateCategory } from '../productcategories/UpdateCategory';
import { TableActions } from './TableActions';

function CategoryTableRow({ data }) {
  const { id, category_name } = data ?? {};
  return (
    <tr className='text-gray-900 font-medium text-sm dark:text-white'>
      <td className='px-4 py-3 max-w-4 w-4 border border-gray-300 dark:border-gray-600'>
        <span>{id}</span>
      </td>
      <td className='px-4 py-3  border border-gray-300 dark:border-gray-600'>
        <span>{category_name}</span>
      </td>

      <td className='px-4 py-3  border border-gray-300 dark:border-gray-600'>
        <TableActions>
          <UpdateCategory updateCategory={{ id, category_name }} />
          <DeleteCategory categoryId={id} resource={category_name} />
        </TableActions>
      </td>
    </tr>
  );
}

export { CategoryTableRow };
