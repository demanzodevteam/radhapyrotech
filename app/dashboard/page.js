import { Dashboardfilter } from "@/components/dashboard/dashboardfilter";
import { Dashboardpagewrapper } from "@/components/dashboard/dashboardpagewrapper";
import { LoadingSpinner } from "@/components/loadingspinner/LoadingSpinner";
import { Suspense } from "react";

export default async function DashboardPage({ searchParams }) {
  const currentfilter = (await searchParams.last) ?? "7";
  return (
    <div className="flex flex-col gap-6 pb-12">
      <h2 className="text-2xl mb-4 font-medium">Dashboard Overview</h2>
      <div className="flex gap-x-1 justify-end">
        <Dashboardfilter />
      </div>
      <Suspense key={currentfilter} fallback={<LoadingSpinner />}>
        <Dashboardpagewrapper filter={currentfilter} />
      </Suspense>
    </div>
  );
}

// import { getProducts } from '@/services/products/getProducts';
// import { queryKeys } from '@/tanstack_provider/queryKeys';
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query';
// const queryClient = new QueryClient();

// call the products prefetch
// await queryClient.prefetchQuery({
//   queryKey: [queryKeys.products],
//   queryFn: getProducts,
// });
// return (
//   <HydrationBoundary state={dehydrate(queryClient)}>
//     DashboardPage
//   </HydrationBoundary>
// );
