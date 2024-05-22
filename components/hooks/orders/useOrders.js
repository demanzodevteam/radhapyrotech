"use client";
import { getOrders } from "@/services/Orders/getOrders";
import { queryKeys } from "@/components/tanstack_provider/queryKeys";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useOrders() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.orders],
    queryFn: getOrders,
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
