import { prisma } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search");
    const status =
      searchParams.get("status") !== undefined &&
      searchParams.get("status") !== "select" &&
      searchParams.get("status") !== ""
        ? searchParams.get("status")
        : undefined;
    // console.log(`status: ${status}`);
    const startDate = searchParams.get("startDate")
      ? new Date(searchParams.get("startDate"))
      : undefined;
    const endDate = searchParams.get("endDate")
      ? new Date(searchParams.get("endDate"))
      : undefined;
    // console.log(
    //   `search : ${search} \n status: ${status} \n startDate: ${startDate} \n endDate: ${endDate}`
    // );
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
      include: {
        order_products: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        order_date: "desc",
      },
    });

    // const orders = await prisma.Order.findMany();

    console.log("orders: " + JSON.stringify(orders));
    return NextResponse.json(orders, {
      headers: {
        "Content-Type": "application/json",
        "API-Key": process.env.DATA_API_KEY,
      },
    });
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

// const orders = await prisma.orders.findMany();

// export async function GET() {
//   return new Response(`hi`);
// }

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

  return new Response(
    JSON.stringify({
      status: 200,
      message: "updated successfully",
    })
  );
}

// export default async function handler(req, res) {
//   if (req.method !== "PUT") {
//     res.status(405).json({ message: "Method Not Allowed" });
//     return;
//   }

//   const { id, status } = req.body;

//   try {
//     const updatedOrder = await prisma.orders.update({
//       where: {
//         order_id: id,
//       },
//       data: {
//         status: status,
//       },
//     });

//     res.status(200).json({
//       message: "Order status updated successfully",
//       updatedOrder,
//     });
//   } catch (error) {
//     console.error("Error updating order status:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// }
