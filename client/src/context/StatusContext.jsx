import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import FetchJson from '../components/FetchJson'
import { CreationContext } from './CreationContext'

const StatusContext = createContext()

export const StatusContextProvider = ({children }) => {

    const { character, generatedScores, scoreGenerationMethod } = useContext(CreationContext)

    const [ classComplete, setClassComplete ] = useState(false)
    const [ speciesComplete, setSpeciesComplete ] = useState(false)
    const [ abilityScoresComplete, setAbilityScoresComplete ] = useState(false)
    const [ skillsComplete, setSkillsComplete ] = useState(false)
    const [ spellsComplete, setSpellsComplete ] = useState(false)
    const [ backgroundComplete, setBackgroundComplete ] = useState(false)
    const [ aboutComplete, setAboutComplete ] = useState(false)

    useEffect(() =>{
        if (character.class && character.starting_equipment) {
            setClassComplete(true)
            //console.log("Class is complete.")
        }
        if (character.species){
            setSpeciesComplete(true)
            //console.log("Species is complete.")
        }
        if (character.background){
            setBackgroundComplete(true)
            //console.log("Background is complete.")
        }
        if (character.name){
            setAboutComplete(true)
        }
    },[character])

    useEffect(() =>{
        if(scoreGenerationMethod !== "Point Cost"){
            const isComplete = generatedScores.some(score => score.ability === null)
            console.log("Is ability scores section complete?", !isComplete)
            setAbilityScoresComplete(!isComplete)
        }
        // Point cost is handled within the routes/character/AbilityScores
    },[generatedScores, scoreGenerationMethod])

    // skills completion handled in routes/character/Skills
    // spells completion handled in routes/character/Spells

    return (
        <StatusContext.Provider 
            value={{
                classComplete,
                speciesComplete,
                abilityScoresComplete,
                skillsComplete,
                spellsComplete,
                backgroundComplete,
                aboutComplete,
                setAbilityScoresComplete,
                setSkillsComplete,
                setSpellsComplete
            }}>
            {children}
        </StatusContext.Provider>
    )
}

export { StatusContext }