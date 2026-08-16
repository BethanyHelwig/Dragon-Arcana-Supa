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

            <Link to ="/character_creation/review" className="btn-lookalike">Review Character</Link>
        </div>
    )
    
}