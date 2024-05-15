import { prisma } from '@/config/db';

export async function GET() {
  try {
    const res = await prisma.category.findMany();
    return new Response(JSON.stringify(res), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
