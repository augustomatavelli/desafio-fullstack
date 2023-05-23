import { Router } from "express";
import { createUserController, deleteUserController, listAllUserController, updateUserController } from "../controllers/users.controllers";

export const userRoutes: Router = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listAllUserController)
userRoutes.patch('/:id', updateUserController)
userRoutes.delete('/:id', deleteUserController)