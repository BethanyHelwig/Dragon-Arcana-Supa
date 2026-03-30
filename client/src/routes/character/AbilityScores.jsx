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

    const [ randomGenerationResults, setRandomGenerationResults ] = useState([])
    const [ pointsAvailable, setpointsAvailable ] = useState(27)

    const randomGenerationResultsElements = randomGenerationResults.map(el => {return <div><p>{el}</p></div>})

    // ... Text and choices for each method of calculating ability scores
    const standardArrayBlock = 
        <div>
            <p>The Standard Array method uses a set of scores for you to choose from. Use the following six scores for your abilities: 15, 14, 13, 12, 10, 8.</p>
        </div>

    const randomGenerationBlock =
        <div>
            <p>In the Random Generation method, for each score you roll four d6s, drop the lowest roll, and total the rest.</p>
            <h3>Roll to generate scores:</h3>
            <button onClick={randomGeneration}><span><i className="fa-solid fa-dice"></i> Roll!</span></button>
            <p>{randomGenerationResultsElements}</p>
        </div>

    const pointCostBlock = 
            <div>
                <p>The Point Cost method gives you 27 points which you allocate to your chosen abilities. <strong>You cannot raise a score above 20.</strong></p>
                <h3>Points remaining:</h3>
                <span className="points-available">{pointsAvailable}</span>
            </div>
    // ... end

    // Array of clickable available scores used within each ability score block
    const scoresArrayElements = generatedScores.map(el => {
        return (
            <button onClick={(e) => assignScore(el.id, el.score, e)} key={"btn" + el.id} disabled={el.ability !== null ? "{false}" : ""}>
                {el.score}
            </button>
        )
    })

    // Maps over each ability score and creates an ability score block
    const abilityScoreElements = abilityScores.map(el => {

        const { full_name, name, description } = el

        return (
            <div key={full_name} data-key={full_name.toLowerCase()} className="ability-score-container">
                <div className="ability-score-header-container">
                    <h3>{full_name}</h3>
                    {/* TODO: have the tooltip adjust so it's always within the viewport and doesn't overflow */}
                    <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                        <span className="tooltiptext">{description}</span>
                    </span>
                </div>
                {scoreGenerationMethod !== "Point Cost" ? <div 
                    className={"ability-score-selection-div" + (generatedScores.some(el => el.ability === full_name.toLowerCase()) ? " div-disabled" : "")}
                    >
                        {scoresArrayElements}
                    </div>
                    :
                    <div className="point-cost-selection-div">
                        <button onClick={() => updateScore(full_name, 1)} disabled={pointsAvailable > 0 ? "" : "{false}"}>+</button>
                        <span>{getPointsUsed(full_name)}</span>
                        <button onClick={() => updateScore(full_name, -1)}>-</button>
                    </div>
                }


                <div className="ability-score-display">
                    <div className="ability-score-modifier">
                        <h3>{getModifier(full_name)}</h3>
                    </div>
                    <span>{name.toUpperCase()}</span>
                    <div className="ability-score-number">
                        <span>{getScore(full_name)}</span>
                    </div>
                </div>
            </div>
        )
    })

    // Updates an ability score's score, checking point limit
    function updateScore(abilityName, value){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        const newValue = result.score + value
        // also need to check against total points used
        if (newValue <= 20 && newValue >= 8 && pointsAvailable >= 0){
            setGeneratedScores(
                prev => prev.map((el) => {
                    if (el.id === result.id){
                        return {...el, score: newValue}
                    }
                    return el
                })
            )
            setpointsAvailable(prev => {
                if (prev - value > 27){
                    return 27
                }
                else if (prev - value < 0)
                {
                    return 0
                }
                else
                    return prev - value
            })
        }
    }

    // Gets any assigned abilities scores from character in Creation Context
    function getScore(abilityName){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        //console.log(result)
        if (result !== undefined) {
            return result.score
        }
        return "-"
    }

    // Calculates the modifier for an ability score
    function getModifier(abilityName){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        //console.log(result)
        if (result !== undefined) {
            const modifier = Math.floor((result.score - 10) / 2)
            return `${modifier > 0 ? "+" : ""}${modifier}`
        }
        return "-"
    }

    // Determines how many points have already been used for an ability score
    function getPointsUsed(abilityName){
        const result = generatedScores.find(el => {return el.ability === abilityName.toLowerCase()})
        if (result !== null) {
            return result.score - 8
        }
        return 0
    }

    // function handleSubmit(e){
    //     updateCharacter(e.target.name, e.target.value)
    // }

    // Changes what the set method is for determining ability scores
    function changeScoreMethod(e){
        setScoreGenerationMethod(e.target.value)
        resetGeneratedScores(e.target.value)
    }

    // Assigns a score to an ability
    function assignScore(id, score, e){
        const ability = e.target.parentElement.parentElement.getAttribute("data-key")
        //console.log(id, score, ability)
        setGeneratedScores(
            prev => prev.map((el) => {
                if (el.id === id) { 
                    return {...el, ability: ability}
                }
                return el
            })
        )
        const some = generatedScores.some(el => el.ability === ability.toLowerCase())
        //console.log(some)
    }

    // Resets the generated scores to base values for each method
    function resetGeneratedScores(e){
        console.log(e.type)
        console.log(e)
        const switchArgument = e.type === "click" ? scoreGenerationMethod : e

        switch (switchArgument) {
            case "Standard Array" :
                setGeneratedScores([
                    {id: 1, score: 15, ability: null},
                    {id: 2, score: 14, ability: null},
                    {id: 3, score: 13, ability: null},
                    {id: 4, score: 12, ability: null},
                    {id: 5, score: 10, ability: null},
                    {id: 6, score: 8, ability: null},
                ])
                break;
            case "Random Generation":
                setGeneratedScores([
                    {id: 1, score: 0, ability: null},
                    {id: 2, score: 0, ability: null},
                    {id: 3, score: 0, ability: null},
                    {id: 4, score: 0, ability: null},
                    {id: 5, score: 0, ability: null},
                    {id: 6, score: 0, ability: null},
                ])
                setRandomGenerationResults([])
                break;
            case "Point Cost":
                setGeneratedScores([
                    {id: 1, score: 8, ability: "charisma"},
                    {id: 2, score: 8, ability: "constitution"},
                    {id: 3, score: 8, ability: "dexterity"},
                    {id: 4, score: 8, ability: "intelligence"},
                    {id: 5, score: 8, ability: "strength"},
                    {id: 6, score: 8, ability: "wisdom"},
                ])
                setpointsAvailable(27)
                break;
        }
    }

    // Resets the array of score available and then randomly generates new scores to assign
    function randomGeneration(){

        setGeneratedScores([
            {id: 1, score: 0, ability: null},
            {id: 2, score: 0, ability: null},
            {id: 3, score: 0, ability: null},
            {id: 4, score: 0, ability: null},
            {id: 5, score: 0, ability: null},
            {id: 6, score: 0, ability: null},
        ])

        let fullString = []
        for (let i = 1; i < 7; i++){
            let rollArray = []
            for (let j = 0; j < 4; j++){
                let roll = Math.floor(Math.random() * (6 - 1 + 1)) + 1 
                rollArray.push(roll)
            }
            let lowRoll = Math.min(...rollArray)
            let total = rollArray.reduce((acc, currentValue) => acc + currentValue, 0) - lowRoll
            console.log("Total:= " + total)
            setGeneratedScores(
                prev => prev.map((el) => {
                    if (el.id === i) { 
                        return {...el, score: total}
                    }
                    return el
                })
            )
            fullString.push(rollArray.join(" + ") + " ( - " + lowRoll + ") = " + total)
        }
        setRandomGenerationResults(fullString)
    }

    return (
        <>
            <h2>Ability Scores</h2>
            <div className="flex-row">
                <div>
                    <h3>Choose how to generate your scores:</h3>
                    <form>
                        <div className="selection">
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
                        <div className="selection">
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
                        <div className="selection">
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
                    <div className="score-method-container font-Roboto">
                        {scoreGenerationMethod === "Standard Array" && standardArrayBlock}
                        {scoreGenerationMethod === "Random Generation" && randomGenerationBlock}
                        {scoreGenerationMethod === "Point Cost" && pointCostBlock}
                        <button className="btn-alt" onClick={resetGeneratedScores}>Reset scores</button> 
                    </div>
                </div>
                <div className="ability-score-grid">
                    {abilityScoreElements}
                </div>
            </div>
        </>
    )
}