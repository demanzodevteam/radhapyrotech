// contexts/OrderFilterContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

// Create the context
const OrderFilterContext = createContext();

// Create the provider component
export const OrderFilterProvider = ({ children }) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [queryParam, setQueryParam] = useState({
    search: "",
    status: "",
    startDate: "",
    endDate: "",
    page: page,
  });

  useEffect(() => {
    const storedSearchTerm = Cookies.get("search") || "";
    const storedStatus = Cookies.get("status") || "";
    const storedStartDate = Cookies.get("startDate") || "";
    const storedEndDate = Cookies.get("endDate") || "";

    setQueryParam((prev) => ({
      ...prev,
      search: storedSearchTerm,
      status: storedStatus,
      startDate: storedStartDate,
      endDate: storedEndDate,
    }));
  }, []);
  const [orderModal, setOrderModal] = useState({
    isVisible: false,
    order: {},
    z: 20,
    data: [],
    type: "",
  });

  const handleReset = () => {
    setQueryParam({
      search: "",
      status: "select",
      startDate: "",
      endDate: "",
      page: 1,
    });
    Cookies.remove("search");
    Cookies.remove("status");
    Cookies.remove("startDate");
    Cookies.remove("endDate");
    // window.location.href = "/dashboard/orders";
  };

  const closeModal = () => {
    setOrderModal({
      isVisible: false,
      order: {},
      z: 20,
      data: [],
      type: "",
    });
  };
  const handleChange = (e) => {
    setQueryParam((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      page: 1,
    }));
    Cookies.set(e.target.name, e.target.value, { expires: 7 });
  };

  const showProducts = (products, totalPrice) => {
    setOrderModal({
      ...orderModal,
      isVisible: true,
      data: { products, totalPrice },
      z: 0,
      type: "products",
    });
  };

  const showInvoice = (order) => {
    setOrderModal({
      ...orderModal,
      isVisible: true,
      data: order,
      z: 0,
      type: "invoice",
    });
  };
  const updatePage = (page) => {
    setQueryParam({
      ...queryParam,
      page,
    });
  };

  return (
    <OrderFilterContext.Provider
      value={{
        queryParam,
        handleReset,
        handleChange,
        showProducts,
        showInvoice,
        orderModal,
        closeModal,
        updatePage,
      }}
    >
      {children}
    </OrderFilterContext.Provider>
  );
};

// Custom hook to use the context
export const useOrderFilter = () => {
  return useContext(OrderFilterContext);
};
