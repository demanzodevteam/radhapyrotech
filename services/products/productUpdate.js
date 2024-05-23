import { api_url } from '@/helpers/constants';

async function productUpdate({ id, data }) {
  try {
    const productId = await id;
    const formData = await data;

    // make request
    const res = await fetch(`${api_url}/products/update/${productId}`, {
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

export { productUpdate };
