const { api_url } = require('@/helpers/constants');

async function deleteUser(userId) {
  try {
    const deleteUserId = await userId;
    const res = await fetch(`${api_url}/user/delete/${deleteUserId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error(error.message || "can't delete this user");
  }
}

export { deleteUser };
