import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function Species(){

    const { character, speciesList, updateCharacter } = useContext(CreationContext)

    function handleSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    const speciesFormatted = speciesList.map(item => {

        const { full_name } = item

        return (
            <div key={full_name} className="radio-class-selection">
                <input 
                    type="radio"
                    name="species"
                    id={full_name}
                    value={full_name}
                    checked={character.species === item.full_name}
                    onChange={handleSubmit}
                />
                <label htmlFor={full_name}>{full_name}</label>
            </div>
        )
    })

    function speciesInfo() {

        const chosenSpecies = speciesList.filter(element => element.full_name === character.species)
        const { full_name, type, size, size_description, speed, traits } = chosenSpecies[0]

        const traitElements = traits.map(el => {
        
        if (el.includes('<strong>')){
            const startIndex = el.search('<strong>') + 8
            const endIndex = el.search('</strong>')
            console.log(`Start index is: ${startIndex}`)
            console.log(el.substring(startIndex, endIndex))

            return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
        }
        else {
            return <p>{el}</p>
        }
    })

        return (
            <>
                <h3 className="title-glow">{character.species}</h3>
                <p><strong>Type:</strong> {type}</p>
                <p><strong>Size:</strong> {size} ({size_description})</p>
                <p><strong>Speed:</strong> {speed}</p>
                <p><strong>Traits:</strong> {traitElements}</p>
            </>
        )
    }

    return (
        <>
            <h2>Species Selection</h2>
            <div className="flex-row">
                <form>
                    <h3><label htmlFor="species">Choose your species:</label></h3>
                    <fieldset name="species" className="class-grid">
                        {speciesFormatted}
                    </fieldset>
                </form>
            <div className="class-info">
                {character.species ? speciesInfo()
                    : (<>
                        <h3>Species Information</h3>
                        <p>Choose a species to see information pertaining to it.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}