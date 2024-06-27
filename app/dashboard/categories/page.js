import { CategorySearch } from '@/components/filters/categories/CategorySearch';
import { CategoryShowEntriesFilter } from '@/components/filters/categories/CategoryShowEntriesFilter';
import { LoadingSpinner } from '@/components/loadingspinner/LoadingSpinner';
import { CategoryTable } from '@/components/productcategories/CategoryTable';
import { CreateCategory } from '@/components/productcategories/CreateCategory';
import { CategoryTableFiltersWrapper } from '@/components/tablefilters/CategoryTableFiltersWrapper';
import { TableOperations } from '@/components/tableoperations/TableOperations';
import { Suspense } from 'react';

function CategoriesPage() {
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Categories</h2>
        <CategoryTableFiltersWrapper>
          <CategoryShowEntriesFilter />
          <CategorySearch />
          <CreateCategory />
        </CategoryTableFiltersWrapper>
      </TableOperations>
      <Suspense fallback={<LoadingSpinner />}>
        <CategoryTable />
      </Suspense>
    </div>
  );
}

export default CategoriesPage;
