"use client";
import { TableOperations } from "@/components/tableoperations/TableOperations";
import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import CartProduct from "@/components/cart/CartProducts";
import PlaceOrder from "@/components/cart/PlaceOrder";

export default function Cart() {
  const { totalPrice } = useContext(CartContext);

  return (
    <div className="mx-4 lg:mx-24 my-14">
      <TableOperations>
        <h2 className="text-2xl font-medium">Shopping Cart</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <CartProduct />
          <PlaceOrder />
        </div>
      </TableOperations>
    </div>
  );
}
