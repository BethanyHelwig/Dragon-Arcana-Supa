import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function Species(){

    const { character, speciesList, updateCharacter } = useContext(CreationContext)

    function handleSubmit(e){
        console.log(e.target.name, e.target.value)
        updateCharacter(e.target.name, parseInt(e.target.value))
    }

    const speciesFormatted = speciesList.map(item => {

        const { full_name, id } = item

        return (
            <div key={full_name} className="selection square">
                <input 
                    type="radio"
                    name="species"
                    id={full_name}
                    value={id}
                    checked={character.species === item.id}
                    onChange={handleSubmit}
                />
                <label htmlFor={full_name}>{full_name}</label>
            </div>
        )
    })

    function speciesInfo() {

        const chosenSpecies = speciesList.filter(element => element.id === character.species)
        const { full_name, type, size, size_description, speed, traits } = chosenSpecies[0]

        const traitElements = traits.map(el => {
        
        if (el.includes('<strong>')){
            const startIndex = el.search('<strong>') + 8
            const endIndex = el.search('</strong>')

            return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
        }
        else {
            return <p>{el}</p>
        }
    })

        return (
            <>
                <h3 className="title-glow">{full_name}</h3>
                <p><strong>Type:</strong> {type}</p>
                <p><strong>Size:</strong> {size.creature_size} ({size_description})</p>
                <p><strong>Speed:</strong> {speed}</p>
                <p><strong>Traits:</strong></p> {traitElements}
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
                        <p className="font-Roboto">Choose a species to see information pertaining to it.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}