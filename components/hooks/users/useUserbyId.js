'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { getUserbyId } from '@/services/users/getuserbyId';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { useParams } from 'next/navigation';

function useUserbyId() {
  const { id: paramsId } = useParams();
  const { data: session } = useSession();
  const { id: sessionuserid } = session?.user || {};

  let userId;
  if (sessionuserid) {
    userId = sessionuserid;
  } else {
    userId = paramsId;
  }

  const { data: user, isLoading } = useQuery({
    queryKey: [queryKeys.user, userId],
    queryFn: () => getUserbyId(userId),
    retry: false,
  });
  return { user, isLoading };
}

export { useUserbyId };
