"use client";
import { getOrders } from "@/services/Orders/getOrders";
import { queryKeys } from "@/components/tanstack_provider/queryKeys";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useOrderFilter } from "@/app/Context/OrderContext/OrderContextProvider";

function useOrders() {
  const { queryParam } = useOrderFilter();
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.orders, { queryParam: queryParam }],
    queryFn: () => getOrders(queryParam),
    staleTime: 5000,

    throwOnError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    data,
    isLoading,
  };
}

export { useOrders };
