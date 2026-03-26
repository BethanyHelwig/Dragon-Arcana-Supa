import { useContext, useEffect } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { toast } from "react-hot-toast"

export default function Skills(){

    const { 
        character, 
        skillList, 
        classList, 
        updateArrayInCharacter, 
        backgrounds,
        generatedScores, 
        speciesList, 
        updateCharacter 
    } = useContext(CreationContext)

    // Gets the available skills for the chosen class
    function classInformation() {
        const chosenClass = classList.filter(element => element.id === character.class)

        const { skill_proficiencies, skill_proficiency_allowance } = chosenClass[0]

        return (
            <>
            <p>Choose {skill_proficiency_allowance} skills:</p>
            <div className="two-col">
                    {skill_proficiencies.map(el => {
                        return (
                            <div key={el} className="selection">
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

    // Gets the available skills for the chosen species
    function speciesInformation() {
        const chosenSpecies = speciesList.filter(element => element.id === character.species)

        const { skills } = chosenSpecies[0]

        if (skills){
            return (
                <>
                    <p>Choose one:</p>
                    <div className="two-col">
                        {skills.map(el => {
                            return (
                                <div key={el + "species"} className="selection">
                                    <input 
                                        type="radio"
                                        name="species_skills"
                                        id={el + "species"}
                                        value={el}
                                        checked={character.species_skills === el}
                                        onChange={(e) => handleSpeciesProficiency(e)}
                                    />
                                    <label htmlFor={el + "species"}>{el}</label>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        }
        else {
            return (
                <div>
                    <p>This class does not have a skill proficiency.</p>
                </div>
            )
        }
    }

    // Gets the available skills for the chosen background
    function backgroundInformation() {
        const chosenBackground = backgrounds.filter(element => element.id === character.background)

        const { skill_proficiencies } = chosenBackground[0]

        if (skill_proficiencies){
            return (
                <>
                    <p>You are proficient in the following:</p>
                    <div className="two-col">
                        {skill_proficiencies.map(el => {
                            return (
                                <div className="selection-look-alike">
                                    <span>{el}</span>
                                </div>
                            )}
                        )}
                    </div>
                </>
            )
        }
        else {
            return (
                <div>
                    <p>This background does not have a skill proficiency.</p>
                </div>
            )
        }
    }

    // Calculates the modifier for each ability selection
    function getModifier(abilityName){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        //console.log(result)
        if (result !== undefined) {
            const modifier = Math.floor((result.score - 10) / 2)
            return `${modifier > 0 ? "+" : ""}${modifier}`
        }
        return "-"
    }

    function calculateProficiencyBonus(fullName){

        const chosenBackground = backgrounds.filter(element => element.id === character.background)

        const { skill_proficiencies: backgroundProficiencies } = chosenBackground[0]

        if (character.skill_proficiencies.includes(fullName)
                || character.species_skills === (fullName)
                || backgroundProficiencies.includes(fullName)) {
            return Math.ceil(character.level / 4) + 1;
        }

        return "--";
    }

    const skillsFormatted = skillList.map(el => {
        const modifier = getModifier(el.ability_score.full_name);
        const bonus = calculateProficiencyBonus(el.full_name);

        return (
            <>
                {/* SKILL NAME */}
                <span className="skill-display-name">{el.full_name}</span>

                {/* ABILITY SCORE NAME */}
                <span>{el.ability_score.name}</span>

                {/* SCORE */}
                <span>{modifier}</span>

                {/* PROFICIENCY */}
                {/* This scales with the character's level, starting at +2 and going up to +9 */}
                <span>{bonus}</span>

                {/* TOTAL */}
                <span>0</span>
            </>
        )
    })

    // Handles and checks proficiencies tied to class selection
    function handleProficiencySubmit(e, allowance){
        console.log("Calling handleProficiencySubmit")
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

    // Handles the proficiency choice tied to species selection
    function handleSpeciesProficiency(e){
        console.log("Calling handlesSpeciesProficiency")
        updateCharacter(e.target.name, e.target.value)
    }

    return (
        <>
            <h2>Skills Selection</h2>
            <div className="flex-row">
                <div className="flex-col">
                    <div className="skill-selection">
                        <h4>Based on chosen class</h4>
                        {character.class ? classInformation()
                            : <p>Please choose a class first to see class specific skill proficiencies.</p>
                        }
                    </div>
                    <div className="skill-selection">
                        <h4>Based on chosen species</h4>
                        {character.species ? speciesInformation()
                            : <p>Please select a species to see specific skill proficiencies.</p>
                        }
                    </div>
                    <div className="skill-selection">
                        <h4>Based on chosen background</h4>
                            {character.background ? backgroundInformation()
                                : <p>Please select a background to see specific skill proficiencies.</p>
                            }

                    </div>
                </div>
                <div className="skill-display font-Roboto">
                    <span className="skill-display-name skill-display-element-header">SKILL</span>
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