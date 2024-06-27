'use server';

import { prisma } from '@/config/db';
import { forgotemailSchema } from '@/utils/forgotformschema';
import bcrypt from 'bcrypt';

// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export async function getuserByemail(data) {
  const validateFields = forgotemailSchema.safeParse(data);
  if (!validateFields.success) {
    return { error: 'invalidate fields' };
  }

  //   destructure the data
  const { email } = validateFields?.data;

  //   check user exist in the database
  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists) {
    return { success: 'user exists', userId: userExists.id };
  } else {
    return { error: 'user not exist' };
  }
}

// reset password
export async function resetPassword(data) {
  const { password, userId } = await data;

  //   if user exists
  const userExists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!userExists) {
    return { error: 'user not exist' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // update password
  const res = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      password: hashedPassword,
    },
  });

  if (res) {
    return { success: 'Password updated successfully' };
  } else {
    return { error: 'There is a problem password updation' };
  }
}


