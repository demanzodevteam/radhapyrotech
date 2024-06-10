import cloudinary from '@/config/cloudinary';
import { prisma } from '@/config/db';
import { cloudinary_url } from '@/helpers/constants';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
  try {
    // Get all form data
    const formdata = await req.formData();
    const { id } = params;

    // Check if product image is a new image or old image
    const image = await formdata.get('product_image');

    const hasImagePath = typeof image === 'string' ? true : false;

    let imageUrl;

    if (hasImagePath) {
      imageUrl = image;
    } else {
      const arrayBuffer = await image.arrayBuffer();
      const imageBuffer = Buffer.from(arrayBuffer).toString('base64');
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBuffer}`,
        {
          invalidate: true,
          folder: 'radhapyrotechs',
        }
      );

      // Get image URL
      imageUrl = result.secure_url;
    }

    // Convert category values to numbers
    const categories =
      formdata
        .get('product_categories')
        ?.split(',')
        .map((categoryId) => Number(categoryId)) || [];

    const updateProduct = {
      product_code: Number(formdata.get('product_code')),
      product_name: formdata.get('product_name'),
      product_piece: Number(formdata.get('product_piece')),
      product_box: Number(formdata.get('product_box')),
      product_reqular_price: Number(formdata.get('product_reqular_price')),
      product_selling_price: Number(formdata.get('product_selling_price')),
      product_image: imageUrl ?? '',
      product_status: Boolean(formdata.get('product_status')),
      product_categories: categories,
    };

    // console.log('Updating product with data:', updateProduct);

    // Update product in database
    const res = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        product_code: updateProduct.product_code,
        product_name: updateProduct.product_name,
        product_piece: updateProduct.product_piece,
        product_box: updateProduct.product_box,
        product_reqular_price: updateProduct.product_reqular_price,
        product_selling_price: updateProduct.product_selling_price,
        product_image: updateProduct.product_image,
        product_status: updateProduct.product_status,
        product_categories: {
          set: updateProduct.product_categories.map((categoryId) => ({
            id: categoryId,
          })),
        },
      },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred: Can't update the item." },
      { status: 500 }
    );
  }
}
