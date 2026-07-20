import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Collapsible } from '../../../components/Collapsible'

export default function ClassDetails(){
    const { id } = useParams()
    const { classList } = useOutletContext()
    const [ chosenClass, setChosenClass ] = useState()

    useEffect(() => {
        // TODO: if going straight to this page, there will not be an animalList
        // so need to look up the object directly if there is no list
        const classObj = classList.find(el => el.id === Number(id))
        console.log(classObj)
        setChosenClass(classObj)
    }, [id])

    // useEffect(() => {
    //     if (chosenClass === null || chosenClass === undefined){
    //         // do nothing! this should be first render
    //     }
    //     else {
    //         console.log("Time to get class features!")
    //     }
    // }, [chosenClass])

    // Generates additional information for the chosen class in the right pane
    function classInfo() {
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
        } = chosenClass

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
                
                <div className="divider"></div>
                {/* Paladin specific info */}
                {chosenClass.class === 7 && <div className="compendium-content-emphasis">
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
                {chosenClass.class === 12 && <div className="compendium-content-emphasis">
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
                {chosenClass.class === 10 && <>
                    <div className="divider"></div>
                    {metamagicOptions()}
                </>}

                {/* Warlock specific info */}
                {chosenClass.class === 11 && <>
                    <div className="divider"></div>
                    {eldritchInvocationOptions()}
                </>}
            </>
        )
    }

    function classFeaturesTable(){

    }

    return(
        <>
            {chosenClass &&
            <div>
                <h2>{chosenClass.full_name}</h2>
                <div className="monster-divider"></div>
                <h4>Core {chosenClass.full_name} Traits</h4>
                <table className="table">
                    <tbody>
                        <tr>
                            <td><strong>Primary Ability</strong></td>
                            <td>{chosenClass.primary_ability}</td>
                        </tr>
                        <tr>
                            <td><strong>Hit Point Die</strong></td>
                            <td>{chosenClass.hit_point_die} per level</td>
                        </tr>
                        <tr>
                            <td><strong>Saving Throw Proficiencies</strong></td>
                            <td>{chosenClass.saving_throw_proficiencies}</td>
                        </tr>
                        <tr>
                            <td><strong>Skill Proficiencies</strong></td>
                            <td>{chosenClass.skill_proficiencies.join(", ")}</td>
                        </tr>
                        <tr>
                            <td><strong>Weapon Proficiencies</strong></td>
                            <td>{chosenClass.weapon_proficiencies}</td>
                        </tr>
                        <tr>
                            <td><strong>Armor Training</strong></td>
                            <td>{chosenClass.armor_training}</td>
                        </tr>
                        <tr>
                            <td><strong>Starting Equipment</strong></td>
                            <td>Choose 1: {chosenClass.starting_equipment.join(" OR ")}</td>
                        </tr>
                        {chosenClass.tool_proficiencies &&
                            <tr>
                                <td><strong>Tool Proficiencies</strong></td>
                                <td>{chosenClass.tool_proficiencies}</td>
                            </tr>
                        }
                    </tbody>
                </table>

                <h3>{chosenClass.full_name} Class Features</h3>
                <div className="compendium-divider"></div>
                <p>As a {chosenClass.full_name}, you gain the following class features
                    when you reach the specified levels. These features are listed in the {chosenClass.full_name} Features table.</p>

                <h4>{chosenClass.full_name} Class Features</h4>
                {classInfo()}
            </div>
            }
        </>
    )
}