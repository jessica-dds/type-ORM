"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressRepository = void 0;
const data_source_1 = require("../data-source");
const Adress_1 = require("../entities/Adress");
exports.addressRepository = data_source_1.AppDataSource.getRepository(Adress_1.Address);
