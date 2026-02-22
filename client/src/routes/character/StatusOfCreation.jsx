import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { useApiStore } from "../../store/useApiStore"

export default function StatusOfCreation() {

    const { character } = useContext(CreationContext)
    const { createCharacter } = useApiStore()

    const classComplete = character.class ? true : false
    const speciesComplete = character.species ? true : false
    const abilityScoresComplete = false
    const skillsComplete = false
    const backgroundComplete = false
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

        createCharacter(character)
    }

    return (        
        <div className="status-of-creation">
            <span className={classComplete ? "complete" : ""}>
                Class <i class={classComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span> 
            <span className={speciesComplete ? "complete" : ""}>
                Species <i class={speciesComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span>
            <span className={backgroundComplete ? "complete" : ""}>
                Background <i class={backgroundComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span> 
            <span className={abilityScoresComplete ? "complete" : ""}>
                Ability Scores <i class={abilityScoresComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span>
            <span className={skillsComplete ? "complete" : ""}>
                Skills <i class={skillsComplete ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span>
            <span className={aboutComplete() ? "complete" : ""}>
                About <i class={aboutComplete() ? "fa-solid fa-check" : "fa-solid fa-circle-exclamation"}></i>
            </span>
            <button onClick={characterSubmitCheck}>Create Character</button>
        </div>
    )
    
}