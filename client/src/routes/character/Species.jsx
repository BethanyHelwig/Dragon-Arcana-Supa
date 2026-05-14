import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { CreationLookupContext } from '../../context/CreationLookupContext'

export default function Species(){

    const { character, updateCharacter } = useContext(CreationContext)
    const { speciesList } = useContext(CreationLookupContext)

    // Submits species selection to character in Creation Context
    function handleSubmit(e){
        console.log(e.target.name, e.target.value)
        updateCharacter(e.target.name, parseInt(e.target.value))
    }

    // Displays each selectable species
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

    // Generates additional information of the chosen species in the right pane 
    function speciesInfo() {

        const chosenSpecies = speciesList.filter(element => element.id === character.species)
        const { full_name, type, size, size_description, speed, traits, species_table } = chosenSpecies[0]

        const traitElements = traits.map(trait => {
        
            if (trait.includes('<strong>')){
                const startIndex = trait.search('<strong>') + 8
                const endIndex = trait.search('</strong>')
                
                return <p><strong><i>{trait.substring(startIndex, endIndex)}</i></strong>{trait.substring(endIndex + 9)}</p>
            }
            if (trait.includes('<table>')){
                const index = trait[7]
                const table = species_table.find(table => table.order_number === Number(index))
                const rows = table.rows.map(row => {
                    const rowArray = row.split("|")
                    rowArray.map(item => { return (<tr>{item}</tr>)})
                })
                return (<>
                    <h4 className="table__title">{table.title}</h4>
                    <table className="table">
                        <thead>
                            <tr>{table.headers.map(el => <th>{el}</th>)}</tr>
                        </thead>
                        <tbody>
                            {table.rows.map(row => {
                                const rowArray = row.split("|")
                                return (
                                    <tr>{rowArray.map(item => { return (<td>{item}</td>)})}</tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>)
            }
            else {
                return <p>{trait}</p>
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