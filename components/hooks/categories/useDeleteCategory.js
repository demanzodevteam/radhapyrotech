'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { categoryDelete } from '@/services/categories/categoryDelete';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useDeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deleteCategory, isPending } = useMutation({
    mutationKey: [queryKeys.products],
    mutationFn: (categoryId) => categoryDelete(categoryId),
    onSuccess: () => {
      toast.success('Category Deleted Successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.categories],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteCategory, isPending };
}

export { useDeleteCategory };
