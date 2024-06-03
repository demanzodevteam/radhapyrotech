import { z } from 'zod';

const updateUserDataschema = z.object({
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
  image: z.any().optional(),
});

export { updateUserDataschema };
