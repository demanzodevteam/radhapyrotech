import { api_url } from '@/helpers/constants';

export async function getCategories() {
  try {
    if (!api_url) return [];

    const res = await fetch(`${api_url}/categories/read`);

    // check res is ok
    if (!res.ok) {
      return new Error('failed to fetch categories');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}
