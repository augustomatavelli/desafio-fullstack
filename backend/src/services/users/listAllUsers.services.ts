import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { TAllUserResponse } from "../../interfaces/users.interfaces";
import { allUsersSerializerResponse } from "../../serializers/users.serializers";
import { User } from "../../entities";

export const listAllUserService = async (): Promise<TAllUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const allUsers: User[] = await userRepository.find()

    const users = allUsersSerializerResponse.parse(allUsers)

    return users

}