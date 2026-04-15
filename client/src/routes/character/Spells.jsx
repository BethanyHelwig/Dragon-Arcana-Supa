import { useContext, useEffect, useState, useMemo } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { Collapsible } from '../../components/Collapsible'

export default function Spells(){

    const { character, classList } = useContext(CreationContext)

    const [ spellList, setSpellList ] = useState([])
    const [ selectedLevel, setLevel ] = useState("1")

    useEffect(() => {
        if (!character?.class) return

        fetch(`http://127.0.0.1:8080/api/search/spell?c_class=${character.class}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpellList(data)
            })
    }, [character?.class])

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

    function changeLevel(e){
        setLevel(e.target.value)
    }

    return (
        <>
            <h2>Spells {character.class ? " ": ""}</h2>
            {character.class ? 
                <div className="flex-row">
                    <div>
                        <h3>Choose your prepared spells:</h3>
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
                                <ul>
                                    {spell.description.map(el => {
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
                        ))}

                    </div>
                </div>
                : <p>Please choose a class in order to display available spells.</p>
            }
        </>
    )
}