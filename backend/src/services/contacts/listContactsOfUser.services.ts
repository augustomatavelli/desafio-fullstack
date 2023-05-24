import { Repository } from "typeorm"
import { TAllContactResponse } from "../../interfaces/contacts.interfaces"
import { Contact, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { allContactSerializerResponse } from "../../serializers/contact.serializers"

export const listContactsOfUserServices = async (user: User | null): Promise<TAllContactResponse> => {
    // const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const allContacts = await userRepository.findOne({
        where: {
            id: user!.id
        },
        relations: {
            contacts: true
        }
    })
    console.log(allContacts)

    const contacts = allContactSerializerResponse.parse(allContacts?.contacts)

    return contacts

}