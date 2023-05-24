import { Request, Response } from "express";
import { TContact } from "../interfaces/contacts.interfaces";
import { createContactService } from "../services/contacts/createContact.services";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { listContactsOfUserServices } from "../services/contacts/listContactsOfUser.services";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: req.user.id
    })

    const data: TContact = req.body

    const newContact = await createContactService(user, data)

    return res.status(201).json(newContact)
}

export const listContactsOfUserController = async (req: Request, res: Response): Promise<Response> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({
        id: req.user.id
    })

    const contacts = await listContactsOfUserServices(user!)

    return res.json(contacts)
}

export const listContactController = async(req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    return res.status(204).send()
}