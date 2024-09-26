import { AppDataSource } from "../data-source";
import { Address } from "../entities/Adress";

export const addressRepository = AppDataSource.getRepository(Address)