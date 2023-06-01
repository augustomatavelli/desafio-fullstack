import { Repository } from "typeorm"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { userSerializerResponse } from "../../serializers/users.serializers"
import { TUserResponse } from "../../interfaces/users.interfaces"

export const listUserService = async(id: string): Promise<TUserResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: id
    })

    return userSerializerResponse.parse(user)
}