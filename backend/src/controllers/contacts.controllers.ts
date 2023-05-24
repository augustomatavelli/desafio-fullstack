import { Request, Response } from "express";

export const createContactController = async (req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const listContactsOfUserController = async (req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const listContactController = async(req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const updateContactController = async (req: Request, res: Response): Promise<Response> => {
    return res.json()
}

export const deleteContactController = async (req: Request, res: Response): Promise<Response> => {
    return res.status(204).send()
}