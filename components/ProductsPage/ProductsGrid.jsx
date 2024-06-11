"use client";
import { useProducts } from "../hooks/products/useProducts";
import { CartContext } from "@/app/Context/CartContext/CartContext";
import { useContext } from "react";
import Image from "next/image";
import { ProductPagination } from "./ProductPagination";
import { LoadingSpinner } from "../loadingspinner/LoadingSpinner";
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";

const ProductsGrid = () => {
  const { Data: { data: products = [], totalProducts = 0 } = {}, isLoading } =
    useProducts();

  const { addToCart } = useContext(CartContext);
  const addCart = (product) => {
    addToCart(product);
    toast.success(`${product.product_name} added to cart`);
  };

  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pb-6 gap-6 ">
        {products.map((product, index) => {
          if (product.product_status) {
            return (
              <div key={index} className="p-2 mb-2 relative border-[1px]">
                <div className="relative">
                  <Image
                    src={product.product_image}
                    alt={product.product_name}
                    width={300}
                    height={100}
                    priority={true}
                    className="h-44 w-full object-cover transition-transform duration-300 scale:100 hover:scale-110"
                  />
                </div>
                <div className="grid grid-cols-3 pt-4">
                  <div className="col-span-2">
                    <h2 className=" text-lg font-bold">
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
                  </div>
                  <div className="col-span-1 flex justify-end px-2">
                    <button onClick={() => addCart(product)}>
                      <FaShoppingCart className="text-xl text-orange-500" />
                    </button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <ProductPagination count={totalProducts} />
    </div>
  );
};

export default ProductsGrid;
