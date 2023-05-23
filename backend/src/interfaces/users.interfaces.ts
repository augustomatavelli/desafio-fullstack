import {z} from 'zod'
import { allUsersSerializerResponse, updateUserSerializer, userSerializer, userSerializerResponse } from '../serializers/users.serializers'

export type TUser = z.infer<typeof userSerializer>
export type TUserResponse = z.infer<typeof userSerializerResponse>
export type TAllUserRespnse = z.infer<typeof allUsersSerializerResponse>
export type TUpdadeUser = z.infer<typeof updateUserSerializer>