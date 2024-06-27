"use client";
import { useOrders } from "../hooks/orders/useOrders";
import Pagination from "../Pagination/Pagination";

const PaginatorOrder = () => {
  const { data: orders = [], isLoading } = useOrders();
  return (
    <Pagination
      postMeta={orders?.meta}
      className={"grid justify-center pt-8"}
      currentPath={"/dashboard/orders"}
    />
  );
};

export default PaginatorOrder;
