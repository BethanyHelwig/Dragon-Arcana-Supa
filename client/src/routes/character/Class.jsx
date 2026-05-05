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
                    // console.log(index)
                    sorted[index].values.push(feature)
                } else {
                    sorted[0].values.push(feature)
                }
            })

            console.log("Sorted", sorted)
            return (
                sorted.map(subclass => {
                    return (<>
                        <p><strong>{subclass.title !== "Base" ? `${subclass.title} Subclass` : "Class"} Features</strong></p>
                        {subclass.values.map(feature => {
                            return (
                                <Collapsible label={`Level ${feature.level}: ${feature.title}`}>
                                    <ul className="collapsible__list">
                                        {feature.description.map( el => {
                                            if (el.includes('<strong>')){
                                                const startIndex = el.search('<strong>') + 8
                                                const endIndex = el.search('</strong>')
                                                
                                                return <li className="collapsible__list_item"><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</li>
                                            }
                                            if (el.includes('<table>')){
                                                const index = el[7]
                                                // console.log(index)
                                                const table = feature.class_features_table.find(table => table.order_number === Number(index))
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
                                                return <li className="collapsible__list_item">{el}</li>
                                            }
                                        })}
                                    </ul>
                                </Collapsible>
                            )
                        })}
                    </>)
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
                
                <div className="divider"></div>
                {character.class === 7 && <div className="compendium-content-emphasis">
                    <h3 style={{margin: 0}}>Breaking Your Oath</h3>
                    <ul className="collapsible__list">
                        <li className="collapsible__list_item">A Paladin tries to hold to the highest standards of
                            conduct, but even the most dedicated are fallible.
                            Sometimes a Paladin transgresses their oath.</li>
                        <li className="collapsible__list_item">A Paladin who has broken a vow typically seeks
                            absolution, spending an all-night vigil as a sign of penitence
                            or undertaking a fast. After a rite of forgiveness,
                            the Paladin starts fresh.</li>
                        <li className="collapsible__list_item">If your Paladin unrepentantly violates their oath,
                            talk to your GM. Your Paladin should probably take a
                            more appropriate subclass or even abandon the class
                            and adopt another one.</li>
                    </ul>
                </div>}
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