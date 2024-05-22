import { OrderTable } from "@/components/orders/OrderTable";
import { TableOperations } from "@/components/tableoperations/TableOperations";
import OrderFilter from "@/components/orders/OrderFilters";

export default function orders2() {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <TableOperations>
          <h2 className="text-2xl font-medium">All Orders</h2>
          <OrderFilter />
        </TableOperations>
        <OrderTable />
      </div>
    </div>
  );
}
