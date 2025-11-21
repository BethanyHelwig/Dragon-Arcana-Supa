import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import { searchRouter } from './routes/search.js'

const app = express()
const PORT = process.env.PORT || 8000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())

app.use('/api/search', searchRouter)

app.get('/api/characters/retrieve_saved', retrieveSavedCharacters)

async function retrieveSavedCharacters(req, res){
    const { } = req

    try {
        const { data, error } = await supabase
            .from('skill')
            .select(
                `
                *,
                ability_score(name)
                `,
            )
            .order('full_name')

        if (error) {
            throw error
        }
        res.status(200).json(data)
        
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }
}



app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    .on('error', (err) => {
        console.error('Failed to start server: ', err)
    })