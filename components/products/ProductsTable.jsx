import { useProducts } from '@/hooks/products/useProducts';
import { TableRow } from '../table/TableRow';
import { Table } from '../table/Table';
import { LoadingSpinner } from '../loadingspinner/LoadingSpinner';
import { TableHeader } from '../table/TableHeader';
import { TableBody } from '../table/TableBody';

function ProductsTable() {
  const { data: products = [], isLoading } = useProducts();

  if (isLoading) return <LoadingSpinner />;
  return (
    <Table>
      <TableHeader>
        <th className='px-3 py-2'>No</th>
        <th className='px-3 py-2'>Code</th>
        <th className='px-3 py-2'>Name</th>
        <th className='px-3 py-2'>Piece</th>
        <th className='px-3 py-2'>Box</th>
        <th className='px-3 py-2'>Regular Price</th>
        <th className='px-3 py-2'>Selling Price</th>
        <th className='px-3 py-2'>Status</th>
        <th className='px-3 py-2'></th>
      </TableHeader>
      <TableBody
        data={products}
        render={(product) => <TableRow key={product.id} data={product} />}
      />
    </Table>
  );
}

export { ProductsTable };
