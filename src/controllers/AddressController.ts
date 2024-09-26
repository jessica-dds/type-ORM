import { Request, Response } from "express"
import { addressRepository } from "../repositories/addressRepository"

export class AddressController {
    async store(req: Request, res: Response) {
        const { zipcode, street, number } = req.body

        const newAddress = addressRepository.create({ zipcode, street, number })
        await addressRepository.save(newAddress)

        return res.status(201).json({ ...newAddress })
    }
}