import { prisma } from "@/config/db";

export async function POST(request) {
  try {
    const data = request.json();

    // make a create request
    const res = await prisma.user.create();
  } catch (error) {}
}
