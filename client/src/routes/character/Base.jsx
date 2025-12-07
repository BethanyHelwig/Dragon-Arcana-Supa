import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function Base(){

    const { character, updateCharacter, classList } = useContext(CreationContext)

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
        updateCharacter(e.target.name, e.target.value)
    }

    function classInfo() {

        const chosenClass = classList.filter(element => element.full_name === character.class)
        const { 
            likes, 
            complexity, 
            primary_ability, 
            hit_point_die,
            skill_proficiencies, 
            saving_throw_proficiencies, 
            starting_equipment,
            tool_proficiencies,
            weapon_proficiencies,
            armor_training

        } = chosenClass[0]

        return (
            <>
                <h3 className="title-glow">{character.class}</h3>
                <p><strong>Likes:</strong> {likes}</p>
                <p><strong>Complexity:</strong> {complexity}</p>
                <p><strong>Primary Ability:</strong> {primary_ability}</p>
                <p><strong>Armor Training:</strong> {armor_training}</p>
                <p><strong>Hit Point Die:</strong> {hit_point_die}</p>
                <p><strong>Skill Proficiencies:</strong> {skill_proficiencies}</p>
                <p><strong>Saving Throw Proficiencies:</strong> {saving_throw_proficiencies}</p>
                <p><strong>Starting Equipment:</strong> {starting_equipment}</p>
                <p><strong>Weapon Proficiencies:</strong> {weapon_proficiencies}</p>
                <p><strong>Tool Proficiencies:</strong> {tool_proficiencies ? tool_proficiencies : "n/a"}</p>
            </>
        )
    }

    return (
        <>
            <h2>Class Selection</h2>
            <div className="flex-row">
                <form onSubmit={handleSubmit}>
                    <h3><label htmlFor="class">Choose your class:</label></h3>
                    <fieldset name="class" className="class-grid">
                        {classesFormatted}
                    </fieldset>
                </form>
            <div className="class-info">
                {character.class ? classInfo()
                    : (<>
                        <h3>Class Information</h3>
                        <p>Choose a class to see information pertaining to it.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}