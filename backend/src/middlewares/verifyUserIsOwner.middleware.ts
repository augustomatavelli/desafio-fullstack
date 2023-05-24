import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const verifyUserIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userId = req.user.id
    const userParamId = req.params.id

    if (userId !== userParamId){
        throw new AppError('You do not have permission!', 403)
    }
    return next()
}