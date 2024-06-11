'use server';

// import { prisma } from '@/config/db';
import { subDays } from 'date-fns';

import { PrismaClient } from '@prisma/client';
import { getToday } from '@/helpers/dataformats';
const prisma = new PrismaClient();

export async function getordersstats(days) {
  try {
    // total orders count
    const numofdays = await days;

    const queryDate = subDays(new Date(), numofdays);
    console.log(queryDate);

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
              gte: queryDate,
            },
          },
        ],
      },
    });

    console.log('lll');

    console.log(totalCount);

    const pendingCount = await prisma.order.count({
      where: {
        status: 'pending',
      },
    });

    //confirm orders count
    const confirmordersCount = await prisma.order.count({
      where: {
        status: 'confirmed',
      },
    });

    //   canceled orders count
    const canceledordersCount = await prisma.order.count({
      where: {
        status: 'cancelled',
      },
    });

    return {
      totalordersCount: totalCount,
      pendingordersCount: pendingCount,
      confirmordersCount: confirmordersCount,
      canceledordersCount: canceledordersCount,
    };
  } catch (error) {
    return {
      totalordersCount: 0,
      pendingordersCount: 0,
      confirmordersCount: 0,
      canceledordersCount: 0,
    };
  }
}
