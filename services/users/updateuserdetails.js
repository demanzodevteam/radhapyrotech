import { api_url } from '@/helpers/constants';

export async function updateUserdetails({ id, userData }) {
  try {
    const userId = await id;
    const formdata = await userData;
    const res = await fetch(`${api_url}/user/update/${userId}`, {
      method: 'PUT',
      body: formdata,
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'user updation failed');
    }

    return res.json();
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
}
