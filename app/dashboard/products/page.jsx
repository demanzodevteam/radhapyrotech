'use client';

import { CreateProduct } from '@/components/products/CreateProduct';
import { ProductsTable } from '@/components/products/ProductsTable';
import { TableOperations } from '@/components/tableoperations/TableOperations';

function ProductsPage() {
  return (
    <div className='flex flex-col gap-6'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Products</h2>
        <CreateProduct />
      </TableOperations>
      <ProductsTable />
    </div>
  );
}

export default ProductsPage;
