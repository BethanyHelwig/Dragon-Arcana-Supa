import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import { searchRouter } from './routes/search.js'

const app = express()
const PORT = process.env.PORT || 8000
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())

app.use('/api/search', searchRouter)

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    .on('error', (err) => {
        console.error('Failed to start server: ', err)
    })