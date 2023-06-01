import {z} from 'zod'
import { editContactSerializer, registerContactSerializer } from './serializer'

export type TRegisterContactData = z.infer<typeof registerContactSerializer>
export type TEditContactData = z.infer<typeof editContactSerializer>