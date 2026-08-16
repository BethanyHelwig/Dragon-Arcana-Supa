import { useContext } from 'react'
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

    function characterSubmitCheck(){

        const formattedScores = Object.fromEntries(generatedScores.map(item => [item.ability, item.score]))

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

    return(
        <>
            <h2>Review</h2>
            <div className="compendium-content">
                <h3>Character: {character.name}</h3>

                {/* CLASS completion detail */}
                <div className={`two-col ${classComplete ? " container complete" : " container"}`}>
                    <h3>Class</h3>             
                    <i className={classComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>Level {character.level} {classList.find(el => el.id === character.class).full_name}</p>

                {/* SPECIES completion detail */}
                <div className={`two-col ${speciesComplete ? " container complete" : " container"}`}>
                    <h3>Species</h3>             
                    <i className={speciesComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>{speciesList.find(el => el.id === character.species).full_name}</p>

                {/* BACKGROUND completion detail */}
                <div className={`two-col ${backgroundComplete ? " container complete" : " container"}`}>
                    <h3>Background</h3>             
                    <i className={backgroundComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <p>{backgrounds.find(el => el.id === character.background).full_name}</p>

                {/* ABILITY SCORES completion detail */}
                <div className={`two-col ${abilityScoresComplete ? " container complete" : " container"}`}>
                    <h3>Ability Scores</h3>             
                    <i className={abilityScoresComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>

                {/* SKILLS completion detail */}
                <div className={`two-col ${skillsComplete ? " container complete" : " container"}`}>
                    <h3>Skills</h3>             
                    <i className={skillsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>

                {/* SPELLS completion detail */}
                <div className={`two-col ${spellsComplete ? " container complete" : " container"}`}>
                    <h3>Spells</h3>             
                    <i className={spellsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <Collapsible label={"View Spells details"}></Collapsible>

                {/* ABOUT completion detail */}
                <div className={`two-col ${aboutComplete ? " container complete" : " container"}`}>
                    <h3>About</h3>             
                    <i className={aboutComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                </div>
                <Collapsible label={"View character details"}></Collapsible>

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