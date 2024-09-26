"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./controllers/UserController");
const userRepository_1 = require("./repositories/userRepository");
const roleRepository_1 = require("./repositories/roleRepository");
const routes = (0, express_1.Router)();
routes.get('/', async (req, res) => {
    //const jessica = await UserRepository.findByName('Jessica')
    //const jessica = await User.findByName('Jéssica')
    const jessica = await userRepository_1.UserRepository.findOne({
        where: { email: 'jessica@email.com' },
        relations: {
            roles: true
        },
    });
    const roles = await roleRepository_1.roleRepository.find({
        relations: {
            users: true
        },
    });
    return res.json(jessica);
});
routes.post('/usuarios', new UserController_1.UserController().store);
exports.default = routes;
