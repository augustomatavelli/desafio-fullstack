import {z} from 'zod'

export const userSerializer = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
    phone: z.string()
})

export const userSerializerResponse = userSerializer.extend({
    id: z.string(),
    createdAt: z.string()
}).omit({
    password: true
})

export const allUsersSerializerResponse = userSerializerResponse.array()

export const updateUserSerializer = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().min(1).optional(),
    password: z.string().min(1).optional(),
    phone: z.string().optional()
})