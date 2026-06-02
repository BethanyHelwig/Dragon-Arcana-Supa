import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { useApiStore } from "../../store/useApiStore"
import { StatusContext } from '../../context/StatusContext'

export default function StatusOfCreation() {

    const { character, generatedScores } = useContext(CreationContext)
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

        console.log("Class complete: ", classComplete)
        console.log("Species complete: ", speciesComplete)
        console.log("Ability scores complete: ", abilityScoresComplete)
        console.log("Skills complete: ", skillsComplete)
        console.log("Spells complete: ", spellsComplete),
        console.log("Background complete: ", backgroundComplete)
        console.log("About complete: ", aboutComplete)

        const formattedScores = Object.fromEntries(generatedScores.map(item => [item.ability, item.score]))

        //createCharacter(character, formattedScores)
    }

    return (        
        <div className="status-of-creation">
            <div className={classComplete ? "container complete" : "container"}>
                <i className={classComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Class</span>
            </div>
            <div className={speciesComplete ? "container complete" : "container"}>
                <i className={speciesComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Species</span>
            </div>
            <div className={backgroundComplete ? "container complete" : "container"}>
                <i className={backgroundComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Background</span>
            </div>
            <div className={abilityScoresComplete ? "container complete" : "container"}>
                <i className={abilityScoresComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Ability Scores</span>
            </div>
            <div className={skillsComplete ? "container complete" : "container"}>
                <i className={skillsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Skills</span>
            </div>
            <div className={spellsComplete ? "container complete" : "container"}>
                <i className={spellsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Spells</span>
            </div>
            <div className={aboutComplete ? "container complete" : "container"}>
                <i className={aboutComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">About</span>
            </div>

    {/* TODO: Change this to Review Character and send to review page before creation */}
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
    )
    
}