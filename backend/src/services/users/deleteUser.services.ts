import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { User } from "../../entities"

export const deleteUserService = async (id: string) => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: id
    })
    await userRepository.softRemove(user!)
}