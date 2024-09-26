"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const userRepository_1 = require("../repositories/userRepository");
class UserController {
    async store(req, res) {
        const { name, email, password } = req.body;
        const newUser = userRepository_1.UserRepository.create({ name, email, password });
        await userRepository_1.UserRepository.save(newUser);
        return res.status(201).json({ ...newUser });
    }
}
exports.UserController = UserController;
