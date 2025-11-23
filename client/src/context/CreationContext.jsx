import { createContext, useContext, useState, useEffect } from 'react'

const CreationContext = createContext()

export const CreationContextProvider = ({ children }) => {

    const [ character, setCharacter ] = useState({})

    useEffect(()=> {
        console.log(character)
    }, [character])

    function updateCharacter(key, value) {
        console.log("update character called")
        setCharacter(prev => ({...prev, [key]: value}))
    }

    return (
        <CreationContext.Provider value={{ character, updateCharacter }}>
            {children}
        </CreationContext.Provider>
    )

}

export { CreationContext }