'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { PAGE_SIZE } from '@/helpers/constants';
import { getUsers } from '@/services/users/getUsers';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

function useUsers() {
  // search params
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  // user pagination
  const userPage = !searchParams.get('userpage')
    ? 1
    : Number(searchParams.get('userpage'));

  // user entries
  const userShowEntries = searchParams.get('userentries') ?? 'default';

  // user search
  const userbySearch = searchParams.get('userbysearch') ?? '';

  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.users, userPage, userbySearch, userShowEntries],
    queryFn: () => getUsers({ userPage, userbySearch, userShowEntries }),
    throwOnError: (error) => {
      toast.error(error.message);
    },
  });

  const { totalusers = 0 } = data || {};
  const pageCount = Math.ceil(totalusers / PAGE_SIZE);

  if (userPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [queryKeys.users, userPage + 1, userbySearch, userShowEntries],
      queryFn: () =>
        getUsers({
          userPage: userPage + 1,
          userbySearch,
          userShowEntries,
        }),
    });
  }

  if (userPage > 1) {
    queryClient.prefetchQuery({
      queryKey: [queryKeys.users, userPage - 1, userbySearch, userShowEntries],
      queryFn: () =>
        getUsers({
          userPage: userPage - 1,
          userbySearch,
          userShowEntries,
        }),
    });
  }

  return { data, isLoading };
}

export { useUsers };
