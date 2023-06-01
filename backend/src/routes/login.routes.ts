import { Router } from "express";
import { loginController } from "../controllers/login.controllers";
import { verifyRequestBodyIsValidMiddleware } from "../middlewares/verifyRequestBodyIsValid.middleware";
import { loginSerializer } from "../serializers/login.serializers";

export const loginRoutes: Router = Router()

loginRoutes.post('', verifyRequestBodyIsValidMiddleware(loginSerializer), loginController)