"use client";
import { IoMdOpen } from "react-icons/io";
import OrderStatus from "@/components/OrderStatus";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "@/app/__Components/Modal";

export default function Home() {
  const [modalData, setModalData] = useState({
    isVisible: false,
    products: [],
    z: 20,
    totalPrice: 0,
  });
  const [searchTerm, setSearchTerm] = useState({
    search: "",
    status: "",
    startDate: "",
    endDate: "",
  });
  const handleReset = () => {
    setSearchTerm({
      search: "",
      status: `select`,
      startDate: "",
      endDate: "",
    });
  };

  const showProducts = (products, totalPrice) => {
    setModalData({
      ...modalData,
      isVisible: true,
      products: products,
      z: 0,
      totalPrice: totalPrice,
    });
  };

  const CloseProducts = () => {
    setModalData({
      isVisible: false,
      products: [],
      z: 20,
      totalPrice: 0,
    });
  };

  const fetchOrders = async (searchQuery) => {
    let url = `/api/orders?search=${searchQuery.search}&status=${searchQuery.status}&startDate=${searchQuery.startDate}&endDate=${searchQuery.endDate}`;
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const orders = await res.json();
      // console.log(`orders : ${JSON.stringify(orders)}`);

      return orders;
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      // You might want to handle this error in your UI, or throw it to be handled elsewhere
      throw error;
    }
  };
  const handleChange = (e) => {
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value });
  };

  const { data: orders } = useQuery({
    queryKey: ["fetchOrders", { search: searchTerm }],
    queryFn: () => fetchOrders(searchTerm),
    staleTime: 5000,
  });

  // console.log(`data: ${JSON.stringify(orders)}`);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative">
      <div className={modalData.z === 0 ? `z-0` : "z-20"}>
        <div>
          <div className="flex gap-8 pb-6">
            <div className="col-auto">
              <input
                type="text"
                className=" border-2 focus:outline-none rounded-md px-4 py-2"
                placeholder="Search By Name"
                onChange={handleChange}
                name="search"
              />
            </div>
            <div className="col-auto">
              <select
                name="status"
                onChange={handleChange}
                className=" border-2 px-4 focus:outline-none py-[0.53rem] rounded-md"
                value={searchTerm.status}
              >
                <option value="select">Status</option>
                <option value={OrderStatus.Pending}>pending</option>
                <option value={OrderStatus.Confirmed}>confirmed</option>
                <option value={OrderStatus.Cancelled}>cancelled</option>
              </select>
            </div>

            <div className="flex flex-row gap-4 items-center col-auto">
              <label>Start Date</label>
              <input
                type="Date"
                className=" border-2 rounded-md px-4 col-span-2 focus:outline-none py-2"
                onChange={handleChange}
                name="startDate"
              />
            </div>
            <div className="flex items-center gap-4">
              <label>End Date</label>
              <input
                type="Date"
                className=" border-2 rounded-md px-4 col-span-2 focus:outline-none py-2"
                onChange={handleChange}
                name="endDate"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleReset}
                className="border-2 px-8 py-2 rounded-md"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div>
          <table className="min-w-full">
            <thead>
              <tr className="">
                <th className="mx-4 py-2 text-left text-xs">S No.</th>
                <th className="mx-4 py-2 text-left text-xs">Order Code</th>
                <th className="mx-4 py-2 text-left text-xs">Order Date</th>
                <th className="mx-4 py-2 text-left text-xs">Name</th>
                <th className="mx-4 py-2 text-left text-xs">Phone</th>
                <th className="mx-4 py-2 text-left text-xs">Email</th>
                <th className="mx-4 py-2 text-left text-xs">Address</th>
                <th className="mx-4 py-2 text-left text-xs">Landmark</th>
                <th className="mx-4 py-2 text-left text-xs">City</th>
                <th className="mx-4 py-2 text-left text-xs">State</th>
                <th className="mx-4 py-2 text-left text-xs">Pincode</th>
                <th className="mx-4 py-2 text-left text-xs">Products</th>
                <th className="mx-4 py-2 text-left text-xs">Total Price</th>
                <th className="mx-4 py-2 text-left text-xs">Status</th>
                <th className="mx-4 py-2 text-left text-xs">Invoice</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                return (
                  <tr key={order.id} className="py-2 border-t-2">
                    <td className="mx-4 py-2 text-xs ">{index + 1}</td>
                    <td className="mx-4 py-2 text-xs ">{order.id}</td>
                    <td className="mx-4 py-2 text-xs ">
                      {formatDate(order.order_date)}
                    </td>
                    <td className="mx-4 py-2 text-xs">{order.customer_name}</td>
                    <td className="mx-4 py-2 text-xs text-nowrap">
                      {order.customer_phone}
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      {order.customer_Email}
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      {order.customer_address}
                    </td>
                    <td className="mx-4 py-2 text-xs">{order.landmark}</td>
                    <td className="mx-4 py-2 text-xs">{order.customer_city}</td>
                    <td className="mx-4 py-2 text-xs">
                      {order.customers_state}
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      {order.customer_pincode}
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      <button
                        onClick={() => {
                          showProducts(order.order_products, order.total_price);
                        }}
                      >
                        <div className="flex gap-2 items-center">
                          {order.order_products[0]?.product?.product_name}
                          <IoMdOpen />
                        </div>
                      </button>
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      {String(order.total_price)}
                    </td>
                    <td className="mx-4 py-2 text-xs">
                      <OrderStatus
                        order={{ id: order.id, status: order.status }}
                      />
                    </td>
                    <td className="mx-4 py-2 text-xs">Invoice</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className={` absolute top-0 z-10 flex items-center justify-center w-full h-product-modal backdrop-blur-sm bg-white/30  ${
          modalData.isVisible ? "block" : "hidden"
        }`}
        onClick={CloseProducts}
      >
        <Modal
          isVisible={modalData.isVisible}
          onClose={CloseProducts}
          className={"bg-white rounded-md w-5/6"}
        >
          <div className="">
            <h4 className="text-center pb-8">Products</h4>
            <table className="min-w-full">
              <thead>
                <tr className="">
                  <th className="mx-4 py-2 text-left text-xs">S No.</th>
                  <th className="mx-4 py-2 text-left text-xs">Product Code</th>
                  <th className="mx-4 py-2 text-left text-xs">Product Name</th>
                  <th className="mx-4 py-2 text-left text-xs">
                    Individual Price
                  </th>
                  <th className="mx-4 py-2 text-left text-xs">Quantity</th>
                  <th className="mx-4 py-2 text-left text-xs">Total Price</th>
                </tr>
              </thead>
              <tbody>
                {modalData.products?.map((product, index) => {
                  return (
                    <tr key={product.id} className="py-2 border-t-2">
                      <td className="mx-4 py-2 text-xs ">{index + 1}</td>
                      <td className="mx-4 py-2 text-xs ">
                        {product?.product?.product_code}
                      </td>
                      <td className="mx-4 py-2 text-xs ">
                        {product?.product?.product_name}
                      </td>
                      <td className="mx-4 py-2 text-xs">
                        {product?.product?.product_selling_price}
                      </td>
                      <td className="mx-4 py-2 text-xs">{product?.quantity}</td>
                      <td className="mx-4 py-2 text-xs">
                        {Number(product?.quantity) *
                          Number(product?.product?.product_selling_price)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <h2 className="text-center mt-14">
              Total Price : {modalData.totalPrice}{" "}
            </h2>
          </div>
        </Modal>
      </div>
    </div>
  );
}
