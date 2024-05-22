'use server';

import cloudinary from '@/config/cloudinary';
import { CreateProduct } from './helpers/createProducts';

async function uploadingImage(imageBuffer) {
  const fileUrl = `data:image/png;base64,${imageBuffer}`;

  // result
  const uploadResult = await cloudinary.uploader.upload(fileUrl, {
    invalidate: true,
    folder: 'radhapyrotechs',
  });

  return uploadResult.secure_url;
}

async function HandleCreateProductFormAction(formdata) {
  // form data
  const inputvalues = formdata;

  // image
  const productImage = inputvalues.get('product_image') || '';
  const arrayBuffer = await productImage.arrayBuffer();
  const imageBuffer = Buffer.from(arrayBuffer).toString('base64');

  let productImageUrl;
  if (imageBuffer) {
    productImageUrl = await uploadingImage(imageBuffer);
  }
  console.log(productImageUrl);
  // ! category
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
    product_image: productImageUrl,
    product_status: Boolean(inputvalues.get('product_status')),
    product_categories: {
      connect: categories,
    },
  };

  // make request
  await CreateProduct(newProduct);
}

export { HandleCreateProductFormAction };
