import 'express-async-errors'
import express, { Application } from 'express'
import { userRoutes } from './routes/users.routes'
import { handleErrors } from './errors'
import { loginRoutes } from './routes/login.routes'
import { contactRoutes } from './routes/contacts.routes'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactRoutes)

app.use(handleErrors)

export default app
