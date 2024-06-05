// lib/prisma.js
import { PrismaClient } from "@prisma/client";
import { slugGenerator } from "@/utils/slug";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

prisma.$use(async (params, next) => {
  if (
    params.model === "Product" &&
    (params.action === "create" || params.action === "update")
  ) {
    const data = params.args.data;
    if (data.product_name) {
      data.slug = slugGenerator(data.product_name);
    }
  }
  return next(params);
});

export { prisma };
