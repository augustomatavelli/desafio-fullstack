import { Repository } from "typeorm";
import { Contact } from "../../entities";
import { TUpdateContact } from "../../interfaces/contacts.interfaces";
import { AppDataSource } from "../../data-source";
import { updateContactSerializer } from "../../serializers/contact.serializers";

export const updateContactService = async (id: string, data: TUpdateContact) => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const oldContactData = await contactRepository.findOneBy({
        id: id
    })

    const contact = contactRepository.create({
        ...oldContactData,
        ...data
    })

    await contactRepository.save(contact)

    const updateContact = updateContactSerializer.parse(contact)

    return updateContact

}