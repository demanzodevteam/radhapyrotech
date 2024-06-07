'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { updateuserpassword } from '@/services/users/updateuserpassword';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

function useUpdateuserpassword() {
  const { id: userId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: updatepassword, isPending } = useMutation({
    mutationFn: ({ id, updatePassword }) =>
      updateuserpassword({ id, updatePassword }),
    onSuccess: () => {
      toast.success('User password updated successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.user, userId],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updatepassword, isPending };
}

export { useUpdateuserpassword };
