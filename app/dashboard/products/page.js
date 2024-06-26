import { CategoryFilter } from '@/components/filters/products/CategoryFilter';
import { ProductSearch } from '@/components/filters/products/ProductSearch';
import { ShowEntriesFilter } from '@/components/filters/products/ShowEntriesFilter';
import { StatusFilter } from '@/components/filters/products/StatusFilter';
import { LoadingSpinner } from '@/components/loadingspinner/LoadingSpinner';
import { CreateProduct } from '@/components/products/CreateProduct';
import { ProductsTable } from '@/components/products/ProductsTable';
import { TableFiltersWrapper } from '@/components/tablefilters/TableFiltersWrapper';
import { TableOperations } from '@/components/tableoperations/TableOperations';
import { Suspense } from 'react';

function ProductsPage() {
  return (
    <div className='flex flex-col gap-6 pb-12'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Products</h2>
        <CreateProduct />
        <TableFiltersWrapper>
          <ShowEntriesFilter />
          <ProductSearch />
          <CategoryFilter />
          <StatusFilter />
        </TableFiltersWrapper>
      </TableOperations>
      <Suspense fallback={<LoadingSpinner />}>
        <ProductsTable />
      </Suspense>
    </div>
  );
}

export default ProductsPage;
