import express from 'express'
import {} from 'dotenv/config'
import cors from 'cors'
import { createClient } from "@supabase/supabase-js"
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 8000
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())

app.get('/api/ability_score/:search', async (req, res) => {
    console.log("Request in at /api/ability_score/:search")
    console.log(req.params)
    try {
        console.log(req.params)
        // res.json(await getData())
    }
    catch {
        res.send(err)
    }
})

app.get('/api/ability_score', async (req, res) => {
    console.log("Request in at /api/ability_score")
    console.log(req.params.type)
    try {
        res.json(await getData())
    }
    catch {
        res.send(err)
    }
})

// test function to get data from supabase DB
async function getData(){
    // const { data, error } = await supabase.from('skill').select()

    const { data, error } = await supabase
        .from('ability_score')
        .select(
            `
            *,
            skill(name, description)
            `,
        )
        .order('full_name')
    return data
}

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    .on('error', (err) => {
        console.error('Failed to start server: ', err)
    })