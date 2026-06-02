import { useContext, useEffect, useState } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { CreationLookupContext } from '../../context/CreationLookupContext'
import { StatusContext } from '../../context/StatusContext'
import { Collapsible } from '../../components/Collapsible'
import toast from "react-hot-toast"

export default function Class(){

    const { character, updateCharacter } = useContext(CreationContext)
    const { classList } = useContext(CreationLookupContext)
    const { classComplete, updateClassComplete } = useContext(StatusContext)

    // special sorcerer metamagic options
    const [ metamagic, setMetamagic ] = useState([])

    // special warlock eldritch invocation options
    const [ eldritchInvocations, setEldritchInvocations ] = useState([])

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

    // if sorcerer class is selected, get the metamagic options that is class specific info
    useEffect(() => {
        if (character.class == 10) {
            fetch('http://127.0.0.1:8080/api/search/metamagic_options')
                .then(res => res.json())
                .then(data => {
                    setMetamagic(data)
                })
            console.log("Metamagic fetched")
        }
    },[character.class])

    // if warlock class is selected, get the eldritch invocation options that is class specific info
    useEffect(() => {
        if (character.class == 11) {
            fetch('http://127.0.0.1:8080/api/search/eldritch_invocation_options')
                .then(res => res.json())
                .then(data => {
                    setEldritchInvocations(data)
                })
            console.log("Eldritch invocations fetched")
        }
    },[character.class])

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

        // special information for sorcerer class; list of metamagic options
        function metamagicOptions(){
            return (<>
                <h3>Metamagic Options</h3>
                {metamagic?.map(option => {
                    return (
                        <Collapsible label={option.title}>
                            <ul className="collapsible__list">
                                {option.description?.map(el => {
                                        return (<li className="collapsible__list_item">{el}</li>)
                                    }  
                                )}
                            </ul>
                        </Collapsible>
                    )
                })}
            </>)
        }

        // special information for warlock class; list of eldritch invocation options
        function eldritchInvocationOptions(){
            return (<>
                <h3>Eldritch Invocation Options</h3>
                {eldritchInvocations?.map(option => {
                    return (
                        <Collapsible label={option.title}>
                            <ul className="collapsible__list">
                                {option.description?.map(el => {
                                        if (el.includes('<strong>')){
                                            const startIndex = el.search('<strong>') + 8
                                            const endIndex = el.search('</strong>')
                                                
                                            return <li className="collapsible__list_item"><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</li>
                                        }
                                        else {
                                            return <li className="collapsible__list_item">{el}</li>
                                        }
                                    }  
                                )}
                            </ul>
                        </Collapsible>
                    )
                })}
            </>)
        }

        // sorts the various class features into their respective subclasses
        // then returns them formatted
        function subclassesSorted() {
            const sorted = [{id: "base", title: "Base", values: []}]
            sorted.push(...subclass.map(el => ({...el, values: []})))
            
            class_features.sort((a,b) => a.level - b.level).map(feature=>{
                // console.log("checking for subclass match")
                if(sorted.find(el => el.id === feature.subclass_id)){
                    const index = sorted.findIndex(el => el.id === feature.subclass_id)
                    // console.log(index)
                    sorted[index].values.push(feature)
                } else {
                    sorted[0].values.push(feature)
                }
            })

            // console.log("Sorted", sorted)
            return (
                sorted.map(subclass => {
                    return (<>
                        <h3>{subclass.title !== "Base" ? `${subclass.title} Subclass` : "Class"} Features</h3>
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
                {/* Paladin specific info */}
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

                {/* Wizard specific info */}
                {character.class === 12 && <div className="compendium-content-emphasis">
                    <h3 style={{margin: 0}}>Expanding and Replacing a Spellbook</h3>
                    <ul className="collapsible__list">
                        <li className="collapsible__list_item">The spells you add to your spellbook as you gain
                            levels reflect your ongoing magical research, but you
                            might find other spells during your adventures that
                            you can add to the book. You could discover a Wizard
                            spell on a Spell Scroll, for example, and then copy
                            it into your spellbook.</li>
                        <li className="collapsible__list_item"><strong>Copying a Spell into the Book.</strong> 
                            When you find a level 1+ Wizard spell, you can copy it into your
                            spellbook if it’s of a level you can prepare and if you
                            have time to copy it. For each level of the spell, the
                            transcription takes 2 hours and costs 50 GP. Afterward
                            you can prepare the spell like the other spells
                            in your spellbook.</li>
                        <li className="collapsible__list_item"><strong>Copying the Book.</strong> 
                            You can copy a spell from your spellbook into another book. This is like copying
                            a new spell into your spellbook but faster, since
                            you already know how to cast the spell. You need
                            spend only 1 hour and 10 GP for each level of the
                            copied spell.</li>
                        <li className="collapsible__list_item">If you lose your spellbook, you can use the same
                            procedure to transcribe the Wizard spells that you
                            have prepared into a new spellbook. Filling out the
                            remainder of the new book requires you to find new
                            spells to do so. For this reason, many wizards keep a
                            backup spellbook.</li>
                    </ul>
                </div>}

                {subclassesSorted()}

                {/* Sorcerer specific info */}
                {character.class === 10 && <>
                    <div className="divider"></div>
                    {metamagicOptions()}
                </>}

                {/* Warlock specific info */}
                {character.class === 11 && <>
                    <div className="divider"></div>
                    {eldritchInvocationOptions()}
                </>}
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