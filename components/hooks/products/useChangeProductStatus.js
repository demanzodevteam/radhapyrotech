'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { productStatusChange } from '@/services/products/productStatusChange';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
function useChangeProductStatus() {
  const queryClient = useQueryClient();
  // mutation function
  const { mutate: updateProductStatus, isPending } = useMutation({
    mutationKey: [queryKeys.products],
    mutationFn: (newStatus) => productStatusChange(newStatus),
    onSuccess: () => {
      //show success message
      toast.success('Product Status Updated successfully');
      // invalidate queries
      queryClient.invalidateQueries({
        queryKey: [queryKeys.products],
      });
    },
    onError: (error) => {
      //show error message
      toast.success(error.message);
    },
  });

  return { updateProductStatus, isPending };
}

export { useChangeProductStatus };
