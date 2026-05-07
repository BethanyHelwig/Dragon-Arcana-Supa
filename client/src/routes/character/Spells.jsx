import { useContext, useEffect, useState, useMemo } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { Collapsible } from '../../components/Collapsible'
import FetchJson from '../../components/FetchJson'

export default function Spells(){

    // context values
    const { character, classList } = useContext(CreationContext)

    // state values
    const [ spellList, setSpellList ] = useState([])
    const [ featureList, setFeatureList ] = useState([])
    const [ className, setClassName ] = useState("")
    const [ selectedLevel, setLevel ] = useState("1")

    // loading and error states
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        if (!character?.class) return

        const fetchData = async () => {
            try {
                setIsLoading(true)

                const chosenClass = classList.find(element => element.id === character.class)
                if (!chosenClass) return

                const { full_name } = chosenClass
                setClassName(full_name)

                // fetch both requests at the same time
                const [spellData, featureData] = await Promise.all([
                    FetchJson(`/api/search/spell?c_class=${character.class}`),
                    FetchJson(`/api/search/features/${full_name.toLowerCase()}`)
                ])

                setSpellList(spellData)
                setFeatureList(featureData)

            } catch (err) {
                console.log("Error retreiving data: ", err)
                setError(err.message) 
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()

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
            <h2 className="title-glow">Level {character.level} {className}</h2>
            {isLoading && <i className="fa-solid fa-spinner spinning-icon"></i>}
            {!isLoading && character.class ? 
                <div className="flex-row">
                    <div className="prepared-spells">
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