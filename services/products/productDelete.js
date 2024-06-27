const { api_url } = require('@/helpers/constants');

async function productDelete(productId) {
  try {
    const deleteProductId = await productId;
    const res = await fetch(`${api_url}/products/delete/${deleteProductId}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    throw new Error(error.message || "can't delete this product");
  }
}

export { productDelete };
