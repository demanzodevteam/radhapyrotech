import { api_url } from '@/helpers/constants';

export async function updateuserpassword({ id, updatePassword }) {
  try {
    const userId = await id;
    const updatePassworddata = await updatePassword;
    // console.log(updatePassworddata, userId);
    const res = await fetch(`${api_url}/user/updatePassword/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(updatePassworddata),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || 'user password updation failed');
    }

    // return res.json();
  } catch (error) {
    throw new Error(error.message || 'Network error');
  }
}
