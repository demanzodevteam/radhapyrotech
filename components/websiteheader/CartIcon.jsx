"use client";
import { CartContext } from "@/app/Context/CartContext/CartContext";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    setCartQuantity(cart.length);
  }, [cart]);

  return (
    <Link
      href="/cart"
      className="rounded-full bg-gray-300 w-10 h-10 flex justify-center items-center relative"
    >
      <span
        className={`${
          cartQuantity > 0 ? "block" : "hidden"
        } rounded-full p-1 bg-red-500 text-xs flex justify-center items-center text-white font-bold w-4 h-4 absolute right-[-0.5rem] top-0`}
      >
        {cartQuantity}
      </span>
      <FaShoppingCart className="text-xl" />
    </Link>
  );
};

export default CartIcon;
