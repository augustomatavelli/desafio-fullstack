import 'express-async-errors'
import express, { Application } from 'express'
import { userRoutes } from './routes/users.routes'
import { handleErrors } from './errors'
import { loginRoutes } from './routes/login.routes'
import { contactRoutes } from './routes/contacts.routes'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'

const app: Application = express()
app.use(express.json())
var cors = require('cors');
app.use(cors())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
app.use('/contacts', contactRoutes)


app.use(handleErrors)

export default app
