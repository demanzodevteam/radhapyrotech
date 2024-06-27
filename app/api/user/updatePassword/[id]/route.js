import { NextResponse } from 'next/server';
import * as bcrypt from 'bcrypt';
import { prisma } from '@/config/db';

export async function PUT(req, { params }) {
  try {
    const password = await req.json();
    const userId = await params.id;
    // console.log(password, userId);

    // hash password for protectiom
    const hashedPassword = await bcrypt.hash(password, 10);

    // console.log(hashedPassword, userId);
    // make update password
    const res = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: 'success' }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred: Can't update the user password." },
      { status: 405 }
    );
  }
}
