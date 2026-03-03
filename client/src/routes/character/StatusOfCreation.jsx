import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { useApiStore } from "../../store/useApiStore"

export default function StatusOfCreation() {

    const { character, abilityScores } = useContext(CreationContext)
    const { createCharacter, isCreateCharacterLoading } = useApiStore()

    const classComplete = character.class ? true : false
    const speciesComplete = character.species ? true : false
    const abilityScoresComplete = false
    const skillsComplete = false
    const spellsComplete = false
    const backgroundComplete = character.background ? true : false
    const aboutComplete = () => {
        if (character.name === undefined || character.name === null) {
            return false
        }
        else if (character.alignment === undefined || character.alignment === null) {
            return false
        }
        else {
            return true
        }
    }

    function characterSubmitCheck(){
        if (classComplete && speciesComplete && abilityScoresComplete && skillsComplete && backgroundComplete && aboutComplete()) {
            console.log("Ready to submit character!")
            
            return true;
        }
        else {
            console.log("Please complete required fields in order to submit character!")
        }

        createCharacter(character, abilityScores)
    }

    return (        
        <div className="status-of-creation">
            <div className={classComplete ? "container complete" : "container"}>
                <i class={classComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Class</span>
            </div>
            <div className={speciesComplete ? "container complete" : "container"}>
                <i class={speciesComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Species</span>
            </div>
            <div className={backgroundComplete ? "container complete" : "container"}>
                <i class={backgroundComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Background</span>
            </div>
            <div className={abilityScoresComplete ? "container complete" : "container"}>
                <i class={abilityScoresComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Ability Scores</span>
            </div>
            <div className={skillsComplete ? "container complete" : "container"}>
                <i class={skillsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Skills</span>
            </div>
            <div className={spellsComplete ? "container complete" : "container"}>
                <i class={spellsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">Spells</span>
            </div>
            <div className={aboutComplete() ? "container complete" : "container"}>
                <i class={aboutComplete() ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
                <span className="hidden">About</span>
            </div>

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