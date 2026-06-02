import { create } from "zustand"
import supabase from "../../supabase-client.js"
import { useAuth } from "../context/AuthContext.jsx"

export const useApiStore = create((set, get) => ({
    usersSavedCharacters: [],
    isSavedCharactersLoading: false,
    selectedCharacter: null,
    isSelectedCharacterLoading: false,
    isCreateCharacterLoading: false,

    getSavedCharacters: async () => {
        set({ isSavedCharactersLoading: true })
        const { data: { user }, error } = await supabase.auth.getUser()

        try {
            const { data, error } = await supabase
                .from('user_saved_characters')
                .select(`
                    *, 
                    character_class:class_id (full_name),
                    alignment:alignment_id (full_name),
                    species:species (full_name)
                    `)
                .eq('user_id', user.id)

            if (error) {
                throw error
            } else {
                set({ usersSavedCharacters: data })
                console.log(data)
            }     
        }
        catch(err){
            console.log("Error retreiving user's saved characters: ", error)
        }
        finally {
            set({ isSavedCharactersLoading: false })
        }

    },

    getSelectedCharacter: async (id) => {
        set({ isSelectedCharacterLoading: true })
        //const { data: { user }, error } = await supabase.auth.getUser()

        try {
            const { data, error } = await supabase
                .from('user_saved_characters')
                .select(`
                    *, 
                    character_class:class_id (full_name),
                    alignment:alignment_id (full_name),
                    species:species (full_name)
                    `)
                .eq('id', id)

            if (error) {
                throw error
            } else {
                set({ selectedCharacter: data })
                console.log(data)
            }
            
        }
        catch(err){
            console.log("Error retreiving selected character: ", error)
        }
        finally {
            set({ isSelectedCharacterLoading: false })
        }
    },

    createCharacter: async (info, abilityScores) => {
        set({ isCreateCharacterLoading: true })
        const { data: { user }, error } = await supabase.auth.getUser()

        try {
            const { data, error } = await supabase
                .from('user_saved_characters')
                .insert(
                    {
                        user_id: user.id,
                        // ** CLASS SECTION **
                        class_id: info.class,
                        level: info.level,
                        // ** SPECIES SECTION **
                        species: info.species, // FK id
                        // ** BACKGROUND SECTION **
                        background: info.background, // FK id
                        // ** ABILITY SCORES SECTION **
                        strength: abilityScores.strength,
                        dexterity: abilityScores.dexterity,
                        constitution: abilityScores.constitution,
                        intelligence: abilityScores.intelligence,
                        wisdom: abilityScores.wisdom,
                        charisma: abilityScores.charisma,
                        // ** SKILLS SECTION **
                        skill_proficiencies: info.skill_proficiencies, // array
                        // ** SPELLS SECTION **
                        prepared_spells: info.preparedSpells, // array
                        prepared_cantrips: info.preparedCantrips, // array
                        // ** ABOUT SECTION **
                        name: info.name,
                        pronouns: info.pronouns,
                        alignment_id: info.alignment, // FK alignment id
                        faith: info.faith,
                        lifestyle: info.lifestyle,
                        age: info.age,
                        height: info.height,
                        weight: info.weight,
                        eyes: info.eyes,
                        skin: info.skin,
                        hair: info.hair,
                        gender: info.gender,
                        languages: info.languages, // array
                        bonds: info.bonds,
                        flaws: info.flaws,
                        ideals: info.ideals,
                        traits: info.traits,
                        organizations: info.organizations,
                        allies: info.allies,
                        enemies: info.enemies,
                        backstory: info.backstory,
                        other: info.other
                        // armor_class: info.armor_class,
                        // initiative: info.initiative,
                        // speed: info.speed,
                    }
                )
            if (error) throw error

        } catch (error) {
            console.log("Error saving character: ", error)
        } finally {
            set({ isCreateCharacterLoading: false })
        }
    },

    updateCharacter: async (info) => {

        try {
            const { data , error } = await supabase
                .from('user_saved_characters')
                .update({
                        name: info.name,
                        class_id: info.class,
                        // alignment_id: info.alignment, // FK alignment id
                        // armor_class: info.armor_class,
                        // initiative: info.initiative,
                        // speed: info.speed,
                        // strength: info.ability_scores.strength,
                        // dexterity: info.ability_scores.dexterity,
                        // constitution: info.ability_scores.constitution,
                        // intelligence: info.ability_scores.intelligence,
                        // wisdom: info.ability_scores.wisdom,
                        // charisma: info.ability_scores.charisma,
                        // skill_proficiencies: info.skill_proficiencies,
                        // pronouns: info.pronouns,
                        // faith: info.faith,
                        // lifestyle: info.lifestyle,
                        // age: info.age,
                        // height: info.height,
                        // weight: info.weight,
                        // eyes: info.eyes,
                        // skin: info.skin,
                        // hair: info.hair,
                        // gender: info.gender,
                        // species: info.species, // FK species id
                        // level: info.level
                })
                .eq('id', info.id)

            if (error) throw error
            else console.log('Character successfully updated.')

        } catch (error) {
            console.log("Error updating character: ", error)
        }
    },

    deleteCharacter: async (id) => {

        try {
            const { data, error } = await supabase
                .from('user_saved_characters')
                .delete()
                .eq('id', id)

            if (error) throw error
            else console.log('Character successfully deleted.')

        } catch (error) {
            console.log("Error deleting character: ", error)
        }
    }

}))