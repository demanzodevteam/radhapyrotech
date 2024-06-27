import { api_url } from '@/helpers/constants';

export async function categoryCreate(data) {
  try {
    const formdata = await data;
    const res = await fetch(`${api_url}/categories/create`, {
      method: 'POST',
      body: formdata,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'Category creation failed');
    }

    return res.json();
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
}
