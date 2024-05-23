import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';


export async function PUT(request, { params }) {
  try {
    // new status data
    const formData = await request.formData();

    // product id
    const { id } = await params;

    const updateCategory = {
      category_name: formData.get('category_name'),
    };
    // make request
    const res = await prisma.category.update({
      where: {
        id: Number(id),
      },
      data: {
        category_name: updateCategory.category_name,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "There is a problem: can't change the Category Name of the item.",
      },
      { status: 500 }
    );
  }
}
