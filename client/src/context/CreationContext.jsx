import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import FetchJson from '../components/FetchJson'

const CreationContext = createContext()

const defaultCharacter = {
    level: 1,
    skill_proficiencies: [],
    languages: [],
    charisma: 8,
    constitution: 8,
    dexterity: 8,
    intelligence: 8,
    strength: 8,
    wisdom: 8
}

export const CreationContextProvider = ({ children }) => {

    const [ character, setCharacter ] = useState(defaultCharacter)
    const [ scoreGenerationMethod, setScoreGenerationMethod ] = useState("Standard Array")
    const [ generatedScores, setGeneratedScores ] = useState([
        {id: 1, score: 15, ability: null},
        {id: 2, score: 14, ability: null},
        {id: 3, score: 13, ability: null},
        {id: 4, score: 12, ability: null},
        {id: 5, score: 10, ability: null},
        {id: 6, score: 8, ability: null},
    ])

    useEffect(()=> {
        console.log(character)
    }, [character])

    const updateCharacter = useCallback((key, value) => {
        console.log("update character called")
        setCharacter(prev => ({...prev, [key]: value}))
    }, [])

    // function updateCharacter(key, value) {
    //     // console.log("update character called")
    //     setCharacter(prev => ({...prev, [key]: value}))
    // }

    const updateArrayInCharacter = useCallback((key, value) => {
        setCharacter(prev => {
            const currentArray = prev[key] || []

            const updatedArray = currentArray.includes(value)
                ? currentArray.filter(item => item !== value)
                : [...currentArray, value]

            return {
                ...prev,
                [key]: updatedArray
            }
        })
    }, [])

    const resetAbilityScores = useCallback(() => {
        setCharacter(prev => ({
            ...prev,
            charisma: 8,
            constitution: 8,
            dexterity: 8,
            intelligence: 8,
            strength: 8,
            wisdom: 8
        }))
    }, [])

    const contextValues = useMemo(() => ({
        character, 
        updateCharacter,
        updateArrayInCharacter,
        scoreGenerationMethod,
        setScoreGenerationMethod,
        generatedScores,
        setGeneratedScores,
        resetAbilityScores,
    }),[character, 
        scoreGenerationMethod,
        generatedScores,
        updateCharacter,
        updateArrayInCharacter,
        resetAbilityScores
    ])

    return (
        <CreationContext.Provider value={contextValues}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }