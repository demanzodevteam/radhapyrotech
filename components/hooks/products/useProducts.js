'use client';
import { getProducts } from '@/services/products/getProducts';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';
import { PAGE_SIZE } from '@/helpers/constants';

function useProducts() {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  // filter by search
  const search = searchParams.get('search') ?? '';

  // filter by category
  const category = searchParams.get('category') ?? 'all';

  // filter by status
  const status = searchParams.get('status') ?? 'all';

  // pagination
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  // entries filter
  const entries = searchParams.get('entries') ?? 'default';

  const { data: Data, isLoading } = useQuery({
    queryKey: [queryKeys.products, page, category, status, search, entries],
    queryFn: () => getProducts({ page, category, status, search, entries }),
    throwOnError: (error) => {
      toast.error(error.message);
    },
  });

  const { totalProducts = 0 } = Data || {};
  const pageCount = Math.ceil(totalProducts / PAGE_SIZE);
  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [
        queryKeys.products,
        page + 1,
        category,
        status,
        search,
        entries,
      ],
      queryFn: () =>
        getProducts({ page: page + 1, category, status, search, entries }),
    });
  }
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        queryKeys.products,
        page - 1,
        category,
        status,
        search,
        entries,
      ],
      queryFn: () =>
        getProducts({ page: page - 1, category, status, search, entries }),
    });
  }
  return {
    Data,
    isLoading,
  };
}

export { useProducts };
