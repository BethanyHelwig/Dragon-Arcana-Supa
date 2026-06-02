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
        if (character.class) {
            setClassComplete(true)
            console.log("Class is complete.")
        }
        if (character.species){
            setSpeciesComplete(true)
            console.log("Species is complete.")
        }
        if (character.background){
            setBackgroundComplete(true)
            console.log("Background is complete.")
        }
    },[character])

    useEffect(() =>{
        if(scoreGenerationMethod !== "Point Cost"){

        }
        
    },[generatedScores, scoreGenerationMethod])

    return (
        <StatusContext.Provider 
            value={{
                classComplete,
                speciesComplete,
                abilityScoresComplete,
                skillsComplete,
                spellsComplete,
                backgroundComplete,
                aboutComplete
            }}>
            {children}
        </StatusContext.Provider>
    )
}

export { StatusContext }