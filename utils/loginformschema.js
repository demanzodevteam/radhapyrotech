import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Please Enter the Valid Email Address'),
  password: z
    .string()
    .min(6, 'Password Must be 6 characters')
    .max(50, 'Password Must be 6 characters'),
});

export { loginSchema };
