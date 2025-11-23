import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function Base(){

    const { character, updateCharacter } = useContext(CreationContext)
    const [ classList, setClasses ] = useState([])

    /// TODO: Refactor to get from API -> database
    const classes = ["Cleric", "Druid", "Fighter", "Barbarian", "Rogue", "Monk"]

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/character_class')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            })
    }, [])

    const classesFormatted = classList.map(item => {

        const { full_name } = item

        return (
            <div key={full_name} className="radio-class-selection">
                <input 
                    type="radio"
                    name="class"
                    id={full_name}
                    value={full_name}
                    checked={character.class === item.full_name}
                    onChange={handleSubmit}
                />
                <label htmlFor={full_name}>{full_name}</label>
            </div>
        )
    })

    function handleSubmit(e){
        e.preventDefault()
        updateCharacter(e.target.name, e.target.value)
    }

    return (
        <>
            <h2>Base info</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleSubmit} value={character.name}></input>
                <h3><label htmlFor="class">Choose your class:</label></h3>
                <fieldset name="class" className="class-grid">
                    {classesFormatted}
                </fieldset>
            </form>
        </>
    )
}