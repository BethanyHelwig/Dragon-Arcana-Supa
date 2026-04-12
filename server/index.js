import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

import { searchRouter } from './routes/search.js'
// import { charactersRouter } from "./routes/charactersRoute.js"

const app = express()
const PORT = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }))
app.use(cookieParser())

app.use('/api/search', searchRouter)
// app.use('/api/characters', charactersRouter)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    .on('error', (err) => {
        console.error('Failed to start server: ', err)
    })