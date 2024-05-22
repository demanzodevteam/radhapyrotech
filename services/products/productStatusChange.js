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

    if (res.status === 500) {
      throw new Error('Product Status Updation Failed');
    }
  } catch (error) {
    return error;
  }
}
