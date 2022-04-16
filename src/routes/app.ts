import express from 'express'

import { TodoRouter } from './todo'

const appRouter = express.Router() 

appRouter.use('/api', TodoRouter)

export default appRouter