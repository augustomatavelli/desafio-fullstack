import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Contact, User } from "../../entities"
import { TContact, TContactResponse } from "../../interfaces/contacts.interfaces"
import { contactSerializerResponse } from "../../serializers/contact.serializers"

export const createContactService = async (user: User | null, data: TContact): Promise<TContactResponse> =>  {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = contactRepository.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        user: user!
    })

    await contactRepository.save(contact)

    const newContact = contactSerializerResponse.parse(contact)

    return newContact
}