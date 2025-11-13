import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PUBLISHABLE_KEY)

// gets all ability scores
export async function getAbilityScores(req, res) {
    const { term } = req.query

    try{
        // search for specific ability score
        if (term){
            const { data, error } = await supabase
                .from('ability_score')
                .select(
                    `
                    *,
                    skill(full_name, description)
                    `,
                )
                .ilike('full_name', `%${term}%`)
                .order('full_name')
            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
        // GET all ability scores
        else {
            const { data, error } = await supabase
                .from('ability_score')
                .select(
                    `
                    *,
                    skill(full_name, description)
                    `,
                )
                .order('full_name')
            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch ability scores', details: err.message})
    }

}

export async function getSkills(req, res) {
    const { term } = req.query

    try{
        // search for specific skill
        if (term){
            const { data, error } = await supabase
                .from('skill')
                .select(
                    `
                    *,
                    ability_score(name)
                    `,
                )
                .ilike('full_name', `%${term}%`)
                .order('full_name')
            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
        // GET all skils
        else {
            const { data, error } = await supabase
                .from('skill')
                .select(
                    `
                    *,
                    ability_score(name)
                    `,
                )
                .order('full_name')
            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch skills', details: err.message})
    }

}

export async function getWeapons(req, res) {
    const { term } = req.query

    try{
        // search for specific weapon
        if (term){
            const { data, error } = await supabase
                .from('weapon')
                .select(
                    `
                    *,
                    full_name,
                    weapon_property(
                    property:full_name),
                    weapon_property_junction(
                    range, ammunition_type, versatile_damage),
                    weapon_mastery_property(
                    weapon_mastery:full_name)
                    `,
                )
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
            else {
                console.log(data)
            }
        }
        // GET all weapons
        else {
            const { data, error } = await supabase
                .from('weapon')
                .select(
                    `
                    *,
                    full_name,
                    weapon_property(
                    property:full_name),
                    weapon_property_junction(
                    range, ammunition_type, versatile_damage),
                    weapon_mastery_property(
                    weapon_mastery:full_name)
                    `
                )

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch weapons', details: err.message})
    }
    
}

export async function getWeaponProperties(req, res) {
    const { term } = req.query

    try{
        // search for specific weapon
        if (term){
            const { data, error } = await supabase
                .from('weapon_property')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
        // GET all weapons
        else {
            const { data, error } = await supabase
                .from('weapon_property')
                .select()

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch weapons', details: err.message})
    }
    
}

export async function getMastery(req, res) {
    const { term } = req.query

    try{
        // search for specific mastery
        if (term){
            const { data, error } = await supabase
                .from('weapon_mastery_property')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
        // GET all mastery
        else {
            const { data, error } = await supabase
                .from('weapon_mastery_property')
                .select()

            res.status(200).json(data)
            if (error) {
                console.log(error)
            }
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch weapons', details: err.message})
    }
    
}