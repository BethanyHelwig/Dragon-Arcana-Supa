import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function AbilityScores(){

    const { character, updateCharacter, abilityScores } = useContext(CreationContext)

    const abilityScoreElements = abilityScores.map(el => {

        const { full_name, name, description } = el

        return (
            <div key={full_name} className="ability-score-container">
                <div className="ability-score-header-container">
                    <h3>{full_name}</h3>
                    <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                        <span className="tooltiptext">{description}</span>
                    </span>
                </div>
                <div className="ability-score-selection-div">
                    <span>score selection here</span>
                </div>
                <div className="ability-score-display">
                    <div className="ability-score-modifier">
                        <h3>+1</h3>
                    </div>
                    <span>{name.toUpperCase()}</span>
                    <div className="ability-score-number">
                        <span>10</span>
                    </div>
                </div>
            </div>
        )
    })

    function handleSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    return (
        <>
            <h2>Ability Scores</h2>
            <div className="ability-score-grid">
                {abilityScoreElements}
            </div>
        </>
    )
}