import { api_url } from '@/helpers/constants';

export async function getUserbyId(id) {
  try {
    if (!api_url) return [];

    const userId = await id;

    const res = await fetch(`${api_url}/user/readbyid/${userId}`);

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
