'use client';

import { getCategories } from '@/services/categories/getCategories';
import { queryKeys } from '@/tanstack_provider/queryKeys';
import { useQuery } from '@tanstack/react-query';

function useCategories() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.categories],
    queryFn: getCategories,
  });

  return { data, isLoading };
}

export { useCategories };
