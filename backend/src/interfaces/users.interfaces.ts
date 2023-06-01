import {z} from 'zod'
import { allUsersSerializerResponse, updateUserSerializer, userSerializer, userSerializerResponse } from '../serializers/users.serializers'
import { DeepPartial } from 'typeorm'

export type TUser = z.infer<typeof userSerializer>
export type TUserResponse = z.infer<typeof userSerializerResponse>
export type TAllUserResponse = z.infer<typeof allUsersSerializerResponse>
export type TUpdadeUser = DeepPartial<typeof updateUserSerializer>