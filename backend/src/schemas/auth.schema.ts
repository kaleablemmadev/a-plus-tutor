// /src/schemas/auth.schema.ts
import { z } from 'zod';

export const loginSchema = z.object({
    identifier: z.string().trim().min(1, { message: "Enter your username, email, or phone number." }),
    password: z.string().min(1, { message: 'Password is required.' })
});

export const registerSchema = z.object({
    userName: z.string().min(3, { message: 'Username must be at least 3 characters long' }),
    fullName: z.string().min(3, { message: 'Full name must be at least 3 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phoneNumber: z.string().regex(/^(?:09\d{8}|\+2519\d{8})$/, { message: 'Invalid phone number' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
    gender: z.enum(['MALE', 'FEMALE'], { message: 'Gender must be either male or female' }),
    educationStatus: z.enum(['NONGRADUATE', 'GRADUATE'], { message: 'Education status must be either nongraduate or graduate' })
}).superRefine((values, ctx) => {
    if (values.confirmPassword !== values.password) {
        ctx.addIssue({
            code: 'custom',
            path: ['confirmPassword'],
            message: 'Passwords do not match',
        });
    }
});

export type RegisterTutorInput = z.infer<typeof registerSchema>;
export type LoginTutorInput = z.infer<typeof loginSchema>;