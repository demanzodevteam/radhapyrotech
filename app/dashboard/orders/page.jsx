import OrderFilter from "@/components/orders/OrderFilters";
import OrderModal from "@/components/orders/OrderModal";
import { OrderTable } from "@/components/orders/OrderTable";
import PaginatorOrder from "@/components/orders/PaginatorOrder";
import { TableOperations } from "@/components/tableoperations/TableOperations";

export default function Orders() {
  return (
    <div className="relative">
      <div className="flex flex-col gap-6">
        <TableOperations>
          <h2 className="text-2xl font-medium">All Orders</h2>
          <OrderFilter />
        </TableOperations>
        <OrderTable />
        <PaginatorOrder />
      </div>
      <OrderModal />
    </div>
  );
}
