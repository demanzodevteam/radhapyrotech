import cloudinary from '@/config/cloudinary';
import { NextResponse } from 'next/server';
import { prisma } from '@/config/db';


export async function PUT(req, { params }) {
  try {
    const formdata = await req.formData();
    const userId = await params.id;
    console.log(userId, Object.fromEntries(formdata));

    // user image
    const image = await formdata.get('image');

    const updateUserdetail = {
      firstname: formdata.get('firstname'),
      lastname: formdata.get('lastname'),
      email: formdata.get('email'),
      role: formdata.get('role'),
    };

    // check user has image
    if (image !== 'null' && image !== undefined) {
      const hasImageUrl = typeof image === 'string' ? true : false;
      if (!hasImageUrl) {
        const arrayBuffer = await image.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer).toString('base64');

        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${imageBuffer}`,
          {
            invalidate: true,
            folder: 'radhapyrotechs',
          }
        );

        // get image url
        updateUserdetail.image = result.secure_url;
      } else {
        updateUserdetail.image = image;
      }
    } else {
      updateUserdetail.image = null;
    }

    // final data
    console.log(updateUserdetail);

    // updating data in database
    const res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        firstname: updateUserdetail.firstname,
        lastname: updateUserdetail.lastname,
        email: updateUserdetail.email,
        image: updateUserdetail.image,
        role: updateUserdetail.role,
      },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    // console.log(error);
    return NextResponse.json(
      { error: "An error occurred: Can't update the user details." },
      { status: 405 }
    );
  }
}
