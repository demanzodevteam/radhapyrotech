"use client";
import { IoMdOpen } from "react-icons/io";
import { OrderStatus } from "@/components/orders/OrderStatus";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { Modal } from "@/components/modal/Modal";
import { formatDate } from "@/services/dateFormatter/dateformatter";
import { getOrders } from "@/services/Orders/getOrders";
import { Invoice } from "@/components/orders/Invoice";
import Pagination from "@/components/Pagination/Pagination";
import { useSearchParams } from "next/navigation";
import { LoadingSpinner } from "@/components/loadingspinner/LoadingSpinner";
import { NotFound } from "@/components/notfound/NotFound";
import Cookies from "js-cookie";

export default function Orders() {
  // const queryParams = new URLSearchParams(window.location.search);
  // const page = queryParams.get("page");
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const [invoiceData, setInvoiceData] = useState({
    isVisible: false,
    order: {},
    z: 20,
  });
  const [productData, setProductData] = useState({
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
    page: page,
  });
  const buildURL = (baseURL, options) => {
    const params = new URLSearchParams();

    Object.keys(options).forEach((key) => {
      if (options[key]) {
        params.append(key, options[key]);
      }
    });

    return `${baseURL}?${params.toString()}`;
  };

  useEffect(() => {
    const storedSearchTerm = Cookies.get("search") || "";
    const storedStatus = Cookies.get("status") || "";
    const storedStartDate = Cookies.get("startDate") || "";
    const storedEndDate = Cookies.get("endDate") || "";
    // const storedPage = Cookies.get("page") || 1; // Retrieve page from cookies

    setSearchTerm({
      ...searchTerm,
      search: storedSearchTerm,
      status: storedStatus,
      startDate: storedStartDate,
      endDate: storedEndDate,
      // page: storedPage, // Set page state from cookies
    });
  }, [searchTerm]);

  const handleReset = () => {
    setSearchTerm({
      search: "",
      status: `select`,
      startDate: "",
      endDate: "",
      page: 1,
    });
    Cookies.remove("search");
    Cookies.remove("status");
    Cookies.remove("startDate");
    Cookies.remove("endDate");
    window.location.href = "/dashboard/orders";
  };

  const showProducts = (products, totalPrice) => {
    setProductData({
      ...productData,
      isVisible: true,
      products: products,
      z: 0,
      totalPrice: totalPrice,
    });
  };

  const CloseProducts = () => {
    setProductData({
      isVisible: false,
      products: [],
      z: 20,
      totalPrice: 0,
    });
  };
  const showInvoice = (order) => {
    setInvoiceData({
      ...invoiceData,
      isVisible: true,
      order: order,
      z: 0,
    });
  };

  const closeInvoice = () => {
    setInvoiceData({
      ...invoiceData,
      isVisible: false,
      z: 20,
    });
  };

  const handleChange = (e) => {
    setSearchTerm({ ...searchTerm, [e.target.name]: e.target.value, page: 1 });
    Cookies.set(e.target.name, e.target.value, { expires: null });
    const baseURL = "https://example.com/api/orders"; // Your base URL here
    const url = buildURL(baseURL, searchTerm);
    console.log(url);
    // Cookies.set("page", page==1?);
  };

  const { data: orders } = useQuery({
    queryKey: ["fetchOrders", { search: searchTerm }],
    queryFn: () => getOrders,
    staleTime: 5000,
  });

  // console.log(JSON.stringify(searchTerm));

  // console.log(`data: ${JSON.stringify(orders)}`);

  return (
    <div className="relative ">
      <div className="absolute">
        <div className="">
          <div className="flex gap-8 pb-6">
            <div className="col-auto">
              <input
                type="text"
                className="border-2 focus:outline-none rounded-md px-4 py-2"
                placeholder="Search By Name"
                onChange={handleChange}
                name="search"
                value={searchTerm.search}
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
                value={searchTerm.startDate}
              />
            </div>
            <div className="flex items-center gap-4">
              <label>End Date</label>
              <input
                type="Date"
                className=" border-2 rounded-md px-4 col-span-2 focus:outline-none py-2"
                onChange={handleChange}
                name="endDate"
                value={searchTerm.endDate}
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
        {/* Order Table */}
        {!orders && <LoadingSpinner />}
        {orders && (
          <div className="">
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
              {orders?.data?.length <= 0 && (
                <NotFound message={"No Orders Found"} />
              )}
              <tbody>
                {orders?.data?.map((order, index) => {
                  return (
                    <tr key={order.id} className="py-2 border-t-2">
                      <td className="mx-4 py-2 text-xs ">
                        {index +
                          (orders?.meta?.currentPage == 1
                            ? 1
                            : 10 * (Number(orders?.meta?.currentPage) - 1) + 1)}
                      </td>
                      <td className="mx-4 py-2 text-xs ">{order.id}</td>
                      <td className="mx-4 py-2 text-xs ">
                        {formatDate(order.order_date)}
                      </td>
                      <td className="mx-4 py-2 text-xs">
                        {order.customer_name}
                      </td>
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
                      <td className="mx-4 py-2 text-xs">
                        {order.customer_city}
                      </td>
                      <td className="mx-4 py-2 text-xs">
                        {order.customers_state}
                      </td>
                      <td className="mx-4 py-2 text-xs">
                        {order.customer_pincode}
                      </td>
                      <td className="mx-4 py-2 text-xs">
                        <button
                          onClick={() => {
                            showProducts(
                              order.ordered_products,
                              order.total_price
                            );
                          }}
                        >
                          <div className="flex gap-2 items-center">
                            {order.ordered_products[0]?.product_name}
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
                      <td className="mx-4 py-2 text-xs">
                        <button
                          onClick={() => {
                            showInvoice(order);
                          }}
                        >
                          <div className="flex gap-2 items-center">
                            Show Invoice <IoMdOpen />
                          </div>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        {/* pagination */}
        {orders && (
          <Pagination
            postMeta={orders?.meta}
            className={"grid justify-center pt-8"}
            currentPath={"/dashboard/orders"}
          />
        )}
      </div>
      {/* Modals */}
      <div className="relative">
        {/* Product Modal  */}
        <div
          className={`fixed left-0 top-0 z-30 flex justify-center items-center w-full h-full backdrop-blur-sm bg-white/30  py-24 ${
            productData.isVisible ? "block" : "hidden"
          }`}
          onClick={CloseProducts}
        >
          <Modal
            isVisible={productData.isVisible}
            onClose={CloseProducts}
            className={
              "bg-white rounded-md w-5/6 max-h-[80vh] h-fit static shadow-2xl"
            }
          >
            <div className="">
              <h4 className="text-center pb-8">Products</h4>
              <table className="min-w-full">
                <thead>
                  <tr className="">
                    <th className="mx-4 py-2 text-left text-xs">S No.</th>
                    <th className="mx-4 py-2 text-left text-xs">
                      Product Code
                    </th>
                    <th className="mx-4 py-2 text-left text-xs">
                      Product Name
                    </th>
                    <th className="mx-4 py-2 text-left text-xs">
                      Individual Price
                    </th>
                    <th className="mx-4 py-2 text-left text-xs">Quantity</th>
                    <th className="mx-4 py-2 text-left text-xs">Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {productData.products?.map((product, index) => {
                    return (
                      <tr key={index} className="py-2 border-y-2">
                        <td className="mx-4 py-2 text-xs ">{index + 1}</td>
                        <td className="mx-4 py-2 text-xs ">
                          {product?.product_code}
                        </td>
                        <td className="mx-4 py-2 text-xs ">
                          {product?.product_name}
                        </td>
                        <td className="mx-4 py-2 text-xs">
                          {product?.product_selling_price}
                        </td>
                        <td className="mx-4 py-2 text-xs">
                          {product?.quantity}
                        </td>
                        <td className="mx-4 py-2 text-xs">
                          {Number(product?.quantity) *
                            Number(product?.product_selling_price)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h2 className="text-center mt-14">
                Total Price : {productData.totalPrice}
              </h2>
            </div>
          </Modal>
        </div>
        {/* Invoice Modal  */}
        <div
          className={`fixed left-0 top-0 z-30 flex justify-center items-center w-full h-full backdrop-blur-sm bg-white/30  py-24 ${
            invoiceData.isVisible ? "block" : "hidden"
          }`}
          onClick={closeInvoice}
        >
          <Modal
            isVisible={invoiceData.isVisible}
            onClose={closeInvoice}
            className={
              "bg-white rounded-md w-5/6 h-full shadow-2xl overflow-y-scroll"
            }
          >
            <Invoice order={invoiceData.order} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
