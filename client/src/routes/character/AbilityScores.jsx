import { useContext, useEffect, useState } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function AbilityScores(){

    const { 
        character, 
        updateCharacter, 
        abilityScores, 
        scoreGenerationMethod, 
        setScoreGenerationMethod,
        resetAbilityScores,
        generatedScores,
        setGeneratedScores
    } = useContext(CreationContext)

    const standardArrayBlock = 
        <div>
            <p>The Standard Array method uses a set of scores for you to choose from. Use the following six scores for your abilities: 15, 14, 13, 12, 10, 8.</p>
        </div>

    const randomGenerationBlock =
        <div>
            <p>In the Random Generation method, for each score you roll four d6s, drop the lowest roll, and total the rest.</p>
            <h3>Roll to generate scores:</h3>
            <button><span><i className="fa-solid fa-dice"></i> Roll!</span></button>
        </div>

    const pointCostBlock = 
            <div>
                <p>The Point Cost method gives you 27 points which you allocate to your chosen abilities. You cannot raise a score above 20.</p>
                <h3>Points remaining:</h3>
                <strong>27</strong>
            </div>
    
    const arrayOptions = 
        <>
            <div className="flex-row">

            </div>
        </>

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
                    {arrayOptions}
                </div>

                <div className="ability-score-display">
                    <div className="ability-score-modifier">
                        <h3>{Math.floor((character[full_name.toLowerCase()] - 10) / 2)}</h3>
                    </div>
                    <span>{name.toUpperCase()}</span>
                    <div className="ability-score-number">
                        <span>{character[full_name.toLowerCase()]}</span>
                    </div>
                </div>
            </div>
        )
    })

    function handleSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    function changeScoreMethod(e){
        setScoreGenerationMethod(e.target.value)
        resetAbilityScores()
    }

    function setStandardArrayScores(){
        setGeneratedScores([15, 14, 13, 12, 10, 8])
    }

    return (
        <>
            <h2>Ability Scores</h2>
            <div className="flex-row">
                <div>
                    <h3>Choose how to generate your scores:</h3>
                    <form>
                        <div className="radio-score-selection">
                            <input 
                                type="radio"
                                name="score-type"
                                id="Standard Array"
                                value="Standard Array"
                                checked={scoreGenerationMethod === "Standard Array"}
                                onChange={changeScoreMethod}
                            />
                            <label htmlFor="Standard Array">Standard Array</label>
                        </div>
                        <div className="radio-score-selection">
                            <input 
                                type="radio"
                                name="score-type"
                                id="Random Generation"
                                value="Random Generation"
                                checked={scoreGenerationMethod === "Random Generation"}
                                onChange={changeScoreMethod}
                            />
                            <label htmlFor="Random Generation">Random Generation</label>
                        </div>
                        <div className="radio-score-selection">
                            <input 
                                type="radio"
                                name="score-type"
                                id="Point Cost"
                                value="Point Cost"
                                checked={scoreGenerationMethod === "Point Cost"}
                                onChange={changeScoreMethod}
                            />
                            <label htmlFor="Point Cost">Point Cost</label>
                        </div>
                    </form>
                    <div className="score-method-container">
                        {scoreGenerationMethod === "Standard Array" && standardArrayBlock}
                        {scoreGenerationMethod === "Random Generation" && randomGenerationBlock}
                        {scoreGenerationMethod === "Point Cost" && pointCostBlock}
                        <button className="btn-alt" onClick={resetAbilityScores}>Reset scores</button> 
                    </div>
                </div>
                <div className="ability-score-grid">
                    {abilityScoreElements}
                </div>
            </div>
        </>
    )
}