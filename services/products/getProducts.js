import { api_url } from '@/helpers/constants';

export async function getProducts() {
  try {
    if (!api_url) return [];

    const res = await fetch(`${api_url}/products/read`);

    // check res is ok
    if (!res.ok) {
      return new Error('failed to fetch products');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.Error(error.message);
    return [];
  }
}
