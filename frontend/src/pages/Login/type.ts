import {z} from 'zod'
import { loginSerializer } from './serializer'

export type TLoginData = z.infer<typeof loginSerializer>