import { useContext, Fragment } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { CreationLookupContext } from '../../context/CreationLookupContext'
import { StatusContext } from '../../context/StatusContext'
import { useApiStore } from "../../store/useApiStore"
import { toast } from 'react-hot-toast'
import { Collapsible } from '../../components/Collapsible'
import Modal from '../../components/Modal'

export default function Review(){

    const { character, generatedScores } = useContext(CreationContext)
    const {
        classList, 
        speciesList, 
        alignments, 
        lifestyles, 
        abilityScores,
        backgrounds,
        skillList,
        languages
    } = useContext(CreationLookupContext)
    const { createCharacter, isCreateCharacterLoading } = useApiStore()

    const {
        classComplete,
        speciesComplete,
        abilityScoresComplete,
        skillsComplete,
        spellsComplete,
        backgroundComplete,
        aboutComplete
    } = useContext(StatusContext)

    const formattedScores = Object.fromEntries(generatedScores?.map(item => [item.ability, item.score]))
    console.log("Formatted scores: ", formattedScores)

    function characterSubmitCheck(){

        // const formattedScores = Object.fromEntries(generatedScores.map(item => [item.ability, item.score]))

        if (classComplete 
            && speciesComplete
            && abilityScoresComplete
            && skillsComplete
            && spellsComplete
            && backgroundComplete
            && aboutComplete
        ) {
            createCharacter(character, formattedScores)
        }
    }

    // for ability scores section
    function getModifier(abilityName){
        const result = generatedScores?.find(el => {return el.ability === abilityName?.toLowerCase()})
        //console.log(result)
        if (result !== undefined) {
            const modifier = Math.floor((result.score - 10) / 2)
            return `${modifier > 0 ? "+" : ""}${modifier}`
        }
        return "-"
    }
    
    // for skills section
    function backgroundInformation() {
        const chosenBackground = backgrounds.find(element => element.id === character?.background)

        if (chosenBackground){
            const { skill_proficiencies } = chosenBackground
    
            if (skill_proficiencies) return skill_proficiencies.join(", ")
            else return <p>N/A</p>
        }
    }

    console.log("Alignment: ", character.alignment)

    // for about section
    function aboutInformation(){
        return (
            <>
            {/* <Collapsible label={"View character details"}> */}
                <p><i>**Only the character name is required, the rest is optional**</i></p>
                <p><b>Pronouns: </b>{character.pronouns}</p>
                {/* {character.pronouns && <p><b>Pronouns: </b>{character.pronouns}</p>} */}
                {character.alignment && <p><b>Alignment: </b>{alignments.find(el => el.id === character.alignment)?.full_name}</p>}
                <p><b>Faith: </b>{character.faith}</p>
                {character.faith && <p><b>Faith: </b>{character.faith}</p>}
            {/* </Collapsible> */}
            </>
        )
    }

    // for spells section
    function spellInformation(){
        return (
            <>
                <p><strong>Prepared cantrips:</strong> {character.preparedCantrips.join(", ")}</p>
                <p><strong>Prepared spells:</strong> {character.preparedSpells.join(", ")}</p>
            </>
        )
    }

    return(
        <>
            <h2>Review</h2>
            <div className="compendium-content">
                <h2 className="title-glow">{character.name ? character.name : "[Insert epic name here]"}</h2>

                {/* CLASS completion detail */}
                <div className={`two-col ${classComplete ? " container complete" : " container"}`}>
                    <h3>Class</h3>             
                    <i className={classComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>Level {character.level} {classList?.find(el => el.id === character.class)?.full_name}</p>

                {/* SPECIES completion detail */}
                <div className={`two-col ${speciesComplete ? " container complete" : " container"}`}>
                    <h3>Species</h3>             
                    <i className={speciesComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>{speciesList?.find(el => el.id === character.species)?.full_name}</p>

                {/* BACKGROUND completion detail */}
                <div className={`two-col ${backgroundComplete ? " container complete" : " container"}`}>
                    <h3>Background</h3>             
                    <i className={backgroundComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>{backgrounds?.find(el => el.id === character.background)?.full_name}</p>

                {/* ABILITY SCORES completion detail */}
                <div className={`two-col ${abilityScoresComplete ? " container complete" : " container"}`}>
                    <h3>Ability Scores</h3>             
                    <i className={abilityScoresComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                {abilityScoresComplete && <>
                    <div className="flex-row">
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">STRENGTH</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("strength")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.strength}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">DEXTERITY</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("dexterity")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.dexterity}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">CONSTITUTION</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("constitution")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.constitution}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">INTELLIGENCE</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("intelligence")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.intelligence}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">WISDOM</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("wisdom")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.wisdom}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="ability-score__display">
                                <h2 className="ability-score__title">CHARISMA</h2>
                                <div>
                                    <h3 className="ability-score__modifier">{getModifier("charisma")}</h3>
                                </div>
                                <div className="ability-score__value_container">
                                    <span>{formattedScores.charisma}</span>
                                </div>
                            </div>
                        </div>
                    </div>                       
                </>}
                <p></p>

                {/* SKILLS completion detail */}
                <div className={`two-col ${skillsComplete ? " container complete" : " container"}`}>
                    <h3>Skills</h3>             
                    <i className={skillsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p><b>From class:</b> {character.skill_proficiencies.join(", ")}</p>
                <p><b>From species:</b> {character.species_skills}</p>
                <p><b>From background:</b> {backgroundInformation()}</p>

                {/* SPELLS completion detail */}
                <div className={`two-col ${spellsComplete ? " container complete" : " container"}`}>
                    <h3>Spells</h3>             
                    <i className={spellsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                {spellsComplete ? spellInformation() : <p></p>}

                {/* ABOUT completion detail */}
                <div className={`two-col ${aboutComplete ? " container complete" : " container"}`}>
                    <h3>About</h3>             
                    <i className={aboutComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                {aboutComplete ? aboutInformation() : <p></p>}

                <button 
                    onClick={characterSubmitCheck}
                    disabled={isCreateCharacterLoading}
                >
                    {isCreateCharacterLoading 
                        ? <i className="fa-solid fa-spinner spinning-icon"></i>
                        : "Create Character"
                    } 
                </button>
            </div>
        </>
    )
}