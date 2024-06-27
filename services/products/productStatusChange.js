import { api_url } from '@/helpers/constants';

export async function productStatusChange(data) {
  try {
    const { id, product_status } = await data;

    // console.log(data);
    const res = await fetch(`${api_url}/products/productstatus/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        currentStatus: product_status,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
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
