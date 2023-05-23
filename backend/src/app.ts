import express, { Application } from 'express'
import 'express-async-errors'
import { userRoutes } from './routes/users.routes'
import { handleErrors } from './errors'

const app: Application = express()
app.use(express.json())

app.use('/users', userRoutes)

app.use(handleErrors)

export default app
