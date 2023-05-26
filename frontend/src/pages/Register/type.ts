import {z} from 'zod'
import { registerSerializer } from './serializer'

export type TRegisterData = z.infer<typeof registerSerializer>