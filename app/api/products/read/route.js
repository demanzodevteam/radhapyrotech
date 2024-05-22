import { prisma } from '@/config/db';

export async function GET() {
  try {
    const res = await prisma.product.findMany({
      include: {
        product_categories: true,
      },
    });
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
