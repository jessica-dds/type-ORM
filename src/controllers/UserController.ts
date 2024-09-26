import { Request, Response } from "express"
import { UserRepository } from "../repositories/userRepository"
import { Entity } from "typeorm"

export class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const newUser = UserRepository.create({ name, email, password })
        await UserRepository.save(newUser)

        return res.status(201).json({ ...newUser })
    }
}