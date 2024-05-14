import { getProducts } from '@/services/products/getProducts';
import { queryKeys } from '@/tanstack_provider/queryKeys';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function DashboardPage() {
  const queryClient = new QueryClient();

  // call the products prefetch
  await queryClient.prefetchQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      DashboardPage
    </HydrationBoundary>
  );
}
