"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const routes_1 = __importDefault(require("./routes"));
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(routes_1.default);
    app.use(errorMiddleware_1.errorMiddleware);
    return app.listen(process.env.PORT);
}).catch((error) => {
    console.log(error);
});
