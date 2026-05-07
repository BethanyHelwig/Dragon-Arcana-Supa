import { useContext, useEffect, useState, useMemo } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { Collapsible } from '../../components/Collapsible'

export default function Spells(){

    // context values
    const { character, classList } = useContext(CreationContext)

    // state values
    const [ spellList, setSpellList ] = useState([])
    const [ featureList, setFeatureList ] = useState([])
    const [ className, setClassName ] = useState("")
    // selected level of what spells are displayed
    const [ selectedLevel, setLevel ] = useState("1")

    useEffect(() => {
        if (!character?.class) return

        fetch(`http://127.0.0.1:8080/api/search/spell?c_class=${character.class}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setSpellList(data)
            })

        const chosenClass = classList.filter(element => element.id === character.class)
        const { full_name } = chosenClass[0]

        setClassName(full_name)

        // need this to be the character name
        fetch(`http://127.0.0.1:8080/api/search/features/${full_name.toLowerCase()}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setFeatureList(data)
            })
    }, [character?.class])

    // group the spells by level
    const collapsibleArray = useMemo(() => {
        if (!Array.isArray(spellList) || spellList.length === 0) {
            return {};
        }

        const grouped = spellList.reduce((acc, spell) => {
            const level = String(spell.level);

            if (!acc[level]) {
                acc[level] = [];
            }

            acc[level].push(spell);
            return acc;
        }, {});

        // sort each level alphabetically
        Object.keys(grouped).forEach(level => {
            grouped[level].sort((a, b) =>
                a.full_name.localeCompare(b.full_name)
            );
        });

        return grouped;
    }, [spellList]);

    const sortedCollapsibles = Object.keys(collapsibleArray)
        .sort((a, b) => Number(a) - Number(b));

    // changes what the selected level is for what spells are displayed
    function changeLevel(e){
        setLevel(e.target.value)
    }

    function preparedSpells(){
        const obj = featureList[character.level - 1]
        if (!obj) return null

        // extract all spell slot keys that actually exist
        const levels = Object.keys(obj)
            .filter(key => key.startsWith("spell_slots_spell_level_"))
            .map(key => Number(key.split("_").pop()))
            .filter(num => !isNaN(num));                          

        return  (
            <>
            <h4>Choose your prepared Cantrips ({featureList[character.level-1]?.cantrips}):</h4>
            <h4>Choose your prepared spells ({featureList[character.level-1]?.prepared_spells}):</h4>
            <table className="table table--spells">
                <thead>
                    <tr>
                        <th scope="col" colspan={levels.length} class="table__header-span"><span>-- Spell Slots per Spell Level --</span></th>
                    </tr>
                    <tr>
                        {levels.map(el => <th scope="col" key={`header_${el}`}>{el}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {levels.map(level => {
                        const value = obj?.[`spell_slots_spell_level_${level}`]
                        return (
                            <td key={level}>{value ?? "--"}</td>
                        )
                    })}
                </tbody>
            </table>
            </>
        )
    }

// ** RETURNED UI **
    return (
        <>
            <h2>Spells Selection</h2>
            {character.class ? 
                <div className="flex-row">
                    <div className="prepared-spells">
                        <h3 className="title-glow">Level {character.level} {className}</h3>
                        {preparedSpells()}
                    </div>
                    <div className="spells-container">
                        <h3>View Spells</h3>
                        <h4>Select a Level:</h4>
                        <form>
                            {sortedCollapsibles.map(level => {
                                return (
                                    <div className="selection">
                                        <input 
                                            type="radio"
                                            name="level"
                                            id={level}
                                            value={level}
                                            checked={level === selectedLevel}
                                            onChange={changeLevel}
                                        />
                                        <label htmlFor={level}>{level}</label>
                                    </div>
                                )
                            })}
                        </form>

                        {collapsibleArray && collapsibleArray[selectedLevel]?.map(spell =>(
                            <Collapsible key={`spell-${spell.id}`} label={spell.full_name}>
                                <div className="spell-attributes">
                                    <span>School: {spell.school_of_magic.school}</span>
                                    <span>Casting Time: {spell.casting_time}</span>
                                    <span>Duration: {spell.duration}</span>
                                    <span>Components: {spell.components}</span>
                                    <span>Range: {spell.range}</span>
                                </div>
                                <ul className="collapsible__list">
                                    {spell.description.map(el => {
                                        if (el.includes('<strong>')){
                                            const startIndex = el.search('<strong>') + 8
                                            const endIndex = el.search('</strong>')
                    
                                            return <li className="collapsible__list_item "><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</li>
                                        }
                                        else {
                                            return <li className="collapsible__list_item ">{el}</li>
                                        }
                                    })}
                                </ul>
                            </Collapsible>
                        ))}

                    </div>
                </div>
                : <p>Please choose a class in order to display available spells.</p>
            }
        </>
    )
}