// import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
const prisma = new PrismaClient();
export async function POST(request) {
  try {
    const formdata = await request.formData();

    // user image
    const image = (await formdata.get('image'));

    // hash password for protectiom
    const hashedPassword = await bcrypt.hash(formdata.get('password'), 10);

    // create new user object with form data
    const newUser = {
      firstname: formdata.get('firstname'),
      lastname: formdata.get('lastname'),
      email: formdata.get('email'),
      password: hashedPassword,
    };

    if (image !== undefined) {
      newUser.image = image;
    }

    console.log(newUser);
    // make a create request
    const res = await prisma.user.create({
      data: {},
    });

    // return NextResponse.json(res, { status: 200 });
    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
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
