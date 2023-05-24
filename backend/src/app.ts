import express, { Application } from 'express'
import 'express-async-errors'
import { userRoutes } from './routes/users.routes'
import { handleErrors } from './errors'
import { loginRoutes } from './routes/login.routes'
import { contactRoutes } from './routes/contacts.routes'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/contact', contactRoutes)

app.use(handleErrors)

export default app
