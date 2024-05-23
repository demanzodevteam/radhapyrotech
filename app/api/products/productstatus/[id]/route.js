import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';

export async function PUT(request, { params }) {
  try {
    // new status data
    const product = await request.json();

    // product id
    const { id } = await params;

    // console.log(id, product);
    // make request
    const res = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        product_status: product.currentStatus,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "There is a problem: can't change the status of the item.",
      },
      { status: 500 }
    );
  }
}
