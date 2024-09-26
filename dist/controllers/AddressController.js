"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressController = void 0;
const addressRepository_1 = require("../repositories/addressRepository");
class AddressController {
    async store(req, res) {
        const { zipcode, street, number } = req.body;
        const newAddress = addressRepository_1.addressRepository.create({ zipcode, street, number });
        await addressRepository_1.addressRepository.save(newAddress);
        return res.status(201).json({ ...newAddress });
    }
}
exports.AddressController = AddressController;
