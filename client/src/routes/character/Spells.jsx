import { useContext, useEffect, useState } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { Collapsible } from '../../components/Collapsible'

export default function Spells(){

    const { character, classList } = useContext(CreationContext)

    const [ spellList, setSpellList ] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8080/api/search/spell?c_class=${character.class}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpellList(data)
            })
    }, [])

    return (
        <>
            <h2>Spells {character.class ? " ": ""}</h2>
            {character.class ? 
                spellList.map(spell => {
                    return (
                        <Collapsible label={`Level ${spell.level}: ${spell.full_name}`}>
                            <ul>
                                {spell.description.map(el => {
                                    if (el.includes('<strong>')){
                                        const startIndex = el.search('<strong>') + 8
                                        const endIndex = el.search('</strong>')
                
                                        return <li><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</li>
                                    }
                                    else {
                                        return <li>{el}</li>
                                    }
                                })}
                            </ul>
                        </Collapsible>
                    )
                })
                : <p>Please choose a class in order to display available spells.</p>}
        </>
    )
}