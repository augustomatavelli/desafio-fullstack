import { Repository } from "typeorm"
import { Contact } from "../../entities"
import { AppDataSource } from "../../data-source"

export const deleteContactService = async (id: string): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact = await contactRepository.findOneBy({
        id: id
    })

    await contactRepository.softRemove(contact!)

}