import {z} from 'zod'

export const loginSerializer = z.object({
    email: z.string().email(),
    password: z.string().nonempty("A senha é obrigatória")
})
