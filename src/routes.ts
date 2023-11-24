import { Router } from 'express'
import { CreateUser } from './controllers/userCreate'
import { UserValidate } from './middlewares/uniqueCpfEmail'
import { ReadUser } from './controllers/userRead'
import { UserUpdate } from './controllers/userUpdate'
import { UserDelete } from './controllers/userDelete'

const routes = Router()

routes.post('/usuario', new UserValidate().validate, new CreateUser().create)
routes.get('/usuario', new ReadUser().read)
routes.put('/usuario/:id', new UserValidate().validate, new UserUpdate().update)
routes.delete('/usuario/:id', new UserDelete().delete)




export default routes