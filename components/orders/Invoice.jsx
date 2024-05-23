"use client";
import { formatDate } from "@/services/dateFormatter/dateformatter";
import PdfInvoice from "./PdfInvoice";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";
import { RiFileDownloadFill } from "react-icons/ri";

const Invoice = ({ order }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const fileName = `${order?.id}_${order?.customer_name}_${formatDate(
    order?.order_date
  )}`;
  return (
    <>
      <div className="grid grid-cols-3 place-content-center mb-6">
        {isClient && (
          <div>
            <div className="rounded-md border-2 p-2 w-12 flex justify-center items-center">
              <PDFDownloadLink
                document={<PdfInvoice order={order} />}
                fileName={fileName}
              >
                <RiFileDownloadFill className="text-[1.5rem]" />
              </PDFDownloadLink>
            </div>
          </div>
        )}
        <div>
          <h1 className="text-center font-bold text-[1.5rem] mb-8">Invoice</h1>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div>
          <h2 className="font-bold text-[1rem] mb-2">{order.customer_name}</h2>
          <h3 className="font-bold">Address : </h3>
          <p>{order.customer_address}</p>
          <p>{order.landmark}</p>
          <p>{`${order.customer_city} - ${order.customer_pincode}`}</p>
          <p>{order.customers_state}</p>
          <p>{`Phone : ${order.customer_phone}`}</p>
          <p>{`Email : ${order.customer_Email}`}</p>
        </div>
        <div className="grid place-content-center">
          <div>
            <p>{`Invoice No. : ${order.id}`}</p>
            <p>{`Order Date : ${formatDate(order.order_date)}`}</p>
            <p>{`Invoice Date : ${formatDate(Date.now())}`}</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="text-center font-bold text-[1.2rem]">Products</h2>
        <table className="min-w-full">
          <thead>
            <tr className="">
              <th className="mx-4 py-2 text-left text-xs">S No.</th>
              <th className="mx-4 py-2 text-left text-xs">Product Code</th>
              <th className="mx-4 py-2 text-left text-xs">Product Name</th>
              <th className="mx-4 py-2 text-left text-xs">Individual Price</th>
              <th className="mx-4 py-2 text-left text-xs">Quantity</th>
              <th className="mx-4 py-2 text-left text-xs">Total Price</th>
            </tr>
          </thead>
          <tbody>
            {order.ordered_products?.map((product, index) => {
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
                  <td className="mx-4 py-2 text-xs">{product?.quantity}</td>
                  <td className="mx-4 py-2 text-xs">
                    {Number(product?.quantity) *
                      Number(product?.product_selling_price)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h3 className="pt-6 text-right">Total Price : {order.total_price} </h3>
      </div>
      <div className="grid grid-cols-3 place-content-center mb-6">
        {isClient && (
          <div>
            <div className="rounded-md border-2 p-2 w-12 flex justify-center items-center">
              <PDFDownloadLink
                document={<PdfInvoice order={order} />}
                fileName={fileName}
              >
                <RiFileDownloadFill className="text-[1.5rem]" />
              </PDFDownloadLink>
            </div>
          </div>
        )}
        <div>
          <h1 className="text-center font-bold text-[1.5rem] mb-8">Invoice</h1>
        </div>
      </div>
    </>
  );
};

export { Invoice };
