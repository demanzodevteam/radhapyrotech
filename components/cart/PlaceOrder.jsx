"use client";
import { CartContext } from "@/app/Context/CartContext/CartContext";
import { createOrder } from "@/services/Orders/getOrders";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const PlaceOrder = () => {
  const { totalPrice, cart, resetCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    customer_name: null,
    customer_phone: null,
    customer_Email: null,
    customer_address: null,
    landmark: null,
    customers_state: null,
    customer_city: null,
    customer_pincode: null,
    delivery_instructions: null,
    OrderedProduct: cart,
  });
  // console.log(formData.total_price);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      total_price: totalPrice,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`formData ${JSON.stringify(formData)}`);
    const orderResponse = await createOrder(formData);
    // console.log(orderResponse);
    if (orderResponse.status == 200) {
      toast.success(orderResponse.message);
      resetCart();
      setFormData({
        customer_name: null,
        customer_phone: null,
        customer_Email: null,
        customer_address: null,
        landmark: null,
        customers_state: null,
        customer_city: null,
        customer_pincode: null,
        total_price: totalPrice,
        delivery_instructions: null,
        OrderedProduct: cart,
      });
    }
  };
  return (
    <div className="border-2 rounded-lg col-span-2 p-6">
      <div className="flex gap-4 justify-center pb-2">
        <span className="text-xl">Total Price : </span>
        <strong className="text-2xl">{`₹ ${totalPrice}`}</strong>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 pt-4">
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_name">Customer Name :</label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="customer_name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_phone">Customer Phone : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="tel"
              name="customer_phone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_Email">Customer Email : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="email"
              name="customer_Email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_address">Customer Address : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="customer_address"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="landmark">Landmark : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="landmark"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customers_state">Customer State : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="customers_state"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_city">Customer City : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="customer_city"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3">
            <label htmlFor="customer_pincode">Customer Pincode : </label>
            <input
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 px-4"
              type="text"
              name="customer_pincode"
              required
              onChange={handleChange}
            />
          </div>
          <div className="grid lg:grid-cols-3 items-center">
            <label htmlFor="delivery_instructions">Notes : </label>
            <textarea
              className="focus:outline-none border-2 rounded-lg col-span-2 py-1 h-24 px-4"
              type="text"
              name="delivery_instructions"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <button className="py-2 border-2 rounded-lg px-8">Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
