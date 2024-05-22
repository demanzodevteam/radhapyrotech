import { prisma } from '@/config/db';
import { PAGE_SIZE } from '@/helpers/constants';
import { NextResponse } from 'next/server';

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);

//     // pagination
//     const page = searchParams.get('page') || 1;
//     const from = (page - 1) * PAGE_SIZE;

//     // category
//     const categoryName = searchParams.get('category').replaceAll('-', ' ');

//     // status
//     const productStatus = searchParams.get('status');

//     console.log(productStatus);
//     const where =
//       categoryName !== 'all'
//         ? {
//             product_categories: {
//               some: {
//                 category_name: categoryName,
//               },
//             },
//           }
//         : {};

//     const res = await prisma.product.findMany({
//       skip: from,
//       take: PAGE_SIZE,
//       where: where,
//       include: {
//         product_categories: true,
//       },
//     });
//     const count = await prisma.product.count({
//       where: where,
//     });
//     return NextResponse.json(
//       { data: res, totalProducts: count },
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { error: 'Failed To Fetch Products' },
//       { status: 500 }
//     );
//   }
// }

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // pagination
    const page = parseInt(searchParams.get('page'), 10) || 1;

    // entries
    const pageSizeParam = searchParams.get('entries') || PAGE_SIZE;
    let pageSize;
    if (pageSizeParam === 'default') {
      pageSize = PAGE_SIZE;
    } else {
      pageSize = parseInt(pageSizeParam) || PAGE_SIZE;
    }
    const from = (page - 1) * pageSize ?? PAGE_SIZE;

    // category
    const categoryName =
      searchParams.get('category').replaceAll('-', ' ') || 'all';

    // status
    const productStatus = searchParams.get('status') || 'all';

    // search
    const searchValue = searchParams.get('search') || '';

    let where = {};

    // category name
    if (categoryName !== 'all') {
      where.product_categories = {
        some: {
          category_name: categoryName,
        },
      };
    }

    // product status
    if (productStatus !== 'all') {
      const status = productStatus === 'true';
      where.product_status = {
        equals: status,
      };
    }

    // search
    if (searchValue.length >= 3) {
      const isNumeric = !isNaN(searchValue);

      if (isNumeric) {
        where.product_code = parseInt(searchValue);
      } else {
        where.OR = [
          {
            product_name: {
              contains: searchValue,
              // mode: 'insensitive', // Case-insensitive search
            },
          },
          {
            product_categories: {
              some: {
                category_name: {
                  contains: searchValue,
                  // mode: 'insensitive',
                },
              },
            },
          },
        ];
      }
    }

    // console.log(where);

    const res = await prisma.product.findMany({
      skip: from,
      take: pageSize,
      where: where,
      include: {
        product_categories: true,
      },
    });
    const count = await prisma.product.count({
      where: where,
    });
    return NextResponse.json(
      { data: res, totalProducts: count },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed To Fetch Products' },
      { status: 500 }
    );
  }
}
