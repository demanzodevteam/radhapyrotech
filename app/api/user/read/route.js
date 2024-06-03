import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';


export async function GET() {
  try {
    const res = await prisma.user.findMany({
      select: {
        firstname: true,
        lastname: true,
        email: true,
        image: true,
        id: true,
        role: true,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed Fetch Users' }, { status: 500 });
  }
}
