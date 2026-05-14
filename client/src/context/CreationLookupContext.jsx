import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import FetchJson from '../components/FetchJson'

const CreationLookupContext = createContext()

export const CreationLookupContextProvider = ({ children }) => {

    const [ classList, setClasses ] = useState([])
    const [ speciesList, setSpecies ] = useState([])
    const [ alignments, setAlignments ] = useState([])
    const [ lifestyles, setLifestyles ] = useState([])
    const [ backgrounds, setBackgrounds ] = useState([])
    const [ abilityScores, setAbilityScores ] = useState([])
    const [ skillList, setSkillList ] = useState([])
    const [ languages, setLanguages ] = useState([])

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

    const contextValues = useMemo(() => ({
        classList, 
        speciesList, 
        alignments, 
        lifestyles, 
        abilityScores,
        backgrounds,
        skillList,
        languages
    }),[classList, 
        speciesList, 
        alignments, 
        lifestyles, 
        abilityScores,
        backgrounds,
        skillList,
        languages
    ])

    return (
        <CreationLookupContext.Provider value={contextValues}>
            {children}
        </CreationLookupContext.Provider>
    )

}

export { CreationLookupContext }