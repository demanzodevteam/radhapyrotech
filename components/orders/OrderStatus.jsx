"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

const OrderStatus = ({ order }) => {
  const [edit, setEdit] = useState(false);
  const queryClient = useQueryClient();
  const handleClick = () => {
    setEdit(!edit);
  };

  const handelChange = async (e) => {
    try {
      const data = {
        id: order.id,
        status: e.target.value,
      };
      const response = await fetch("/api/orders", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const resdata = await response.json();
      if (resdata.status == 200) {
        setEdit(!edit);
        queryClient.invalidateQueries(["fetchOrders"]);
      }
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div>
      <div className={edit ? `hidden` : `block`}>
        <button onClick={handleClick}>{order.status}</button>
      </div>
      <div>
        <select
          className={
            !edit
              ? "hidden"
              : "block pl-2 dark:bg-[#1f2937]  dark:placeholder-inherit dark:text-white focus:outline-none"
          }
          onChange={handelChange}
          defaultValue={order.status}
        >
          <option value={OrderStatus.Pending}>pending</option>
          <option value={OrderStatus.Confirmed}>confirmed</option>
          <option value={OrderStatus.Cancelled}>cancelled</option>
        </select>
      </div>
    </div>
  );
};

export { OrderStatus };
