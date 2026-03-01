import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import toast from "react-hot-toast"

export default function Class(){

    const { character, updateCharacter, classList, updateArrayInCharacter } = useContext(CreationContext)

    const classesFormatted = classList.map(item => {

        const { full_name, id } = item

        return (
            <div key={full_name} className="radio-class-selection">
                <input 
                    type="radio"
                    name="class"
                    id={full_name}
                    value={id}
                    checked={character.class === item.id}
                    onChange={handleSubmit}
                />
                <label htmlFor={full_name}>{full_name}</label>
            </div>
        )
    })

    // if a new class is selected, submits that change to character
    // and clears any selected starting equipment chosen from a prior
    // class selection
    function handleSubmit(e){
        updateCharacter(e.target.name, parseInt(e.target.value))
        updateCharacter("starting_equipment", null)
        updateCharacter("skill_proficiencies", [])
        //document.getElementById("starting_equipment").selectedIndex = 0
    }

    // submits the starting equipment or skill proficiencies to character
    function handleStringSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    function handleProficiencySubmit(e, allowance){

        if(character[e.target.name].length >= allowance) {
            if(character[e.target.name].includes(e.target.value)){
                console.log("Allowance met but removing item.")
                updateArrayInCharacter(e.target.name, e.target.value)
            }
            else {
                console.log("No more options left for skill proficiency.")
                toast.error(`Cannot select more than ${allowance} skills.`)
            }
        } else {
            console.log("Submitting skill proficiency update to character.")
            updateArrayInCharacter(e.target.name, e.target.value)
        }

        
    }

    function classInfo() {

        const chosenClass = classList.filter(element => element.id === character.class)
        const { 
            likes, 
            complexity, 
            primary_ability, 
            hit_point_die,
            skill_proficiencies, 
            saving_throw_proficiencies,
            skill_proficiency_allowance,
            starting_equipment,
            tool_proficiencies,
            weapon_proficiencies,
            armor_training,
            full_name
        } = chosenClass[0]

        return (
            <>
                <h3 className="title-glow">{full_name}</h3>
                <p><strong>Likes:</strong> {likes}</p>
                <p><strong>Complexity:</strong> {complexity}</p>
                <p><strong>Primary Ability:</strong> {primary_ability}</p>
                <p><strong>Armor Training:</strong> {armor_training}</p>
                <p><strong>Hit Point Die:</strong> {hit_point_die}</p>
                <p><strong>Skill Proficiencies</strong> <span className="highlighter">(Choose {skill_proficiency_allowance})</span>:</p>

                <div key={full_name} className="sub-selection">
                        {skill_proficiencies.map(el => {
                            return (
                                <div key={el}>
                                    <input 
                                        type="checkbox"
                                        name="skill_proficiencies"
                                        id={el}
                                        value={el}
                                        checked={character.skill_proficiencies.includes(el)}
                                        onChange={(e) => handleProficiencySubmit(e, skill_proficiency_allowance)}
                                    />
                                    <label htmlFor={el}>{el}</label>
                                </div>
                            )
                        })}
                </div>
                <p><strong>Saving Throw Proficiencies:</strong> {saving_throw_proficiencies}</p>
                <p><strong>Starting Equipment</strong> <span className="highlighter">(Choose 1)</span>:</p>
                <fieldset id="starting_equipment" className="flex-column">  
                    {starting_equipment.map(el => {
                        return (
                            <div key={el} className="radio-equipment-selection">
                                <input 
                                    type="radio"
                                    name="starting_equipment"
                                    id={el}
                                    value={el}
                                    checked={character.starting_equipment === el}
                                    onChange={handleStringSubmit}
                                />
                                <label htmlFor={el}>{el}</label>
                            </div>
                        )
                            })}
                </fieldset>

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
                        <p>Choose a class to see its details.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}