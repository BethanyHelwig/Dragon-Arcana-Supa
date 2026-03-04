import { createContext, useContext, useState, useEffect } from 'react'

const CreationContext = createContext()

export const CreationContextProvider = ({ children }) => {

    const [ character, setCharacter ] = useState({skill_proficiencies: []})
    const [ classList, setClasses ] = useState([])
    const [ speciesList, setSpecies ] = useState([])
    const [ alignments, setAlignments ] = useState([])
    const [ lifestyles, setLifestyles ] = useState([])
    const [ backgrounds, setBackgrounds ] = useState([])
    const [ abilityScores, setAbilityScores ] = useState([])
    const [ skillList, setSkillList ] = useState([])
    const [ scoreGenerationMethod, setScoreGenerationMethod ] = useState("Standard Array")
    const [ generatedScores, setGeneratedScores ] = useState([
        {id: 1, score: 15, ability: null},
        {id: 2, score: 14, ability: null},
        {id: 3, score: 13, ability: null},
        {id: 4, score: 12, ability: null},
        {id: 5, score: 10, ability: null},
        {id: 6, score: 8, ability: null},
    ])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/character_class')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setClasses(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/species')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpecies(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/alignment')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setAlignments(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/lifestyle')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setLifestyles(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/ability_score')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAbilityScores(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/background')
            .then(res => res.json())
            .then(data => {
                //console.log(data)
                setBackgrounds(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/skill')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSkillList(data)
            })
    }, [])

    useEffect(()=> {
        resetAbilityScores()
    }, [])

    useEffect(()=> {
        console.log(character)
    }, [character])

    function updateCharacter(key, value) {
        console.log("update character called")
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
                skillList
            }}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }