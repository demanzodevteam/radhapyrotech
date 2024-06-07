import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  try {
    const { id } = await params;

    // console.log(params);

    // get user by id
    const res = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        firstname: true,
        lastname: true,
        email: true,
        image: true,
        id: true,
        role: true,
      },
    });
    // console.log(res);
    // return a response
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'No User Found' }, { status: 500 });
  }
}
