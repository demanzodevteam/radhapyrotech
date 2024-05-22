import { api_url } from '@/helpers/constants';

async function categoryUpdate({ id, data }) {
  try {
    const categoryId = await id;
    const formData = await data;

    // make request
    const res = await fetch(`${api_url}/categories/update/${categoryId}`, {
      method: 'PUT',
      body: formData,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    return res.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export { categoryUpdate };
