import { AppDataSource } from "../data-source";
import { User } from "../entities/User";


// usando o Data Mapper para métodos personalizados
export const UserRepository = AppDataSource.getRepository(User).extend({
    async findByName(name: string) {
        return this.find({ where: { name } })
    }
})