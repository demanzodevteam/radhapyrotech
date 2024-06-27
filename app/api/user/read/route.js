import { prisma } from '@/config/db';
import { NextResponse } from 'next/server';
import { PAGE_SIZE } from '@/helpers/constants';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // pagination
    const page = Number(searchParams.get('userpage')) || 1;

    // entries
    const pageSizeParam = searchParams.get('userentries') || PAGE_SIZE;
    let pageSize;
    if (pageSizeParam === 'default') {
      pageSize = PAGE_SIZE;
    } else {
      pageSize = parseInt(pageSizeParam) || PAGE_SIZE;
    }
    const from = (page - 1) * pageSize ?? PAGE_SIZE;

    // category search
    const searchValue = searchParams.get('userbysearch') || '';

    let where = {};

    if (searchValue.length >= 3) {
      where.OR = [
        {
          firstname: {
            contains: searchValue,
          },
        },
        {
          lastname: {
            contains: searchValue,
          },
        },
      ];
    }

    const res = await prisma.user.findMany({
      skip: from,
      take: pageSize,
      where: where,
      select: {
        firstname: true,
        lastname: true,
        email: true,
        image: true,
        id: true,
        role: true,
      },
    });

    // count
    const count = await prisma.user.count({
      where: where,
    });

    return NextResponse.json(
      { users: res, totalusers: count },
      { status: 200 }
    );
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error: 'Failed Fetch Users' }, { status: 500 });
  }
}
