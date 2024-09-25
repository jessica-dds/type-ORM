import { Request, Response, Router } from 'express'
import { User } from './entities/User'
import { log } from 'console'
import { AppDataSource } from './data-source'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
    // Active Record 

    //criar um usuário
    // const users = new User()
    // users.name = 'Jéssica 2'
    // users.email = 'jessica2@email.com'
    // users.password = '123abc'
    // users.save()
    //console.log(users);

    //listar usuários
    // const users = await User.find()
    // const users = await User.findOne({ where: { email: 'jessica2@email.com' } })


    //Data Mapper - repository pattern
    const UserRepository = AppDataSource.getRepository(User)

    const users = await UserRepository.find()

    const jessica = await UserRepository.findOne({
        where: {
            email: 'jessica@email.com'
        }
    })

    const newUser = UserRepository.create({
        name: 'Joaquim',
        email: 'joaquim@email.com',
        password: '123abc'
    })

    await UserRepository.save(newUser)

    return res.json()
})

export default routes