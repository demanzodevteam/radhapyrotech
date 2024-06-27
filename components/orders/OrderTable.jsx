"use client";
import { useOrders } from "../hooks/orders/useOrders";
import { LoadingSpinner } from "../loadingspinner/LoadingSpinner";
import { NotFound } from "../notfound/NotFound";
import { TableHeader } from "../table/TableHeader";
import { OrderTableRow } from "./OrderTableRow";

function OrderTable() {
  const { data: orders = [], isLoading } = useOrders();
  if (isLoading) return <LoadingSpinner />;
  if (orders?.message) return <NotFound message={orders?.message} />;
  if (orders.length === 0) return <NotFound message="No orders Found" />;
  return (
    <table>
      <TableHeader>
        <th className="mx-4 px-4 py-3 text-left text-xs">S No.</th>
        <th className="mx-4 px-4 pl-4 py-3 text-left text-xs">Order Code</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Order Date</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Name</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Phone</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Email</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Address</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Products</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Total Price</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Status</th>
        <th className="mx-4 px-4 py-3 text-left text-xs">Invoice</th>
      </TableHeader>
      <OrderTableRow data={orders} />
    </table>
  );
}

export { OrderTable };
