"use client";
import { CartContext } from "@/app/Context/CartContext/CartContext";
import { createOrder } from "@/services/Orders/getOrders";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  customer_name: z.string().min(2, { message: "Name must have 2 characters" }),

  customer_phone: z
    .string()
    .min(10, { message: "Phone Number must contain 10  digits" })
    .regex(/^\d{10}$/, {
      message: "Phone Number must contain exactly 10 digits",
    }),

  customer_Email: z.string().email({ message: "Email is required" }),
  customer_address: z.string().min(1, { message: "This field is required" }),
  landmark: z.string().min(1, { message: "This field is required" }),
  customers_state: z.string().min(1, { message: "This field is required" }),
  customer_city: z.string().min(1, { message: "This field is required" }),
  customer_pincode: z.string().min(1, { message: "This field is required" }),
  delivery_instructions: z.string().optional(),
});

const PlaceOrder = () => {
  const { totalPrice, cart, resetCart } = useContext(CartContext);
  const [formdisabled, setFormdisabled] = useState(true);

  useEffect(() => {
    setFormdisabled(cart.length < 1);
  }, [cart]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const formData = {
      ...data,
      OrderedProduct: cart,
      total_price: totalPrice,
    };
    const orderResponse = await createOrder(formData);
    // console.log(orderResponse);
    if (orderResponse.status == 200) {
      toast.success(orderResponse.message);
      resetCart();
      reset();
    }
  };

  return (
    <div className="border-2 rounded-lg col-span-2 p-4">
      <div className="flex gap-4 justify-center pb-2">
        <span className="text-xl">Total Price : </span>
        <strong className="text-2xl">{`₹ ${totalPrice}`}</strong>
      </div>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 pt-4">
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_name" className="text-sm">
              Customer Name :
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("customer_name")}
            />
          </div>
          {errors.customer_name && (
            <span className="text-xs text-red-500">
              {errors.customer_name.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_phone" className="text-sm">
              Customer Phone :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="tel"
              {...register("customer_phone")}
            />
          </div>
          {errors.customer_phone && (
            <span className="text-xs text-red-500">
              {errors.customer_phone.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_Email" className="text-sm">
              Customer Email :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              {...register("customer_Email")}
            />
          </div>
          {errors.customer_Email && (
            <span className="text-xs text-red-500">
              {errors.customer_Email.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_address" className="text-sm">
              Customer Address :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("customer_address")}
            />
          </div>
          {errors.customer_address && (
            <span className="text-xs text-red-500">
              {errors.customer_address.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="landmark" className="text-sm">
              Landmark :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("landmark")}
            />
          </div>
          {errors.landmark && (
            <span className="text-xs text-red-500">
              {errors.landmark.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customers_state" className="text-sm">
              Customer State :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("customers_state")}
            />
          </div>
          {errors.customers_state && (
            <span className="text-xs text-red-500">
              {errors.customers_state.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_city" className="text-sm">
              Customer City :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("customer_city")}
            />
          </div>
          {errors.customer_city && (
            <span className="text-xs text-red-500">
              {errors.customer_city.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="customer_pincode" className="text-sm">
              Customer Pincode :{" "}
            </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              {...register("customer_pincode")}
            />
          </div>
          {errors.customer_pincode && (
            <span className="text-xs text-red-500">
              {errors.customer_pincode.message}
            </span>
          )}
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="delivery_instructions" className="text-sm">
              Notes :{" "}
            </label>
            <textarea
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 h-24 px-4"
              {...register("delivery_instructions")}
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button
            className="py-2 border-2 rounded-lg px-8"
            disabled={isSubmitting || formdisabled}
            type="submit"
          >
            {formdisabled
              ? "Add Products To Cart"
              : isSubmitting
              ? "Your Order is being placed"
              : "Place Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
