import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
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
