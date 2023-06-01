import {z} from 'zod'

export const loginSerializer = z.object({
    email: z.string().email({message: 'O email é obrigatório'}).nonempty(),
    password: z.string().nonempty({message: 'A senha é obrigatória'}),
})
