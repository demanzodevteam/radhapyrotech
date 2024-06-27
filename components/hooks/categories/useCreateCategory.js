'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { categoryCreate } from '@/services/categories/categoryCreate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useCreateCategory() {
  const queryClient = useQueryClient();
  const { mutate: createCategory, isPending } = useMutation({
    mutationFn: (data) => categoryCreate(data),
    onSuccess: () => {
      toast.success('new Category added');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.categories],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createCategory, isPending };
}

export { useCreateCategory };
