import { useCategories } from '../hooks/categories/useCategories';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { NotFound } from '../notfound/NotFound';
import { TableHeader } from '../table/TableHeader';
import { TableBody } from '../table/TableBody';
import { CategoryTableRow } from '../table/CategoryTableRow';
import { TableCategory } from '../table/TableCategory';

function CategoryTable() {
  const {
    Data: { data: categories = [], totalCategories = 0 } = {},
    isLoading,
  } = useCategories();
  // console.log(categories, totalCategories);

  if (isLoading) return <LoadingSpinner />;
  if (categories?.message) return <NotFound message={categories?.message} />;
  if (categories.length === 0)
    return <NotFound message='No Categories Found' />;
  return (
    <TableCategory count={totalCategories}>
      <TableHeader>
        <th className='px-3 py-2 border-0'>No</th>
        <th className='px-3 py-2'>Name</th>
        <th className='px-3 py-2'>Actions</th>
      </TableHeader>
      <TableBody
        data={categories}
        render={(category) => (
          <CategoryTableRow key={category.id} data={category} />
        )}
      />
    </TableCategory>
  );
}

export { CategoryTable };
