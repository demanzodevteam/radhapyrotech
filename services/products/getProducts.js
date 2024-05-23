import { api_url } from '@/helpers/constants';

export async function getProducts({ page, category, status, search, entries }) {
  try {
    if (!api_url) return [];

    const res = await fetch(
      `${api_url}/products/read?category=${category}&status=${status}&search=${search}&entries=${entries}&page=${page}`
    );

    // check res is ok
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Failed To Fetch Products');
    }

    if (res.status === 404) {
      throw new Error('Failed To Fetch Products');
    }

    const data = await res.json();
    //console.log(data); //arrayofobj
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
