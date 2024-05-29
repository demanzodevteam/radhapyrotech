import { api_url } from "@/helpers/constants";
import { buildURL } from "../urlGenerator/urlGenerator";

const getOrders = async (queryParams) => {
  try {
    if (!api_url) return [];
    const baseUrl = `${api_url}/api/orders`;
    const url = buildURL(baseUrl, queryParams);

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch orders");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

const createOrder = async (data) => {
  try {
    if (!api_url) return [];
    const baseUrl = `${api_url}/api/orders`;
    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to create order');
    }

    const responseData = await response.json();
    console.log('Order created successfully:', responseData);
    return responseData;
  } catch (error) { 
    console.error('Error creating order:', error);
    throw error;
  }
  
}

export {getOrders, createOrder}