'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { productDelete } from '@/services/products/productDelete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useDeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isPending } = useMutation({
    mutationKey: [queryKeys.products],
    mutationFn: (productId) => productDelete(productId),
    onSuccess: () => {
      toast.success('Product Deleted Successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.products],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteProduct, isPending };
}

export { useDeleteProduct };
