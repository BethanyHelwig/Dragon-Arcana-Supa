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

    const [character, setCharacter] = useState(defaultCharacter)
    const [ classList, setClasses ] = useState([])
    const [ speciesList, setSpecies ] = useState([])
    const [ alignments, setAlignments ] = useState([])
    const [ lifestyles, setLifestyles ] = useState([])
    const [ backgrounds, setBackgrounds ] = useState([])
    const [ abilityScores, setAbilityScores ] = useState([])
    const [ skillList, setSkillList ] = useState([])
    const [ languages, setLanguages ] = useState([])
    const [ scoreGenerationMethod, setScoreGenerationMethod ] = useState("Standard Array")
    const [ generatedScores, setGeneratedScores ] = useState([
        {id: 1, score: 15, ability: null},
        {id: 2, score: 14, ability: null},
        {id: 3, score: 13, ability: null},
        {id: 4, score: 12, ability: null},
        {id: 5, score: 10, ability: null},
        {id: 6, score: 8, ability: null},
    ])

    // fetch all required data for character creation options
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    classData,
                    speciesData,
                    alignmentData,
                    lifestyleData,
                    abilityData,
                    backgroundData,
                    skillData,
                    languageData
                ] = await Promise.all([
                    FetchJson('/api/search/character_class'),
                    FetchJson('/api/search/species'),
                    FetchJson('/api/search/alignment'),
                    FetchJson('/api/search/lifestyle'),
                    FetchJson('/api/search/ability_score'),
                    FetchJson('/api/search/background'),
                    FetchJson('/api/search/skill'),
                    FetchJson('/api/search/language')
                ])
            
                setClasses(classData)
                setSpecies(speciesData)
                setAlignments(alignmentData)
                setLifestyles(lifestyleData)
                setAbilityScores(abilityData)
                setBackgrounds(backgroundData)
                setSkillList(skillData)
                setLanguages(languageData)
                
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    },[])

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

    // function updateArrayInCharacter(key, value) {
    //     if(character.hasOwnProperty(key)){
    //         var updatedArray = character[key]
    //         if(updatedArray.includes(value)){
    //             updatedArray = updatedArray.filter(item => item !== value)
    //         }
    //         else {
    //             updatedArray.push(value)
    //         }

    //         setCharacter(prev => (
    //             {...prev, [key] : updatedArray}
    //         ))
    //     }
    //     else {
    //         setCharacter(prev => (
    //             {...prev, [key]: [value]}
    //         ))
    //     }
    // }

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
        classList, 
        speciesList, 
        alignments, 
        lifestyles, 
        abilityScores,
        scoreGenerationMethod,
        setScoreGenerationMethod,
        generatedScores,
        setGeneratedScores,
        resetAbilityScores,
        backgrounds,
        skillList,
        languages
    }),[character, 
        classList, 
        speciesList, 
        alignments, 
        lifestyles, 
        abilityScores,
        scoreGenerationMethod,
        generatedScores,
        backgrounds,
        skillList,
        languages,
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