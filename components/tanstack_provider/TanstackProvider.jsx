'use client';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import toast from 'react-hot-toast';

function TanstackProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 0,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => toast.error(error.message),
        }),
        mutationCache: new MutationCache({
          onError: (error) => toast.error(error.message),
        }),
      })
  );
  // const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}

export { TanstackProvider };
