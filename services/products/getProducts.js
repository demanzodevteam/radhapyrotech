import { api_url } from '@/helpers/constants';

export async function getProducts({ page, category, status, search, entries }) {
  try {
    if (!api_url) return [];

    // let res;

    // console.log('entries', entries);

    // res = await fetch(`${api_url}/products/read`);

    // if (search !== '') {
    //   res = await fetch(`${api_url}/products/read?search=${search}`);
    // }

    // if (category) {
    //   res = await fetch(`${api_url}/products/read?category=${category}`);
    // }

    // if (status) {
    //   res = await fetch(`${api_url}/products/read?status=${status}`);
    // }

    // if (entries) {
    //   res = await fetch(`${api_url}/products/read?entries=${entries}`);
    // }

    // if (page) {
    //   res = await fetch(`${api_url}/products/read?page=${page}`);
    // }
    const res = await fetch(
      `${api_url}/products/read?category=${category}&status=${status}&search=${search}&entries=${entries}&page=${page}`
    );
    if (!res.ok) {
      // check res is ok
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
