"use client";
import { useContext } from "react";
import { CartContext } from "@/app/Context/CartContext/CartContext";
const AddToCartButton = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  //   console.log(`product: ${JSON.stringify(product)}`);
  return (
    <div>
      <button
        className="border-2 rounded-lg px-8 py-2 bg-slate-400"
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
