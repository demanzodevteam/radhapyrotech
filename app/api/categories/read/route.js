import { NextResponse } from 'next/server';
import { PAGE_SIZE } from '@/helpers/constants';
import { prisma } from '@/config/db';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // pagination
    const page = Number(searchParams.get('categorypage')) || 1;

    // entries
    const pageSizeParam = searchParams.get('categoryentries') || PAGE_SIZE;
    let pageSize;
    if (pageSizeParam === 'default') {
      pageSize = PAGE_SIZE;
    } else {
      pageSize = parseInt(pageSizeParam) || PAGE_SIZE;
    }
    const from = (page - 1) * pageSize ?? PAGE_SIZE;

    // category search
    const searchValue = searchParams.get('categorysearch') || '';

    let where = {};

    if (searchValue.length >= 3) {
      where.category_name = {
        contains: searchValue,
      };
    } else {
      where = {};
    }

    const res = await prisma.category.findMany({
      skip: from,
      take: pageSize,
      where: where,
    });
    const count = await prisma.category.count({
      where: where,
    });
    return NextResponse.json(
      { data: res, totalCategories: count },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed To Fetch Categories' },
      { status: 500 }
    );
  }
}
