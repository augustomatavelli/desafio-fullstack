import { Repository } from "typeorm";
import { TUser, TUserResponse } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { userSerializerResponse } from "../../serializers/users.serializers";

export const createUserService = async (data: TUser): Promise<TUserResponse> =>  {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = userRepository.create(data)

    await userRepository.save(user)

    const newUser = userSerializerResponse.parse(user)

    return newUser
}