import { Router } from "express";
import { createUserController, deleteUserController, listAllUserController, updateUserController } from "../controllers/users.controllers";
import { verifyRequestBodyIsValidMiddleware } from "../middlewares/verifyRequestBodyIsValid.middleware";
import { updateUserSerializer, userSerializer } from "../serializers/users.serializers";
import { verifyEmailExistsMiddleware } from "../middlewares/verifyEmailExists.middleware";
import { verifyTokenIsValidMiddleware } from "../middlewares/verifyTokenIsValid.middleware";
import { verifyUserExistsMiddleware } from "../middlewares/verifyUserExists.middleware";
import { verifyUserIsOwnerMiddleware } from "../middlewares/verifyUserIsOwner.middleware";

export const userRoutes: Router = Router()

userRoutes.post('', verifyRequestBodyIsValidMiddleware(userSerializer), verifyEmailExistsMiddleware, createUserController)
userRoutes.get('', verifyTokenIsValidMiddleware, listAllUserController)
userRoutes.get('/:id', verifyTokenIsValidMiddleware, verifyUserExistsMiddleware, verifyUserIsOwnerMiddleware, updateUserController)
userRoutes.patch('/:id', verifyTokenIsValidMiddleware, verifyUserExistsMiddleware, verifyUserIsOwnerMiddleware, verifyRequestBodyIsValidMiddleware(updateUserSerializer), updateUserController)
userRoutes.delete('/:id', verifyTokenIsValidMiddleware, verifyUserExistsMiddleware, verifyUserIsOwnerMiddleware, deleteUserController)