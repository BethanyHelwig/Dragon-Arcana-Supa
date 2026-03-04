import { useContext, useEffect } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { toast } from "react-hot-toast"

export default function Skills(){

    const { character, skillList, classList, updateArrayInCharacter, abilityScores, generatedScores } = useContext(CreationContext)

    function classInformation() {
        const chosenClass = classList.filter(element => element.id === character.class)

        const { skill_proficiencies, skill_proficiency_allowance } = chosenClass[0]

        return (
            <>
            <p>Choose {skill_proficiency_allowance} skills:</p>
            <div className="sub-selection">
                    {skill_proficiencies.map(el => {
                        return (
                            <div key={el}>
                                <input 
                                    type="checkbox"
                                    name="skill_proficiencies"
                                    id={el}
                                    value={el}
                                    checked={character.skill_proficiencies.includes(el)}
                                    onChange={(e) => handleProficiencySubmit(e, skill_proficiency_allowance)}
                                />
                                <label htmlFor={el}>{el}</label>
                            </div>
                        )
                    })}
            </div>
            </>
        )
    }

    function getModifier(abilityName){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        console.log(result)
        if (result !== undefined) {
            const modifier = Math.floor((result.score - 10) / 2)
            return `${modifier > 0 ? "+" : ""}${modifier}`
        }
        return "-"
    }

    useEffect(() => {
        
    }, [character.skill_proficiencies])

    const skillsFormatted = skillList.map(el => {
        return (
            <>
                {/* SKILL NAME */}
                <div className="skill-display-name"><span>{el.full_name}</span></div>
                {/* ABILITY SCORE NAME */}
                <span>{el.ability_score.name}</span>

                {/* SCORE */}
                <span>{getModifier(el.ability_score.full_name)}</span>

                {/* PROFICIENCY */}
                <span>{character.skill_proficiencies.includes(el) ? "yes" : "no"}</span>

                {/* TOTAL */}
                <span>0</span>
            </>
        )
    })

    function handleProficiencySubmit(e, allowance){

        if(character[e.target.name].length >= allowance) {
            if(character[e.target.name].includes(e.target.value)){
                console.log("Allowance met but removing item.")
                updateArrayInCharacter(e.target.name, e.target.value)
            }
            else {
                console.log("No more options left for skill proficiency.")
                toast.error(`Cannot select more than ${allowance} skills.`)
            }
        } else {
            console.log("Submitting skill proficiency update to character.")
            updateArrayInCharacter(e.target.name, e.target.value)
        } 
    }

    return (
        <>
            <h2>Skills Selection</h2>
            <div className="flex-row">
                <div className="skill-selection">
                    <form>
                        {/* <h3><label htmlFor="skills">Available Skills</label></h3> */}
                        <fieldset name="skills" className="flex-column">
                            <h4>Based on chosen class</h4>
                            {character.class ? classInformation()
                                : <p>Please choose a class first to see class specific skill proficiencies.</p>
                            }
                        </fieldset>
                    </form>
                    <div>
                        <h4>Based on chosen species</h4>
                        {character.species ? speciesInformation()
                            : <p>Please select a species to see specific skill proficiencies.</p>
                        }
                    </div>
                            <h4>Based on chosen background</h4>
                </div>
            <div className="skill-display">
                <div className="skill-display-name"><span className="skill-display-element-header">SKILL</span></div>
                <span className="skill-display-element-header">ABILITY</span>
                <span className="skill-display-element-header">SCORE</span>
                <span className="skill-display-element-header">PROFICIENCY</span>
                <span className="skill-display-element-header">TOTAL</span>
                {skillsFormatted}
            </div>
            </div>
        </>
    )
}