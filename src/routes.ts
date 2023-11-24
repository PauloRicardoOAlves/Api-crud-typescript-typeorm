import { Router } from 'express'
import { CreateUser } from './controllers/userCreate'
import { UserValidate } from './middlewares/uniqueCpfEmail'
import { ReadUser } from './controllers/userRead'
import { UserUpdate } from './controllers/userUpdate'

const routes = Router()

routes.post('/usuario', new UserValidate().validate, new CreateUser().create)
routes.get('/usuario', new ReadUser().read)
routes.put('/usuario/:id', new UserValidate().validate, new UserUpdate().update)




export default routes