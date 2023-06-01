import { Repository } from "typeorm"
import { TAllContactResponse } from "../../interfaces/contacts.interfaces"
import { User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { allContactSerializerResponse } from "../../serializers/contact.serializers"

export const listContactsOfUserServices = async (user: User | null): Promise<TAllContactResponse> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const allContacts = await userRepository.findOne({
        where: {
            id: user!.id
        },
        relations: {
            contacts: true
        }
    })

    const contacts = allContactSerializerResponse.parse(allContacts?.contacts)

    return contacts

}