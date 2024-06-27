'use client';

import { queryKeys } from '@/components/tanstack_provider/queryKeys';
import { PAGE_SIZE } from '@/helpers/constants';
import { getCategories } from '@/services/categories/getCategories';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import toast from 'react-hot-toast';

function useCategories() {
  const searchParams = useSearchParams();
  const queryClient = useQueryClient();

  // category pagination
  const categoryPage = !searchParams.get('categorypage')
    ? 1
    : Number(searchParams.get('categorypage'));

  // category entries
  const categoryEntries = searchParams.get('categoryentries') ?? 'default';

  // category search
  const categorySearch = searchParams.get('categorysearch') ?? '';

  const { data: Data, isLoading } = useQuery({
    queryKey: [
      queryKeys.categories,
      categoryPage,
      categoryEntries,
      categorySearch,
    ],
    queryFn: () =>
      getCategories({ categoryPage, categoryEntries, categorySearch }),
    throwOnError: (error) => {
      toast.error(error.message);
    },
  });

  const { totalCategories = 0 } = Data || {};
  const pageCount = Math.ceil(totalCategories / PAGE_SIZE);
  if (categoryPage < pageCount) {
    queryClient.prefetchQuery({
      queryKey: [
        queryKeys.categories,
        categoryPage + 1,
        categoryEntries,
        categorySearch,
      ],
      queryFn: () =>
        getCategories({
          categoryPage: categoryPage + 1,
          categoryEntries,
          categorySearch,
        }),
    });
  }
  if (categoryPage > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        queryKeys.categories,
        categoryPage - 1,
        categoryEntries,
        categorySearch,
      ],
      queryFn: () =>
        getCategories({
          categoryPage: categoryPage - 1,
          categoryEntries,
          categorySearch,
        }),
    });
  }

  return { Data, isLoading };
}

export { useCategories };
