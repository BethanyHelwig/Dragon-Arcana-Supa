import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import FetchJson from '../components/FetchJson'

const CreationContext = createContext()

const defaultCharacter = {
    level: 1,
    skill_proficiencies: [],
    languages: [],
}

export const CreationContextProvider = ({ children }) => {

    // all character attributes (except ability scores) are stored here
    const [ character, setCharacter ] = useState(defaultCharacter)
    // the method by which ability scores are generated and assigned
    const [ scoreGenerationMethod, setScoreGenerationMethod ] = useState("Standard Array")
    // array assigning ability scores
    // default is set using the Standard Array
    const [ generatedScores, setGeneratedScores ] = useState([
        {id: 1, score: 15, ability: null},
        {id: 2, score: 14, ability: null},
        {id: 3, score: 13, ability: null},
        {id: 4, score: 12, ability: null},
        {id: 5, score: 10, ability: null},
        {id: 6, score: 8, ability: null},
    ])

    // -- DEBUGGER: log to console whenever the character state is updated
    useEffect(()=> {
        console.log(character)
    }, [character])

    // -- DEBUGGER: log to console whenever the ability score array or method is updated
    useEffect(()=> {
        console.log(generatedScores)
        console.log("Score method: ", scoreGenerationMethod)
    }, [generatedScores, scoreGenerationMethod])

    // updates the character state
    const updateCharacter = useCallback((key, value) => {
        console.log("update character called")
        setCharacter(prev => ({...prev, [key]: value}))
    }, [])

    // updates an array in the character state
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

    const contextValues = useMemo(() => ({
        character, 
        updateCharacter,
        updateArrayInCharacter,
        scoreGenerationMethod,
        setScoreGenerationMethod,
        generatedScores,
        setGeneratedScores,
    }),[character, 
        scoreGenerationMethod,
        generatedScores,
        updateCharacter,
        updateArrayInCharacter,
    ])

    return (
        <CreationContext.Provider value={contextValues}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }