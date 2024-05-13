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
            <div>No</div>
            <div>Code</div>
            <div>Image</div>
            <div>Name</div>
            <div>Piece</div>
            <div>Box</div>
            <div>Regular Price</div>
            <div>Selling Price</div>
            <div>Status</div>
            <div>Edit/delete</div>
          </TableHeader>
          <TableBody />
        </Table>
      </div>
    </HydrationBoundary>
  );
}

export default ProductsPage;
