import { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react'
import FetchJson from '../components/FetchJson'
import { CreationContext } from './CreationContext'
import { CreationLookupContext } from './CreationLookupContext'

const SpellLookupContext = createContext()

export const SpellLookupContextProvider = ({ children }) => { 

    const { classList } = useContext(CreationLookupContext)
    const { character } = useContext(CreationContext)

    const [ spellList, setSpellList ] = useState([])
    const [ featureList, setFeatureList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    const className = useMemo(() => {
        const chosenClass = classList.find(
            element => element.id === character.class
        )
        
        return chosenClass?.full_name || ""
    }, [character.class])

    useEffect(()=> {
        if (!character?.class || !className) return
        
        const fetchData = async () => {
            try {
                setIsLoading(true)

                // fetch both requests at the same time
                const [spellData, featureData] = await Promise.all([
                    FetchJson(`/api/search/spell?c_class=${character.class}`),
                    FetchJson(`/api/search/features/${className.toLowerCase()}`)
                ])

                setSpellList(spellData)
                setFeatureList(featureData)

            } catch (err) {
                console.log("Error retreiving data: ", err)
                setError(err.message) 
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [character.class])

    const contextValues = useMemo(() => ({
        spellList,
        featureList,
        className,
        isLoading   
    }),[spellList,
        featureList,
        className,
        isLoading 
    ])

    return (
        <SpellLookupContext.Provider value={contextValues}>
            {children}
        </SpellLookupContext.Provider>
    )

}

export { SpellLookupContext }