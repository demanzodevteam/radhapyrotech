"use client";
import CartProduct from "@/components/cart/CartProducts";
import PlaceOrder from "@/components/cart/PlaceOrder";
import { LoadingSpinner } from "@/components/loadingspinner/LoadingSpinner";
import { TableOperations } from "@/components/tableoperations/TableOperations";
import { Suspense, useEffect, useState } from "react";

export default function Cart() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="mx-4 lg:mx-24 my-14">
      <TableOperations>
        <h2 className="text-2xl font-medium">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {isClient && (
            <Suspense fallback={<LoadingSpinner />}>
              <CartProduct />
            </Suspense>
          )}
          <PlaceOrder />
        </div>
      </TableOperations>
    </div>
  );
}
