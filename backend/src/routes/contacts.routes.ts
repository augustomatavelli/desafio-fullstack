import { Router } from "express";
import { createContactController, deleteContactController, listContactController, listContactsOfUserController, updateContactController } from "../controllers/contacts.controllers";
import { verifyTokenIsValidMiddleware } from "../middlewares/verifyTokenIsValid.middleware";

export const contactRoutes: Router = Router()

contactRoutes.post('', verifyTokenIsValidMiddleware, createContactController)
contactRoutes.get('', verifyTokenIsValidMiddleware, listContactsOfUserController)
contactRoutes.get('/:id', verifyTokenIsValidMiddleware, listContactController)
contactRoutes.patch('/:id', verifyTokenIsValidMiddleware, updateContactController)
contactRoutes.delete('/:id', verifyTokenIsValidMiddleware, deleteContactController)