import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const verifyRequestBodyIsValidMiddleware = (serializer: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validateRequestBody = serializer.parse(req.body)
    req.body = validateRequestBody

    return next()
}