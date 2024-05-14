'use client';
import { getProducts } from '@/services/products/getProducts';
import { queryKeys } from '@/tanstack_provider/queryKeys';
import { useQuery } from '@tanstack/react-query';

function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
  });

  return { data, isLoading };
}

export { useProducts };
