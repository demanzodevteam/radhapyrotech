"use client";
import { TableOperations } from "@/components/tableoperations/TableOperations";
import { CartContext } from "../Context/CartContext/CartContext";
import { useContext, useState } from "react";
import { createOrder } from "@/services/Orders/getOrders";
export default function Checkout() {
  const { cart, totalPrice } = useContext(CartContext);
  console.log(totalPrice)
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderResponse = createOrder(formData);
    console.log(orderResponse);
  };
  return (
    <div>
      <TableOperations>
        <h2 className="text-2xl font-medium">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <label>Customer Name</label>
          <input
            type="text"
            name="customer_name"
            required
            onChange={handleChange}
          />
          <label>Customer Phone</label>
          <input
            type="tel"
            name="customer_phone"
            required
            onChange={handleChange}
          />
          <label>Customer Email</label>
          <input
            type="email"
            name="customer_Email"
            required
            onChange={handleChange}
          />
          <label>Customer Address</label>
          <input
            type="text"
            name="customer_address"
            required
            onChange={handleChange}
          />
          <label>Landmark</label>
          <input type="text" name="landmark" required onChange={handleChange} />
          <label for="customers_state">Customer State</label>
          <input
            type="text"
            name="customers_state"
            required
            onChange={handleChange}
          />
          <label>Customer City</label>
          <input
            type="text"
            name="customer_city"
            required
            onChange={handleChange}
          />
          <label>Customer Pincode</label>
          <input
            type="text"
            name="customer_pincode"
            required
            onChange={handleChange}
          />
          <label>Delivery Instructions</label>
          <textarea
            type="text"
            name="delivery_instructions"
            onChange={handleChange}
          />
          <button>Checkout</button>
        </form>
      </TableOperations>
    </div>
  );
}
