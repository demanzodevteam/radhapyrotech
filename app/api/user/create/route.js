import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import cloudinary from '@/config/cloudinary';

export async function POST(request) {
  try {
    const formdata = await request.formData();
    // console.log(formdata);
    // user image
    const image = await formdata.get('image');

    // hash password for protectiom
    const hashedPassword = await bcrypt.hash(formdata.get('password'), 10);

    // create new user object with form data
    const newUser = {
      firstname: formdata.get('firstname'),
      lastname: formdata.get('lastname'),
      email: formdata.get('email'),
      role: formdata.get('role'),
      password: hashedPassword,
    };

    if (image !== 'null' && image !== undefined) {
      const arrayBuffer = await image.arrayBuffer();
      const imageBuffer = Buffer.from(arrayBuffer).toString('base64');
      if (imageBuffer) {
        const result = await cloudinary.uploader.upload(
          `data:image/png;base64,${imageBuffer}`,
          {
            invalidate: true,
            folder: 'radhapyrotechs',
          }
        );

        // get image url
        newUser.image = result.secure_url;
      }
    } else {
      newUser.image = null;
    }

    // console.log(newUser);
    // make a create request
    const res = await prisma.user.create({
      data: {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password,
        role: newUser.role,
        image: newUser.image,
      },
    });

    return NextResponse.json(res, { status: 200 });
    // return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.log(error);
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'Email Is Already Exists.Pls Try With Unique One' },
        { status: 405 }
      );
    } else {
      return NextResponse.json(
        { error: 'An Unknown Error Occurred While Creating The User.' },
        { status: 500 }
      );
    }
  }
}
