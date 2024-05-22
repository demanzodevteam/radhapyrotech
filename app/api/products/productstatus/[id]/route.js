import { prisma } from '@/config/db';
// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
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
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
