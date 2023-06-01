import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Contact, User } from "../entities";
import { AppError } from "../errors";

export const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)
    const contactRepository: Repository<Contact> = AppDataSource.getRepository(Contact)

    if(req.body.email){
        const findUserEmail = await userRepository.findOne({
            where: {
                email: req.body.email
            }
        })
        if(findUserEmail){
            throw new AppError('Email already exists!', 409)
        }
        const findContactEmail = await contactRepository.findOne({
            where: {
                email: req.body.email
            }
        })
        if(findContactEmail){
            throw new AppError('Email already exists!', 409)
        }
        return next()
    }
    return next()
}