'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { deleteUser } from '@/services/users/deleteUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useDeleteUser() {
  const queryClient = useQueryClient();
  const { mutate: deleteFunc, isPending } = useMutation({
    mutationKey: [queryKeys.users],
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: () => {
      toast.success('User Deleted Successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.users],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { deleteFunc, isPending };
}

export { useDeleteUser };
