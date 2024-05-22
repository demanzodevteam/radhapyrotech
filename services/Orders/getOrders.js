import { api_url } from "@/helpers/constants";
export const getOrders = async () => {
  // const queryParams = new URLSearchParams(window.location.search);
  // const page = queryParams.get("page");
  // let url = `/api/orders?search=${searchQuery.search}&status=${searchQuery.status}&startDate=${searchQuery.startDate}&endDate=${searchQuery.endDate}&page=${searchQuery.page}`;
  // try {
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   if (!res.ok) {
  //     throw new Error(`HTTP error! status: ${res.status}`);
  //   }

  //   const orders = await res.json();
  //   // console.log(`orders : ${JSON.stringify(orders)}`);

  //   return orders;
  // } catch (error) {
  //   console.error("Error fetching orders:", error.message);
  //   // You might want to handle this error in your UI, or throw it to be handled elsewhere
  //   throw error;
  // }

  try {
    if (!api_url) return [];

    const res = await fetch(`${api_url}/api/orders/`);

    // check res is ok
    if (!res.ok) {
      return new Error("failed to fetch products");
    }

    if (res.status === 404) {
      return new Error("failed to fetch products");
    }

    const data = await res.json();
    // console.log(`orders: ${JSON.stringify(data)}`);
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};
