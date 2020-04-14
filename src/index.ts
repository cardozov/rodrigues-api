// Required External Modules
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { Server } from 'http'

dotenv.config()


// Required Internal Dependencies
import webpackConfig from '../config/webpack-HMR'
import routes from './resources'


// App Variables
if (!process.env.PORT) {
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000

const app = express()


// App Configuration
app.use(helmet())
app.use(cors())
app.use(express.json())

// App Endpoints
routes(app)


// Server Activation
const server: Server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


// Webpack HMR Activation
webpackConfig.exec(server)