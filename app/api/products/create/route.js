import cloudinary from '@/config/cloudinary';
import { prisma } from '@/config/db';

export async function POST(req, res) {
  try {
    // get all datas
    const formdata = await req.formData();

    // get product image
    const image = await formdata.get('product_image');
    const arrayBuffer = await image.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer).toString('base64');

    let imageUrl;
    if (imageBuffer) {
      const result = await cloudinary.uploader.upload(
        `data:image/png;base64,${imageBuffer}`,
        {
          invalidate: true,
          folder: 'radhapyrotechs',
        }
      );

      // get image url
      imageUrl = result.secure_url;
    }

    // categories values convert to number
    const categories = await formdata
      .getAll('product_categories')
      ?.map((categoryId) => Number(categoryId));

    const newProduct = {
      product_code: Number(formdata.get('product_code')),
      product_name: formdata.get('product_name'),
      product_piece: Number(formdata.get('product_piece')),
      product_box: Number(formdata.get('product_box')),
      product_reqular_price: Number(formdata.get('product_reqular_price')),
      product_selling_price: Number(formdata.get('product_selling_price')),
      product_image: imageUrl,
      product_status: Boolean(formdata.get('product_status')),
      product_categories: categories,
    };

    // console.log(newProduct);

    const res = await prisma.product.create({
      data: {
        product_code: newProduct.product_code,
        product_name: newProduct.product_name,
        product_piece: newProduct.product_piece,
        product_box: newProduct.product_box,
        product_reqular_price: newProduct.product_reqular_price,
        product_selling_price: newProduct.product_selling_price,
        product_image: newProduct.product_image,
        product_status: newProduct.product_status,
        product_categories: {
          connect: newProduct.categories,
        },
      },
    });

    return new Response(JSON.stringify(res), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
