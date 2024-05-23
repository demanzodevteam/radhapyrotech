// import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function DELETE(req, { params }) {
  try {
    // get the product id
    const { id } = await params;
    // make request for delete a product
    const res = await prisma.category.delete({
      where: {
        id: Number(id),
      },
    });

    // return the response
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'There is a problem in Category Deletion' },
      { status: 500 }
    );
  }
}
