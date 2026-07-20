import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function AnimalDetails(){
    const { id } = useParams()
    const { animalList } = useOutletContext()
    const [ animal, setAnimal ] = useState()

    useEffect(() => {
        // TODO: if going straight to this page, there will not be an animalList
        // so need to look up the object directly if there is no list
        const animalObj = animalList.find(animal => animal.id === Number(id))
        console.log(animalObj)
        setAnimal(animalObj)
    }, [id])

    function formatted(text){
        const formatted = text.map( el => {
            if (el.includes('<strong>')){
                const startIndex = el.search('<strong>') + 8
                const endIndex = el.search('</strong>')

                return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
            }
            // if (el.includes('<table>')){
            //     const index = el[7]
            //     console.log(index)
            //     const table = rule.rules_glossary_table.find(table => table.order_in_glossary === Number(index))
            //     const rows = table.rows.map(row => {
            //         const rowArray = row.split("|")
            //         rowArray.map(item => { return (<tr>{item}</tr>)})
            //     })
            //     return (
            //         <table>
            //             <thead>
            //                 <tr>{table.headers.map(el => <th>{el}</th>)}</tr>
            //             </thead>
            //             <tbody>
            //                 {table.rows.map(row => {
            //                     const rowArray = row.split("|")
            //                     return (
            //                         <tr>{rowArray.map(item => { return (<td>{item}</td>)})}</tr>
            //                     )
            //                 })}
            //             </tbody>
            //         </table>
            //         )
            // }
            else {
                return <p>{el}</p>
            }
        })
        return formatted
    } 
      
    return (
        <div className="monster-card">
            {animal && 
            <>
            <div className="monster-color">
                <h2 className="monster-name">{animal.name}</h2>
                <div className="monster-divider"></div>
                <span style={{fontStyle: "italic"}}>{animal.size.creature_size} {animal.type}, {animal.alignment.full_name}</span>
                <p><strong>Armor Class</strong> {animal.ac}</p>
                <p><strong>Hit Points</strong> {animal.hp}</p>
                <p><strong>Speed</strong> {animal.speed}</p>
                <p><strong>Initiative</strong> {animal.initiative}</p>
                {/* ABILITY SCORES */}
                <div className="flex-row">
                    <table class="table--stat">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">STR</th>
                            <td>{animal.str}</td>
                            <td>{animal.str_mod}</td>
                            <td>{animal.str_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">INT</th>
                            <td>{animal.int}</td>
                            <td>{animal.int_mod}</td>
                            <td>{animal.int_save}</td>
                        </tr>
                    </tbody>
                    </table>

                    <table class="table--stat">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">DEX</th>
                            <td>{animal.dex}</td>
                            <td>{animal.dex_mod}</td>
                            <td>{animal.dex_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">WIS</th>
                            <td>{animal.wis}</td>
                            <td>{animal.wis_mod}</td>
                            <td>{animal.wis_save}</td>
                        </tr>
                    </tbody>
                    </table>

                    <table class="table--stat">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">CON</th>
                            <td>{animal.con}</td>
                            <td>{animal.con_mod}</td>
                            <td>{animal.con_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">CHA</th>
                            <td>{animal.cha}</td>
                            <td>{animal.cha_mod}</td>
                            <td>{animal.cha_save}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {animal.skills && <p><strong>Skills</strong> {animal.skills}</p>}
                {animal.resistances && <p><strong>Resistances</strong> {animal.resistances}</p>}
                {animal.vulnerabilities && <p><strong>Vulnerabilities</strong> {animal.vulnerabilities}</p>}
                {animal.immunities && <p><strong>Immunities</strong> {animal.immunities}</p>}
                {animal.senses && <p><strong>Senses</strong> {animal.senses}</p>}
                {animal.languages && <p><strong>Languages</strong> {animal.languages}</p>}
                {animal.gear && <p><strong>Gear</strong> {animal.gear}</p>}
                {animal.cr && <p><strong>CR</strong> {animal.cr}</p>}

            </div>    
                {animal.traits && 
                <>
                    <h3 className="monster-name">Traits</h3>
                    <div className="monster-divider"></div>
                    {formatted(animal.traits)}
                </>
                }
                {animal.actions &&
                <>
                    <h3 className="monster-name">Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(animal.actions)}
                </>
                }
                {animal.bonus_actions &&
                <>
                    <h3 className="monster-name">Bonus Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(animal.bonus_actions)}
                </>
                }
                {animal.legendary_actions &&
                <>
                    <h3 className="monster-name">Legendary Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(animal.legendary_actions)}
                </>
                }
            </>
            }
        </div>
    )
}