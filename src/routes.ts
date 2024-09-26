import { Request, Response, Router } from 'express'
import { UserController } from './controllers/UserController'
import { UserRepository } from './repositories/userRepository'
import { User } from './entities/User'
import { roleRepository } from './repositories/roleRepository'

const routes = Router()

routes.get('/', async (req: Request, res: Response) => {

    //const jessica = await UserRepository.findByName('Jessica')
    //const jessica = await User.findByName('Jéssica')
    const jessica = await UserRepository.findOne({
        where: { email: 'jessica@email.com' },
        relations: {
            roles: true
        },
    })

    const roles = await roleRepository.find({
        relations: {
            users: true
        },
    })

    return res.json(jessica)
})

routes.post('/usuarios', new UserController().store)

export default routes