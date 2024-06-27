'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { getRawCategories } from '@/services/categories/getRawCategories';
import { useQuery } from '@tanstack/react-query';

function useRawcategories() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.categories],
    queryFn: getRawCategories,
  });

  return { data, isLoading };
}

export { useRawcategories };
