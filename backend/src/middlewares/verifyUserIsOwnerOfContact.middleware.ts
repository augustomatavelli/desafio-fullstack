import { NextFunction, Response, Request } from "express";
import { Repository } from "typeorm";
import { Contact, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const verifyUserIsOwnerOfContactMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    const userId = req.user.id
    const contactId = req.params.id
    const contact = await contactRepository.findOne({
        where: {
            id: contactId,
        },
        relations: {
            user: true
        }
    })
    if(contact?.user.id !== userId){
        throw new AppError('You are not owner of this contact', 403)
    }
    return next()

}