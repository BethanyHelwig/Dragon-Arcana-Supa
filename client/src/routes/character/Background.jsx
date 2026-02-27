import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function Background(){

    const { character, backgrounds, updateCharacter } = useContext(CreationContext)

    function handleSubmit(e){
        console.log(e.target.name, e.target.value)
        updateCharacter(e.target.name, parseInt(e.target.value))
    }

    const backgroundsFormatted = backgrounds.map(item => {

        const { full_name, id } = item

        return (
            <div key={full_name} className="radio-class-selection">
                <input 
                    type="radio"
                    name="background"
                    id={full_name}
                    value={id}
                    checked={character.background === item.id}
                    onChange={handleSubmit}
                />
                <label htmlFor={full_name}>{full_name}</label>
            </div>
        )
    })

    function backgroundInfo() {

        const chosenBackground = backgrounds.filter(element => element.id === character.background)
        const { 
            full_name, 
            feat,
            feat_specific,
            skill_proficiencies,
            tool_proficiency
        } = chosenBackground[0]

        return (
            <>
                <h3 className="title-glow">{full_name}</h3>
                <p><strong>Feat:</strong> {feat.feat}{feat_specific && ` (${feat_specific})`}</p>
                <p><strong>Skill Proficiencies:</strong> {skill_proficiencies.map(el => el).join(", ")}</p>
                <p><strong>Tool Proficiency:</strong> {tool_proficiency}</p>
            </>
        )
    }

    return (
        <>
            <h2>Background Selection</h2>
            <div className="flex-row">
                <form>
                    <h3><label htmlFor="background">Choose your background:</label></h3>
                    <fieldset name="background" className="class-grid">
                        {backgroundsFormatted}
                    </fieldset>
                </form>
            <div className="class-info">
                {character.background ? backgroundInfo()
                    : (<>
                        <h3>Background Information</h3>
                        <p>Choose a background to see information pertaining to it.</p>
                    </>
                )}
            </div>
            </div>
        </>
    )
}