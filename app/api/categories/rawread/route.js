import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await prisma.category.findMany();
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed To Fetch Categories' },
      { status: 500 }
    );
  }
}
