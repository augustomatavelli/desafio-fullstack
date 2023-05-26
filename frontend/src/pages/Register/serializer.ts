import {z} from 'zod'

export const registerSerializer = z.object({
    name: z.string().min(6).nonempty('O nome é obrigatório'),
    email: z.string().email().nonempty('O email é obrigatório'),
    password: z.string().min(6).nonempty('A senha é obrigatória'),
})