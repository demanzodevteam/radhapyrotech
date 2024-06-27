import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const formData = await req.formData();

    // new Category
    const newCategory = {
      category_name: formData.get('category_name'),
    };

    // make a request
    const res = await prisma.category.create({
      data: {
        category_name: newCategory.category_name,
      },
    });

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A Category Name Is Already Exists.Pls Try With Unique One' },
        { status: 404 }
      );
    } else {
      return NextResponse.json(
        { error: 'An Unknown Error Occurred While Creating The Product.' },
        { status: 500 }
      );
    }
  }
}
