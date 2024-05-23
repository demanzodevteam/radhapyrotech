import { PrismaClient } from '@prisma/client';

// export const prisma = new PrismaClient({
//   datasourceUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
// });
// import { PrismaClient } from '@prisma/client';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma;


