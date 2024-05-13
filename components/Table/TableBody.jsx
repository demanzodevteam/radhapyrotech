'use client';
import { useProducts } from '@/hooks/products/useProducts';
import { TableRow } from './TableRow';

function TableBody() {
  const { data: products = [] } = useProducts();
  return (
    <div className='divide-y py-4 divide-gray-300 dark:bg-gray-700'>
      {products?.map((product) => (
        <TableRow key={product.id} data={product} />
      ))}
    </div>
  );
}

export default TableBody;
