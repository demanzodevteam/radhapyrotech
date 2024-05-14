'use client';
import { useProducts } from '@/hooks/products/useProducts';
import { TableRow } from './TableRow';

function TableBody() {
  const { data: products = [] } = useProducts();
  return (
    <tbody className='py-4'>
      {products?.map((product) => (
        <TableRow key={product.id} data={product} />
      ))}
    </tbody>
  );
}

export default TableBody;
