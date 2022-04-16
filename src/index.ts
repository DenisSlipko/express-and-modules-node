import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'

import { MONGODB_URI, PORT } from './config'
import appRouter from './routes/app'

const app = express()
app.use(express.json())
app.use(appRouter)

const start = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}`)
    
        })
    } catch(e) {
        console.log(e)
    } 
}

start()

