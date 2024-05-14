import { formatDate } from "@/services/dateFormatter/dateformatter";

const Invoice = ({ order }) => {
  return (
    <>
      <h1 className="text-center">Invoice</h1>
      <div className="grid grid-cols-2">
        <div>
          <h2>{order.customer_name}</h2>
          <h3>Address</h3>
          <p>{order.customer_address}</p>
          <p>
            <strong>Landmark : </strong>
            {order.landmark}
          </p>
          <p>{`${order.customer_city} - ${order.customer_pincode}`}</p>
          <p>{order.customer_state}</p>
          <p>{`Phone : ${order.customer_phone}`}</p>
          <p>{`Email : ${order.customer_email}`}</p>
        </div>
        <div>
          <p>{`Invoice No. : ${order.id}`}</p>
          <p>{`Order Date : ${formatDate(order.order_date)}`}</p>
          {/* <p>{`Invoice Date : ${formatDate(Date.now())}`}</p> */}
        </div>
      </div>
    </>
  );
};

export { Invoice };
