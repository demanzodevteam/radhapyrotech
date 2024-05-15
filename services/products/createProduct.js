'use server';

async function HandleCreateProduct(formdata) {
  const inputvalues = await formdata;
//   console.log(inputvalues);

  const categories = inputvalues
    .getAll('product_categories')
    ?.map((categoryId) => Number(categoryId));
  //   create a object
  const newProduct = {
    product_code: Number(inputvalues.get('product_code')),
    product_name: inputvalues.get('product_name'),
    product_piece: Number(inputvalues.get('product_piece')),
    product_box: Number(inputvalues.get('product_box')),
    product_reqular_price: Number(inputvalues.get('product_reqular_price')),
    product_selling_price: Number(inputvalues.get('product_selling_price')),
    product_image: inputvalues.get('product_image'),
    product_status: Boolean(inputvalues.get('product_status')),
    product_categories: categories,
  };
  console.log(newProduct);
}

export { HandleCreateProduct };
