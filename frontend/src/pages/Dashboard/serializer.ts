import {z} from 'zod'

export const registerContactSerializer = z.object({
    name: z.string().nonempty({message: 'O nome é obrigatório'}),
    email: z.string().email({message: 'O email é obrigatório'}).nonempty(),
    phone: z.string().nonempty({message: 'O telefone é obrigatório'}),
})

export const editContactSerializer = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
})