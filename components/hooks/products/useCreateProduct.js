'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { productCreate } from '@/services/products/productCreate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useCreateProduct() {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isPending } = useMutation({
    mutationFn: (data) => productCreate(data),
    onSuccess: () => {
      toast.success('new Product added');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.products],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createProduct, isPending };
}

export { useCreateProduct };
