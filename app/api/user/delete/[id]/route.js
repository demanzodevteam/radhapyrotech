import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';


export async function DELETE(req, { params }) {
  try {
    // get the user id
    const { id } = await params;
    // make request for delete a product
    const res = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    // return the response
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'There is a problem in User Deletion' },
      { status: 500 }
    );
  }
}
