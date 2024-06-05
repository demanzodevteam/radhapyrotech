"use client";
import { CartContext } from "@/app/Context/CartContext/CartContext";
import { useContext } from "react";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import Notfound from "@/app/not-found";

const multiplyAndRound = (price, quantity) => {
  const product = price * quantity;
  const roundedPrice = product.toFixed(2);
  return roundedPrice;
};

const CartProduct = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    inputQuantity,
  } = useContext(CartContext);
  // console.log(`cart ${JSON.stringify(cart)}`);
  return (
    <div className="col-span-3 flex flex-col gap-4">
      {cart.length < 1 && (
        <div className="text-center border-l p-4">No Products in your cart</div>
      )}
      {cart.map((product) => {
        return (
          <div
            className="grid grid-cols-5 gap-4 h-fit rounded-lg border-2 items-center p-4"
            key={product.id}
          >
            <div className="col-span-1">
              <Image
                src={product.product_image}
                alt="product"
                width={300}
                height={300}
                priority={true}
              />
            </div>
            <div className="col-span-4 border-l-2 pl-4">
              <div className="flex justify-end">
                <button onClick={() => removeFromCart(product.id)}>
                  <IoIosCloseCircle className="text-[1.5rem]" />
                </button>
              </div>
              <h3 className="text-2xl pb-4">{product.product_name}</h3>
              <div className="flex gap-4 text-xl">
                <span className="line-through text-red-600">
                  ₹
                  {product.product_reqular_price
                    ? product.product_reqular_price
                    : ""}
                </span>
                <span className="text-green-600">
                  ₹{product.product_selling_price}
                </span>
              </div>
              <div className="lg:grid flex flex-col gap-4  lg:grid-cols-2 items-center pt-6">
                <div className="flex gap-4 items-center">
                  <span>Qty:</span>
                  <div className="flex gap-1 ">
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="border-2 rounded-md py-2 px-4"
                    >
                      +
                    </button>
                    <input
                      type="number"
                      min={1}
                      className="border-2 rounded-md py-2 px-4 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none max-w-24 w-fit text-center min-w-11 focus:outline-none"
                      value={product.quantity}
                      onChange={(e) =>
                        inputQuantity(product.id, e.target.value)
                      }
                    />
                    {/* {product.quantity}
                        </input> */}
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="border-2 rounded-md py-2 px-4"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 justify-end pr-10">
                  <strong>Sub Total : </strong>
                  <strong className="text-xl">
                    {`₹${multiplyAndRound(
                      product.product_selling_price,
                      product.quantity
                    )}`}
                  </strong>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartProduct;
