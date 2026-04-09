import { useContext, useEffect, useState } from 'react'
import { CreationContext } from '../../context/CreationContext'
import toast from "react-hot-toast"
import { Collapsible } from '../../components/Collapsible'

export default function Class(){

    const { character, updateCharacter, classList } = useContext(CreationContext)

    const classesFormatted = classList.map(item => {
        const { full_name, id } = item

        return (
            <div key={full_name} className="selection square">
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

    // Handles update to level with a cap between 1 and 30
    function handleLevelSubmit(e){
        const newValue = parseInt(e.target.value) + character.level;
        if (newValue >= 1 && newValue <= 30){
            updateCharacter("level", parseInt(e.target.value) + character.level)
        }
    }

    // submits the starting equipment or skill proficiencies to character
    function handleStringSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    // Generates additional information for the chosen class in the right pane
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
            full_name,
            class_features, // array
            subclass // array
        } = chosenClass[0]


        // sorts the various class features into their respective subclasses
        // then returns them formatted
        function subclassesSorted() {
            const sorted = [{id: "base", title: "Base", values: []}]
            sorted.push(...subclass.map(el => ({...el, values: []})))
            

            class_features.sort((a,b) => a.level - b.level).map(feature=>{
                console.log("checking for subclass match")
                if(sorted.find(el => el.id === feature.subclass_id)){
                    const index = sorted.findIndex(el => el.id === feature.subclass_id)
                    console.log(index)
                    sorted[index].values.push(feature)
                } else {
                    sorted[0].values.push(feature)
                }
            })

            return (
                sorted.map(subclass => {
                    return (
                        <>
                            <p><strong>{subclass.title !== "Base" ? `${subclass.title} Subclass` : "Class"} Features</strong></p>
                            {subclass.values.map(feature => {
                                return (
                                    <Collapsible label={`Level ${feature.level}: ${feature.title}`}>
                                    <ul>
                                        {feature.description.map( el => {
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
                            })}
                        </>
                    )
                })
            )
        }

        return (
            <>
                <h3 className="title-glow">{full_name}</h3>
                <p><strong>Likes:</strong> {likes}</p>
                <p><strong>Complexity:</strong> {complexity}</p>
                <p><strong>Primary Ability:</strong> {primary_ability}</p>
                <p><strong>Armor Training:</strong> {armor_training}</p>
                <p><strong>Hit Point Die:</strong> {hit_point_die}</p>
                <p><strong>Skill Proficiencies (Choose {skill_proficiency_allowance}): </strong>
                    {skill_proficiencies.map(el => el).join(", ")}
                </p>

                <p><strong>Saving Throw Proficiencies:</strong> {saving_throw_proficiencies}</p>
                <p><strong>Starting Equipment</strong> <span className="highlighter">(Choose 1)</span>:</p>
                <fieldset id="starting_equipment" className="flex-column">  
                    {starting_equipment.map(el => {
                        return (
                            <div key={el} className="selection font-Roboto">
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
                {/* <h3 className="emphasis"><strong>Class Features</strong></h3> */}
                <div className="divider"></div>
                {subclassesSorted()}
            </>
        )
    }

    return (
        <>
            <h2>Class Selection</h2>
            <div className="flex-row">
                <div>
                    <h3>Choose your level:</h3>
                    <div className="level-input">
                        <button value={-1} onClick={handleLevelSubmit}>-</button>
                        <span>{character.level}</span>
                        <button value={1} onClick={handleLevelSubmit}>+</button>
                    </div>
                    <h3><label htmlFor="class">Choose your class:</label></h3>
                    <div name="class" className="class-grid">
                        {classesFormatted}
                    </div>
                </div>
            <div className="class-info">
                {character.class ? classInfo()
                    : (<>
                        <h3>Class Information</h3>
                        <p className="font-Roboto">Choose a class to see its details.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}