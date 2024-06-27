'use server';

import { prisma } from '@/config/db';
import { subDays } from 'date-fns';
import { revalidatePath } from 'next/cache';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export async function getordersstats(days) {
  try {
    // total orders count
    const numofdays = await days;

    const queryDate = subDays(new Date(), numofdays); // 7 ,30 , 90

    const totalCount = await prisma.order.count({
      where: {
        AND: [
          {
            order_date: {
              gte: queryDate,
            },
          },
          {
            order_date: {
              lte: new Date(),
            },
          },
        ],
      },
    });

    const pendingCount = await prisma.order.count({
      where: {
        status: 'pending',
        AND: [
          {
            order_date: {
              gte: queryDate,
            },
          },
          {
            order_date: {
              lte: new Date(),
            },
          },
        ],
      },
    });

    //confirm orders count
    const confirmordersCount = await prisma.order.count({
      where: {
        status: 'confirmed',
        AND: [
          {
            order_date: {
              gte: queryDate,
            },
          },
          {
            order_date: {
              lte: new Date(),
            },
          },
        ],
      },
    });

    //   canceled orders count
    const canceledordersCount = await prisma.order.count({
      where: {
        status: 'cancelled',
        AND: [
          {
            order_date: {
              gte: queryDate,
            },
          },
          {
            order_date: {
              lte: new Date(),
            },
          },
        ],
      },
    });

    // for  sales chart
    const totalrecentorders = await prisma.order.findMany({
      where: {
        status: 'confirmed',
        AND: [
          {
            order_date: {
              gte: queryDate,
            },
          },
          {
            order_date: {
              lte: new Date(),
            },
          },
        ],
      },
      select: {
        total_price: true,
        order_date: true,
      },
    });

    // console.log(totalrecentorders);

    revalidatePath('/dashboard');

    return {
      totalordersCount: totalCount,
      pendingordersCount: pendingCount,
      confirmordersCount: confirmordersCount,
      canceledordersCount: canceledordersCount,
      totalrecentorders: {
        orders: totalrecentorders,
        numofdays,
      },
    };
  } catch (error) {
    return {
      totalordersCount: 0,
      pendingordersCount: 0,
      confirmordersCount: 0,
      canceledordersCount: 0,
      totalrecentorders: {},
    };
  }
}
