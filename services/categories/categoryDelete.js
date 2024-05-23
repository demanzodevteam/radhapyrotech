const { api_url } = require('@/helpers/constants');

async function categoryDelete(categoryId) {
  try {
    const deleteCategoryId = await categoryId;
    const res = await fetch(`${api_url}/categories/delete/${deleteCategoryId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error(error.message || "can't delete this category");
  }
}

export { categoryDelete };
