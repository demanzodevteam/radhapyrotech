'use client';
import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { updateUserdetails } from '@/services/users/updateuserdetails';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

function useUpdateuserdetails() {
  const { id: userId } = useParams();
  const queryClient = useQueryClient();
  const { mutate: updateUserdetail, isPending } = useMutation({
    mutationFn: ({ id, userData }) => updateUserdetails({ id, userData }),
    onSuccess: () => {
      toast.success('User details updated successfully');
      queryClient.invalidateQueries({
        queryKey: [queryKeys.user, userId],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateUserdetail, isPending };
}

export { useUpdateuserdetails };
