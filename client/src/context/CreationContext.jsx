import { createContext, useContext, useState, useEffect } from 'react'

const CreationContext = createContext()

export const CreationContextProvider = ({ children }) => {

    const [ character, setCharacter ] = useState({})
    const [ classList, setClasses ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/character_class')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            })
    }, [])

    useEffect(()=> {
        console.log(character)
    }, [character])

    function updateCharacter(key, value) {
        console.log("update character called")
        setCharacter(prev => ({...prev, [key]: value}))
    }

    return (
        <CreationContext.Provider value={{ character, updateCharacter, classList }}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }