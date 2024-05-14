import { ProductsTable, TableOperations } from '@/components';

async function ProductsPage() {
  return (
    <div className='flex flex-col gap-6'>
      <TableOperations>
        <h2 className='text-2xl font-medium'>All Products</h2>
      </TableOperations>
      <ProductsTable />
    </div>
  );
}

export default ProductsPage;
