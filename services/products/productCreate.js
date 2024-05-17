import { api_url } from '@/helpers/constants';

export async function productCreate(data) {
  try {
    const formdata = await data;

    // make a request
    const res = await fetch(`${api_url}/products/create`, {
      method: 'POST',
      body: formdata,
    });

    if (res.status === 500) {
      throw new Error(
        'new product creation failed,pls check the product details'
      );
    }
  } catch (error) {
    return error;
  }
}
