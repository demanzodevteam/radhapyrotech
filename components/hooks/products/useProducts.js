'use client';
import { getProducts } from '@/services/products/getProducts';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useProducts() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.products],
    queryFn: getProducts,
    throwOnError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    data,
    isLoading,
  };
}

export { useProducts };
