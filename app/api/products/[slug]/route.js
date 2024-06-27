import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
    });
    return NextResponse.json({ data: product });
  } catch (error) {
    console.log(error);
  }
}
