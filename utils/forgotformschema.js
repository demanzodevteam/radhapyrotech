import { z } from 'zod';

const forgotemailSchema = z.object({
  email: z.string().email('Please Enter the Valid Email Address'),
});

const resetasswordformSchema = z
  .object({
    password: z
      .string()
      .min(6, 'Password Must be 6 characters')
      .max(50, 'Password Must be 6 characters'),
    confirmpassword: z
      .string()
      .min(6, 'Password Must be 6 characters')
      .max(50, 'Password Must be 6 characters'),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "password & confirm Password doesn't match",
    path: ['confirmpassword'],
  });

export { forgotemailSchema, resetasswordformSchema };
