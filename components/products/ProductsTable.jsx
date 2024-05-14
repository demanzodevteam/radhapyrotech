'use client';
import { Table, TableBody, TableHeader } from '@/components';
import { useProducts } from '@/hooks/products/useProducts';
import { TableRow } from '../table/TableRow';
import { useEffect, useState } from 'react';

function ProductsTable() {
  const { data: products = [] } = useProducts();
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    setmounted(!mounted);
  }, []);
  
  return (
    <>
      {mounted && (
        <Table>
          <TableHeader>
            <th class='px-3 py-2'>No</th>
            <th class='px-3 py-2'>Code</th>
            <th class='px-3 py-2'>Image</th>
            <th class='px-3 py-2'>Name</th>
            <th class='px-3 py-2'>Piece</th>
            <th class='px-3 py-2'>Box</th>
            <th class='px-3 py-2'>Regular Price</th>
            <th class='px-3 py-2'>Selling Price</th>
            <th class='px-3 py-2'>Status</th>
            <th class='px-3 py-2'></th>
          </TableHeader>
          <TableBody
            data={products}
            render={(product) => <TableRow key={product.id} data={product} />}
          />
        </Table>
      )}
    </>
  );
}

export { ProductsTable };
