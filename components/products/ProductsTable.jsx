'use client';

import { TableProduct } from '../Table/TableProduct';
import { useProducts } from '../hooks/products/useProducts';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { NotFound } from '../notfound/NotFound';
import { TableBody } from '../table/TableBody';
import { TableHeader } from '../table/TableHeader';
import { TableRow } from '../table/TableRow';

function ProductsTable() {
  const { Data: { data: products = [], totalProducts = 0 } = {}, isLoading } =
    useProducts();
  if (isLoading) return <LoadingSpinner />;
  if (products?.message) return <NotFound message={products?.message} />;
  if (products.length === 0) return <NotFound message='No products Found' />;
  return (
    <TableProduct count={totalProducts}>
      <TableHeader>
        <th className='px-3 py-2 border-0'>No</th>
        <th className='px-3 py-2'>Code</th>
        <th className='px-3 py-2'>Name</th>
        <th className='px-3 py-2'>Piece</th>
        <th className='px-3 py-2'>Box</th>
        <th className='px-3 py-2'>Regular Price</th>
        <th className='px-3 py-2'>Selling Price</th>
        <th className='px-3 py-2'>Status</th>
        <th className='px-3 py-2'>Actions</th>
      </TableHeader>
      <TableBody
        data={products}
        render={(product) => <TableRow key={product.id} data={product} />}
      />
    </TableProduct>
  );
}

export { ProductsTable };
