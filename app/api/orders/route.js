import { prisma } from '@/config/db';
import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const status =
      searchParams.get('status') !== undefined &&
      searchParams.get('status') !== 'select' &&
      searchParams.get('status') !== ''
        ? searchParams.get('status')
        : undefined;

    const startDate = searchParams.get('startDate')
      ? new Date(searchParams.get('startDate'))
      : undefined;
    const endDate = searchParams.get('endDate')
      ? new Date(searchParams.get('endDate'))
      : undefined;

    // Pagination parameters
    const page = parseInt(searchParams.get('page')) || 1; // Default page 1
    const pageSize = parseInt(searchParams.get('pageSize')) || 10; // Default page size 10

    const orders = await prisma.Order.findMany({
      where: {
        customer_name: search
          ? {
              startsWith: search,
            }
          : undefined,
        status: status ? { equals: status } : undefined,
        AND: [
          { order_date: startDate ? { gte: startDate } : undefined },
          { order_date: endDate ? { lte: new Date(endDate) } : undefined },
        ],
      },
      orderBy: {
        id: 'desc',
      },

      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    // Get total count for pagination metadata
    const totalCount = await prisma.Order.count({
      where: {
        customer_name: search
          ? {
              contains: search,
            }
          : undefined,
        status: status ? { equals: status } : undefined,
        AND: [
          { order_date: startDate ? { gte: startDate } : undefined },
          { order_date: endDate ? { lte: new Date(endDate) } : undefined },
        ],
      },
    });

    const totalPages = Math.ceil(totalCount / pageSize);
    // console.log(`orders: ${JSON.stringify(orders)}`);
    const metadata = {
      totalCount,
      totalPages,
      currentPage: page,
      pageSize,
    };

    return NextResponse.json(
      { data: orders, meta: metadata },
      {
        headers: {
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY,
        },
      }
    );
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: `Webhook error: ${error.message}` },
      {
        status: 400,
      }
    );
  }
}

export async function PUT(request) {
  try {
    const data = await request.json();
    // console.log("data: " + JSON.stringify(data));
    const status = data.status;
    const updatedOrder = await prisma.Order.update({
      where: {
        id: data.id, // Assuming 'order_id' is the primary key of your 'orders' table
      },
      data: {
        status,
      },
    });
  } catch (error) {
    console.log(`put error: ${error.message}`);
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
  revalidatePath('/dashboard');
  return new Response(
    JSON.stringify({
      status: 200,
      message: 'updated successfully',
    })
  );
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newOrder = await prisma.order.create({
      data: data,
    });
    revalidatePath('/dashboard');
    return new Response(
      JSON.stringify({
        status: 200,
        message: 'Order Placed successfully',
        data: newOrder,
      })
    );
  } catch (error) {
    console.log(`post error: ${error.message}`);
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    });
  }
}
