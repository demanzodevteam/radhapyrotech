'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { getUsers } from '@/services/users/getUsers';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: [queryKeys.users],
    queryFn: getUsers,
    throwOnError: (error) => toast.error(error.message),
  });

  return { users, isLoading };
}

export { useUsers };
