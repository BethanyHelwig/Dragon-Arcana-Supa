import { useContext, useEffect, useState, useMemo, Fragment } from 'react'
import { CreationContext } from '../../context/CreationContext'
import { CreationLookupContext } from '../../context/CreationLookupContext'
import { Collapsible } from '../../components/Collapsible'
import { StatusContext } from '../../context/StatusContext'
import { SpellLookupContext } from '../../context/SpellLookupContext'
import FetchJson from '../../components/FetchJson'
import Modal from '../../components/Modal'
import toast from 'react-hot-toast'

export default function Spells(){

    // context values
    const { character, updateCharacter, updateArrayInCharacter } = useContext(CreationContext)
    const { classList } = useContext(CreationLookupContext)
    const { spellList, featureList, className } = useContext(SpellLookupContext)
    const { spellsComplete, setSpellsComplete } = useContext(StatusContext)

    // state values
    const [ selectedLevel, setLevel ] = useState("1")
    const [ activeModal, setActiveModal ] = useState(null)
    const [ selectedContainer, setSelectedContainer ] = useState("allSpells")

    // loading and error states
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState(null)
    
    const cantripLimit = featureList[character.level-1]?.cantrips || 0
    const spellLimit = featureList[character.level-1]?.prepared_spells || 0

    // checks if the selected cantrips and spells match the allowed limit
    // then lets the status know if it's complete or not
    useEffect(() =>{
        const cantripsComplete = cantripLimit === character.preparedCantrips?.length || false
        const spellsComplete = spellLimit === character.preparedSpells?.length || false

        setSpellsComplete(cantripsComplete && spellsComplete)

    },[cantripLimit, spellLimit, character.preparedCantrips?.length, character.preparedSpells?.length])

    // Handles and checks cantrip selections against limit in state held values
    function handleCantripSelection(e){
        const { value, checked } = e.target

        // if unchecking, go ahead
        if (!checked){
            updateArrayInCharacter("preparedCantrips", value)
        }
        // if adding this is over the limit, stop
        else if (character.preparedCantrips.length >= cantripLimit){
            toast.error(`Cannot select more than ${cantripLimit} cantrips.`)
        }
        // otherwise, let it add the new selection
        else {
            updateArrayInCharacter("preparedCantrips", value)
        }
    }

    // Handles and checks spell selections against limit in state held values
    function handleSpellSelection(e){
        const { value, checked } = e.target

        // if unchecking, go ahead
        if (!checked){
            updateArrayInCharacter("preparedSpells", value)
        }
        // if adding this is over the limit, stop
        else if (character.preparedSpells.length >= spellLimit){
            toast.error(`Cannot select more than ${spellLimit} spells.`)
        }
        // otherwise, let it add the new selection
        else {
            updateArrayInCharacter("preparedSpells", value)
        }
    }

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

    // Selected cantrips are looked up in the spell list and returned formatted
    const preparedCantripsFormatted = useMemo(() => {
        if (!character?.preparedCantrips?.length) return null 
        
        return character?.preparedCantrips.map(cantrip => {
            const cantripObj = spellList.find(element => element.full_name === cantrip)
            if (cantripObj !== undefined){
                return (
                    <Fragment key={cantripObj.id}>
                        <div className="selection--spells">
                            <h4>{cantripObj.full_name}</h4>
                        </div>
                            <div className="selection--spells__details">
                                <div className="spell-attributes">
                                    <span>{cantripObj.school_of_magic.school}</span>
                                    <span>{cantripObj.casting_time}</span>
                                    <span>{cantripObj.duration}</span>
                                    <span>{cantripObj.components}</span>
                                    <span>{cantripObj.range}</span>
                                </div>
                                <ul className="selection--spells__list">
                                    {cantripObj.description.map(el => {
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
                            </div>
                    </Fragment>
                )
            }
        })
    },[character?.preparedCantrips, spellList])

    // Selected spells are looked up in the spell list and returned formatted
    const preparedSpellsFormatted = useMemo(() => {
        if (!character?.preparedSpells?.length) return null 
        
        return character?.preparedSpells.map(spell => {
            const spellObj = spellList.find(element => element.full_name === spell)
            if (spellObj !== undefined){
                return (
                    <Fragment key={spellObj.id}>
                        <div className="selection--spells">
                            <h4>{spellObj.full_name} (Level {spellObj.level})</h4>
                        </div>
                            <div className="selection--spells__details">
                                <div className="spell-attributes">
                                    <span>{spellObj.school_of_magic.school}</span>
                                    <span>{spellObj.casting_time}</span>
                                    <span>{spellObj.duration}</span>
                                    <span>{spellObj.components}</span>
                                    <span>{spellObj.range}</span>
                                </div>
                                <ul className="selection--spells__list">
                                    {spellObj.description.map(el => {
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
                            </div>
                    </Fragment>
                )
            }
        })
    },[character?.preparedSpells, spellList])

    // changes what the selected level is for what spells are displayed
    function changeLevel(e){
        setLevel(e.target.value)
    }

    // handle the "save" button of the modal to close it
    function handleModalClose(){
        setActiveModal(null)
        setSelectedContainer("selectedSpells")
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
            <h4>Cantrips (Select {cantripLimit}):</h4>
            <button onClick={() => setActiveModal("cantrips")}>
                Select your cantrips
            </button>
            {/* Cantrip selection modal */}
            <Modal
                isOpen={activeModal === "cantrips"}
                onClose={() => setActiveModal(null)}
                title="Cantrips"
            >
                <form>
                    <legend className="flex-row__between">
                        <span>Select {cantripLimit} cantrips from the list below.</span>
                        <span>{character.preparedCantrips.length}/{cantripLimit} Selected</span>
                    </legend>
                    <div className="scroll-window">
                        {collapsibleArray["Cantrip"]?.map(cantrip => {
                            return (
                                <Fragment key={cantrip.id}>
                                    <div className="selection--spells">
                                        <input 
                                            type="checkbox"
                                            name="prepared-cantrips"
                                            id={cantrip.id}
                                            value={cantrip.full_name}
                                            checked={character.preparedCantrips.includes(cantrip.full_name)}
                                            onChange={handleCantripSelection}
                                        />
                                        <label htmlFor={cantrip.id}>
                                                {cantrip.full_name}
                                        </label>
                                    </div>
                                        <div className="selection--spells__details">
                                            <div className="spell-attributes">
                                                <span>School: {cantrip.school_of_magic.school}</span>
                                                <span>Casting Time: {cantrip.casting_time}</span>
                                                <span>Duration: {cantrip.duration}</span>
                                                <span>Components: {cantrip.components}</span>
                                                <span>Range: {cantrip.range}</span>
                                            </div>
                                            <ul className="selection--spells__list">
                                                {cantrip.description.map(el => {
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
                                        </div>
                                </Fragment>
                            )
                        })}
                    </div>
                    <button onClick={handleModalClose}>Save</button>
                </form>
            </Modal>

            <h4>Prepared spells (Select {spellLimit}):</h4>
            <button onClick={() => setActiveModal("spells")}>
                Select your prepared spells
            </button>

            {/* Prepared spell selection modal */}
            <Modal
                isOpen={activeModal === "spells"}
                onClose={() => setActiveModal(null)}
                title="Spells"
            >
                <form>
                    <legend className="flex-row__between">
                        <span>Select {spellLimit} spells from the list below.</span>
                        <span>{character.preparedSpells.length}/{spellLimit} Selected</span>
                    </legend>
                    <div className="scroll-window">
                        {levels
                            .filter(level => obj?.[`spell_slots_spell_level_${level}`] != null)
                            .map(level => {
                                return collapsibleArray[`${level}`]?.map(spell => {
                                    return (
                                        <Fragment key={spell.id}>
                                            <div className="selection--spells">
                                                <input 
                                                    type="checkbox"
                                                    name="prepared-spells"
                                                    id={spell.id}
                                                    value={spell.full_name}
                                                    checked={character.preparedSpells.includes(spell.full_name)}
                                                    onChange={handleSpellSelection}
                                                />
                                                <label htmlFor={spell.id}>
                                                        {level} - {spell.full_name}
                                                </label>
                                            </div>
                                            <div className="selection--spells__details">
                                                <div className="spell-attributes">
                                                    <span>School: {spell.school_of_magic.school}</span>
                                                    <span>Casting Time: {spell.casting_time}</span>
                                                    <span>Duration: {spell.duration}</span>
                                                    <span>Components: {spell.components}</span>
                                                    <span>Range: {spell.range}</span>
                                                </div>
                                                <ul className="selection--spells__list">
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
                                            </div>
                                        </Fragment>
                                    )
                                })  
                            })
                        }
                    </div>
                    <button onClick={handleModalClose}>Save</button>
                </form>
            </Modal>

            {/* Features table */}
            <table className="table table--spells">
                <thead>
                    <tr>
                        <th scope="col" colSpan={levels.length} className="table__header-span"><span>-- Spell Slots per Spell Level --</span></th>
                    </tr>
                    <tr>
                        {levels.map(el => <th scope="col" key={`header_${el}`}>{el}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {levels.map(level => {
                            const value = obj?.[`spell_slots_spell_level_${level}`]
                            return (
                                <td key={level}>{value ?? "--"}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
            </>
        )
    }

    // container showing all available class spells
    function viewAllSpells() {
        return (
            <div>
                <h3>All Class Spells</h3>
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
    )}

    // container showing the cantrips and spells the user has selected
    function selectedSpells() {
        return (
            <div>
                <h3>Prepared Cantrips</h3>
                {!character?.preparedCantrips || character?.preparedCantrips.length == 0 && <p>You have not selected any cantrips yet.</p>}
                {character?.preparedCantrips && preparedCantripsFormatted}
                <h3>Prepared Spells</h3>
                {!character?.preparedSpells || character?.preparedSpells.length == 0 && <p>You have not selected any spells yet.</p>}
                {character?.preparedSpells && preparedSpellsFormatted}
            </div>
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
                    <section className="spells-container">
                        <div className="submenu__spell-selection">
                            <button 
                                onClick={() => setSelectedContainer("selectedSpells")}
                                className={selectedContainer === "selectedSpells" ? "submenu__spell-selection__active" : null}
                            >
                                Selected Spells
                            </button>
                            <button 
                                onClick={() => setSelectedContainer("allSpells")}
                                className={selectedContainer === "allSpells" ? "submenu__spell-selection__active" : null}
                            >
                                All Class Spells
                            </button>
                        </div>
                        {selectedContainer === "selectedSpells" && selectedSpells()}
                        {selectedContainer === "allSpells" && viewAllSpells()}
                    </section>
                </div>
                : <p>Please choose a class in order to display available spells.</p>
            }
        </>
    )
}