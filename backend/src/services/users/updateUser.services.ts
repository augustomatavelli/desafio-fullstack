import { Repository } from "typeorm";
import { TUpdadeUser } from "../../interfaces/users.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { userSerializerResponse } from "../../serializers/users.serializers";

export const updateUserService = async (id: string, data: TUpdadeUser) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const oldUserData = await userRepository.findOneBy({
        id: id
    })

    const user = userRepository.create({
        ...oldUserData,
        ...data
    })

    await userRepository.save(user)

    const updateUser = userSerializerResponse.parse(user)

    return updateUser
}