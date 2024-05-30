'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { createnewUser } from '@/services/users/createnewUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isPending } = useMutation({
    mutationFn: (data) => createnewUser(data),
    onSuccess: () => {
      toast.success('New User Added');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.users],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { createUser, isPending };
}

export { useCreateUser };
