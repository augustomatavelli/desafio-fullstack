import { Repository } from "typeorm";
import { TLogin } from "../../interfaces/login.interfaces";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from 'jsonwebtoken';

export const loginService = async (loginData: TLogin): Promise<string> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepository.findOneBy({
        email: loginData.email
    })

    if (!user){
        throw new AppError('Email is wrong', 401)
    }

    const password = await compare(loginData.password, user.password)

    if(!password){
        throw new AppError('Password is wrong', 401)
    }

    const token: string = jwt.sign(
        { admin: user },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN!,
            subject: user?.id
        }
        )
    return token
}