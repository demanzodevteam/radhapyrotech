'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { productUpdate } from '@/services/products/productUpdate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useUpdateProduct() {
  const queryClient = useQueryClient();
  const { mutate: UpdateProduct, isPending } = useMutation({
    mutationFn: ({ id, data }) => productUpdate({ id, data }),
    onSuccess: () => {
      toast.success('Product Updated Successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.products],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { UpdateProduct, isPending };
}

export { useUpdateProduct };
