"use client";
import { useState } from "react";
import { OrderStatus } from "./OrderStatus";
import { IoMdOpen } from "react-icons/io";
import { formatDate } from "@/services/dateFormatter/dateformatter";

function OrderTableRow({ data }) {
  const orders = data?.data;
  const meta = data?.meta;
  const [invoiceData, setInvoiceData] = useState({
    isVisible: false,
    order: {},
    z: 20,
  });
  const [productData, setProductData] = useState({
    isVisible: false,
    products: [],
    totalPrice: 0,
  });
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
  console.log(`orders: ${JSON.stringify(orders)}`);
  return (
    <tbody className="py-4">
      {orders?.map((order, index) => {
        return (
          <tr key={index} className="text-gray-900 text-sm dark:text-white">
            <td className="px-4 py-3 max-w-4 w-4 border border-gray-300 dark:border-gray-600">
              <span>
                {index +
                  (meta?.currentPage == 1
                    ? 1
                    : 10 * (Number(meta?.currentPage) - 1) + 1)}
              </span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.id}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{formatDate(order.order_date)}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_name}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_phone}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_Email}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_address}</span>
            </td>
            {/* <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.landmark}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_city}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customers_state}</span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.customer_pincode}</span>
            </td> */}
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>
                <button
                  onClick={() => {
                    showProducts(order.ordered_products, order.total_price);
                  }}
                >
                  <div className="flex gap-2 items-center">
                    {order.OrderedProduct[0]?.product_name}
                    <IoMdOpen />
                  </div>
                </button>
              </span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>{order.total_price}</span>
            </td>

            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>
                <OrderStatus order={{ id: order.id, status: order.status }} />
              </span>
            </td>
            <td className="px-4 py-3  border border-gray-300 dark:border-gray-600">
              <span>
                <button
                  onClick={() => {
                    showInvoice(data);
                  }}
                >
                  <div className="flex gap-2 items-center">
                    Show Invoice <IoMdOpen />
                  </div>
                </button>
              </span>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export { OrderTableRow };
