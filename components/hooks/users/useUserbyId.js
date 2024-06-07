'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { getUserbyId } from '@/services/users/getuserbyId';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

function useUserbyId() {
  const { id: userId } = useParams();
  const { data: user, isLoading } = useQuery({
    queryKey: [queryKeys.user, userId],
    queryFn: () => getUserbyId(userId),
    retry: false,
  });
  return { user, isLoading };
}

export { useUserbyId };
