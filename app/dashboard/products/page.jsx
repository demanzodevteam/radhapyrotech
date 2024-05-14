import { Table, TableBody, TableHeader, TableOperations } from '@/components';
import { getProducts } from '@/services/products/getProducts';
import { queryKeys } from '@/tanstack_provider/queryKeys';

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
async function ProductsPage() {
  const queryClient = new QueryClient();

  // call the products prefetch
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className='flex flex-col gap-6'>
        <TableOperations headingText='All products' />
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
          <TableBody />
        </Table>
      </div>
    </HydrationBoundary>
  );
}

export default ProductsPage;




      
      
