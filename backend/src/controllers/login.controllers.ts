import { Request, Response } from "express"
import { TLogin } from "../interfaces/login.interfaces"
import { loginService } from "../services/login/login.services"

export const loginController = async (req: Request, res: Response): Promise<Response> => {
    const loginData: TLogin = req.body
    const response = await loginService(loginData)

    return res.json({
        token: response.token,
        id: response.id
    })

}