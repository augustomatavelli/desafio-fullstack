import { Router } from "express";
import { createContactController, deleteContactController, listContactController, listContactsOfUserController, updateContactController } from "../controllers/contacts.controllers";
import { verifyTokenIsValidMiddleware } from "../middlewares/verifyTokenIsValid.middleware";
import { verifyRequestBodyIsValidMiddleware } from "../middlewares/verifyRequestBodyIsValid.middleware";
import { contactSerializer, updateContactSerializer } from "../serializers/contact.serializers";
import { verifyEmailExistsMiddleware } from "../middlewares/verifyEmailExists.middleware";
import { verifyContactExistsMiddleware } from "../middlewares/verifyContactExists.middleware";
import { verifyUserIsOwnerOfContactMiddleware } from "../middlewares/verifyUserIsOwnerOfContact.middleware";

export const contactRoutes: Router = Router()

contactRoutes.post('', verifyTokenIsValidMiddleware, verifyRequestBodyIsValidMiddleware(contactSerializer), verifyEmailExistsMiddleware, createContactController)
contactRoutes.get('', verifyTokenIsValidMiddleware, listContactsOfUserController)
contactRoutes.get('/:id', verifyTokenIsValidMiddleware, verifyContactExistsMiddleware, verifyUserIsOwnerOfContactMiddleware, listContactController)
contactRoutes.patch('/:id', verifyTokenIsValidMiddleware, verifyContactExistsMiddleware, verifyUserIsOwnerOfContactMiddleware, verifyRequestBodyIsValidMiddleware(updateContactSerializer), updateContactController)
contactRoutes.delete('/:id', verifyTokenIsValidMiddleware, verifyContactExistsMiddleware, verifyUserIsOwnerOfContactMiddleware,  deleteContactController)