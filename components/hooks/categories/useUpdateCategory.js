'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { categoryUpdate } from '@/services/categories/categoryUpdate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useUpdateCategory() {
  const queryClient = useQueryClient();
  const { mutate: UpdateCategory, isPending } = useMutation({
    mutationFn: ({ id, data }) => categoryUpdate({ id, data }),
    onSuccess: () => {
      toast.success('Category Updated Successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.categories],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { UpdateCategory, isPending };
}

export { useUpdateCategory };
