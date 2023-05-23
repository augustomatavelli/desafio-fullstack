import { Request, Response } from "express";
import { createUserService } from "../services/users/createUser.services";
import { TUpdadeUser, TUser } from "../interfaces/users.interfaces";
import { listAllUserService } from "../services/users/listAllUsers.services";
import { updateUserService } from "../services/users/updateUser.services";
import { deleteUserService } from "../services/users/deleteUser.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const data: TUser = req.body

    const newUser = await createUserService(data)

    return res.status(201).json(newUser)
}

export const listAllUserController = async (req: Request, res: Response): Promise<Response> => {
    const users = await listAllUserService()

    return res.json(users)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const userId = req.params.id
    const updateUserData: TUpdadeUser = req.body

    const updateUser = await updateUserService(userId, updateUserData)

    return res.json(updateUser)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const userId = req.params.id

    await deleteUserService(userId)

    return res.status(204).send()
}