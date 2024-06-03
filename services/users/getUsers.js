import { api_url } from '@/helpers/constants';

export async function getUsers() {
  try {
    if (!api_url) return [];

    const res = await fetch(`${api_url}/user/read`);

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
