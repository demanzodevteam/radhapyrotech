import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    // get user by id
    const res = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    // return a response
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'No User Found' }, { status: 500 });
  }
}
