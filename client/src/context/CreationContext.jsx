import { createContext, useContext, useState, useEffect } from 'react'
import FetchJson from '../components/FetchJson'

const CreationContext = createContext()

export const CreationContextProvider = ({ children }) => {

    const [ character, setCharacter ] = useState({skill_proficiencies: [], level: 1, languages: []})
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
    })

    useEffect(()=> {
        resetAbilityScores()
    }, [])

    // useEffect(()=> {
    //     console.log(character)
    // }, [character])

    function updateCharacter(key, value) {
        // console.log("update character called")
        setCharacter(prev => ({...prev, [key]: value}))
    }

    function updateArrayInCharacter(key, value) {
        if(character.hasOwnProperty(key)){
            var updatedArray = character[key]
            if(updatedArray.includes(value)){
                updatedArray = updatedArray.filter(item => item !== value)
            }
            else {
                updatedArray.push(value)
            }

            setCharacter(prev => (
                {...prev, [key] : updatedArray}
            ))
        }
        else {
            setCharacter(prev => (
                {...prev, [key]: [value]}
            ))
        }
    }

    function resetAbilityScores(){
        updateCharacter("charisma", 8)
        updateCharacter("constitution", 8)
        updateCharacter("dexterity", 8)
        updateCharacter("intelligence", 8)
        updateCharacter("strength", 8)
        updateCharacter("wisdom", 8)
    }

    return (
        <CreationContext.Provider 
            value={{ 
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
            }}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }