import supabase from '../supabase-client.js'

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

            if (error) {
                throw error
            }
            res.status(200).json(data)
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }

}

export async function getSkills(req, res) {
    const { term } = req.query

    try{
        // search for specific
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
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
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all weapons
        else {
            const { data, error } = await supabase
                .from('weapon_property')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
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

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all mastery
        else {
            const { data, error } = await supabase
                .from('weapon_mastery_property')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getClass(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('character_class')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('character_class')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getSpell(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('spell')
                .select(
                    `
                    *,
                    school_of_magic(school:full_name),
                    character_class(class:full_name)
                    `
                )
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('spell')
                .select(
                    `
                    *,
                    school_of_magic(school:full_name),
                    character_class(class:full_name)
                    `
                )
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getSchoolOfMagic(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('school_of_magic')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('school_of_magic')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getAlignment(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('alignment')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('alignment')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getLanguage(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('language')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('language')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getSpecies(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('species')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('species')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getLifestyle(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('lifestyle')
                .select()
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('lifestyle')
                .select()
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}

export async function getBackground(req, res) {
    const { term } = req.query

    try{
        // search for specific instance
        if (term){
            const { data, error } = await supabase
                .from('background')
                .select(
                    `
                    *,
                    feat_id(feat:full_name)
                    `
                )
                .ilike('full_name', `%${term}%`)
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
        // GET all instances
        else {
            const { data, error } = await supabase
                .from('background')
                .select(
                    `*,
                    feat(feat:full_name)
                    `
                )
                .order('full_name')

            if (error) {
                throw error
            }
            res.status(200).json(data)
        }
    }
    catch(err){
        res.status(500).json({error: 'Failed to fetch: ', details: err.message})
    }   
}