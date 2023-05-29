import {z} from 'zod'

export const registerSerializer = z.object({
    name: z.string().nonempty({message: 'O nome é obrigatório'}),
    email: z.string().email({message: 'O email é obrigatório'}).nonempty(),
    phone: z.string().nonempty({message: 'O telefone é obrigatório'}),
    password: z.string().nonempty({message: 'A senha é obrigatória'}),
})