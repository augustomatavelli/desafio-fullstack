import {z} from 'zod'
import { allContactSerializerResponse, contactSerializer, contactSerializerResponse, updateContactSerializer } from '../serializers/contact.serializers'
import { DeepPartial } from 'typeorm'

export type TContact = z.infer<typeof contactSerializer>
export type TContactResponse = z.infer<typeof contactSerializerResponse>
export type TAllContactResponse = z.infer<typeof allContactSerializerResponse>
export type TUpdateContact = DeepPartial<typeof updateContactSerializer>