import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { User } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

export const verifyUserExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOneBy({
        id: req.params.id
    })
    if(!findUser){
        throw new AppError('User not found!', 404)
    }
    return next()
}