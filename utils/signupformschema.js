import { z } from 'zod';

const signupSchema = z
  .object({
    firstname: z
      .string()
      .min(2, 'First Name be Atleast 2 Characters')
      .max(45, 'First Name Must be Less Than 45 Characters')
      .regex(new RegExp('^[a-zA-Z]+$'), 'No Special Characters Allowed'),
    lastname: z
      .string()
      .min(1, 'Last Name be Atleast 2 Characters')
      .max(45, 'Last Name Must be Less Than 45 Characters')
      .regex(new RegExp('^[a-zA-Z]+$'), 'No Special Characters Allowed'),
    email: z.string().email('Please Enter the Valid Email Address'),
    role: z.enum(['Admin', 'Manager']),
    image: z.any(),
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

export { signupSchema };
