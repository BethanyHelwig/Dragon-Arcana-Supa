
import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function MonsterDetails(){
    const { id } = useParams()
    const { monsterList } = useOutletContext()
    const [ monster, setMonster ] = useState()

    useEffect(() => {
        const monsterObj = monsterList.find(monster => monster.id === Number(id))
        console.log(monsterObj)
        setMonster(monsterObj)
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
            {monster && 
            <>
            <div className="monster-color">
                <h2 className="monster-name">{monster.name}</h2>
                <div className="monster-divider"></div>
                <span style={{fontStyle: "italic"}}>{monster.size.creature_size} {monster.type}, {monster.alignment.full_name}</span>
                <p><strong>Armor Class</strong> {monster.ac}</p>
                <p><strong>Hit Points</strong> {monster.hp}</p>
                <p><strong>Speed</strong> {monster.speed}</p>
                <p><strong>Initiative</strong> {monster.initiative}</p>
                {/* ABILITY SCORES */}
                <div className="flex-row">
                    <table class="stat-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">STR</th>
                            <td>{monster.str}</td>
                            <td>{monster.str_mod}</td>
                            <td>{monster.str_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">INT</th>
                            <td>{monster.int}</td>
                            <td>{monster.int_mod}</td>
                            <td>{monster.int_save}</td>
                        </tr>
                    </tbody>
                    </table>

                    <table class="stat-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">DEX</th>
                            <td>{monster.dex}</td>
                            <td>{monster.dex_mod}</td>
                            <td>{monster.dex_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">WIS</th>
                            <td>{monster.wis}</td>
                            <td>{monster.wis_mod}</td>
                            <td>{monster.wis_save}</td>
                        </tr>
                    </tbody>
                    </table>

                    <table class="stat-table">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>MOD</th>
                            <th>SAVE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="monster-name">CON</th>
                            <td>{monster.con}</td>
                            <td>{monster.con_mod}</td>
                            <td>{monster.con_save}</td>
                        </tr>
                        <tr>
                            <th scope="row" className="monster-name">CHA</th>
                            <td>{monster.cha}</td>
                            <td>{monster.cha_mod}</td>
                            <td>{monster.cha_save}</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                {monster.skills && <p><strong>Skills</strong> {monster.skills}</p>}
                {monster.resistances && <p><strong>Resistances</strong> {monster.resistances}</p>}
                {monster.immunities && <p><strong>Immunities</strong> {monster.immunities}</p>}
                {monster.senses && <p><strong>Senses</strong> {monster.senses}</p>}
                {monster.languages && <p><strong>Languages</strong> {monster.languages}</p>}
                {monster.gear && <p><strong>Gear</strong> {monster.gear}</p>}
                {monster.cr && <p><strong>CR</strong> {monster.cr}</p>}

            </div>    
                {monster.traits && 
                <>
                    <h3 className="monster-name">Traits</h3>
                    <div className="monster-divider"></div>
                    {formatted(monster.traits)}
                </>
                }
                {monster.actions &&
                <>
                    <h3 className="monster-name">Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(monster.actions)}
                </>
                }
                {monster.bonus_actions &&
                <>
                    <h3 className="monster-name">Bonus Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(monster.bonus_actions)}
                </>
                }
                {monster.legendary_actions &&
                <>
                    <h3 className="monster-name">Legendary Actions</h3>
                    <div className="monster-divider"></div>
                    {formatted(monster.legendary_actions)}
                </>
                }
            </>
            }
        </div>
    )
}