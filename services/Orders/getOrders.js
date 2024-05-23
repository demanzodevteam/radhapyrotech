import { api_url } from "@/helpers/constants";
import { buildURL } from "../urlGenerator/urlGenerator";

export const getOrders = async (queryParams) => {
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
