import { Repository } from "typeorm"
import { Contact, User } from "../../entities"
import { AppDataSource } from "../../data-source"
import { contactSerializerResponse } from "../../serializers/contact.serializers"
import { TContactResponse } from "../../interfaces/contacts.interfaces"

export const listContactService = async (id: string): Promise<TContactResponse> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({
        id: id
    })

        return contactSerializerResponse.parse(contact)
    }
