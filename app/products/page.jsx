"use client";
import { useProducts } from "@/components/hooks/products/useProducts";
import Image from "next/image";
import { useState } from "react";
import { CartContext } from "../Context/CartContext/CartContext";
import { useContext } from "react";

export default function Products() {
  const { Data: { data: products = [], totalProducts = 0 } = {}, isLoading } =
    useProducts();

  const { addToCart } = useContext(CartContext);

  // const handleAddToCart = (product) => {};

  // console.log(`products : ${JSON.stringify(products)}`);
  return (
    <div className="m-14">
      <h1 className="text-center pb-14">Products</h1>
      <div className="grid grid-cols-4">
        {products.map((product, index) => {
          if (product.product_status) {
            return (
              <div key={index} className="p-8 border-2 rounded-lg">
                <Image
                  src={product.product_image}
                  alt={product.product_name}
                  width={300}
                  height={100}
                  priority={true}
                />
                <h2 className="pt-4 text-lg font-bold">
                  {product.product_name}
                </h2>
                <div className="flex gap-2 py-2">
                  <span className="line-through text-red-500 font-semibold">
                    ₹{product.product_reqular_price}
                  </span>
                  <span className="text-green-400 font-semibold">
                    ₹{product.product_selling_price}
                  </span>
                </div>
                <button
                  className="border-2 rounded-lg px-8 py-2 w-full bg-slate-400"
                  onClick={() => addToCart(product)}
                >
                  Add To Cart
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
