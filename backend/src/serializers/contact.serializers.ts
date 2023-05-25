import {z} from 'zod'

export const contactSerializer = z.object({
    name: z.string().min(1),
    email: z.string().email().min(1),
    phone: z.string()
})

export const contactSerializerResponse = contactSerializer.extend({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
	deletedAt: z.string().nullable()
})

export const allContactSerializerResponse = contactSerializerResponse.array()

export const updateContactSerializer = z.object({
    name: z.string().min(1).optional(),
    email: z.string().email().min(1).optional(),
    phone: z.string().optional()
})