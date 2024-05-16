export const fetchOrders = async (searchQuery) => {
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get("page");
  let url = `/api/orders?search=${searchQuery.search}&status=${searchQuery.status}&startDate=${searchQuery.startDate}&endDate=${searchQuery.endDate}&page=${searchQuery.page}`;
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
