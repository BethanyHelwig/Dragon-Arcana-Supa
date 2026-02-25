import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function About(){

    const { character, updateCharacter, alignments, lifestyles } = useContext(CreationContext)

    const alignmentElements = alignments.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)
    const lifestyleElements = lifestyles.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)

    const chosenLifestyle = lifestyles.filter(el => el.full_name == character.lifestyle)[0]

    console.log(chosenLifestyle)

    function handleSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    return (
        <>
            <h2>About info</h2>
            <form onSubmit={handleSubmit}>
                <fieldset className="fieldset-container">
                    <legend>Character</legend>
                    <label htmlFor="name">Character Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleSubmit} 
                        value={character.name}
                        placeholder="Enter your character's name"
                    >
                    </input>
                    <label htmlFor="pronouns">Pronouns:</label>
                    <input 
                        type="text" 
                        name="pronouns" 
                        onChange={handleSubmit} 
                        value={character.pronouns} 
                        placeholder="Enter your character's pronouns"
                    >
                    </input>
                    <label htmlFor="alignment">
                        Alignment: <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                                        <span className="tooltiptext">A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral).</span>
                                    </span>
                    </label>
                    <select id="alignment" name="alignment" onChange={handleSubmit} value={character.alignment}>
                        <option disabled selected>-- Select an alignment --</option>
                        {alignmentElements}
                    </select>
                    <label htmlFor="faith">Faith:</label>
                    <input 
                        type="text" 
                        name="faith" 
                        onChange={handleSubmit} 
                        value={character.faith} 
                        placeholder="Enter your character's faith"
                    >
                    </input>
                    <label htmlFor="lifestyle">
                        Lifestyle: <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                                        <span className="tooltiptext">Lifestyle expenses summarize the cost of living in a fantasy world. They cover lodging, food, equipment maintenance, and other necessities.</span>
                                    </span>
                    </label>
                    <select id="lifestyle" name="lifestyle" onChange={handleSubmit} value={character.lifestyle}>
                        <option disabled selected>-- Select a lifestyle --</option>
                        {lifestyleElements}
                    </select>
                    {character.lifestyle ? (
                        <div className="selection-detail">
                            {chosenLifestyle.description} (<strong>{chosenLifestyle.cost_per_day} {chosenLifestyle.denomination}</strong> per day)
                        </div>

                    ) : ""}
                </fieldset>
                
                <fieldset className="fieldset-container-grid">
                    <legend>Physical Characteristics</legend>
                    <div className="flex-column">
                        <label htmlFor="age">Age:</label>
                        <input 
                            type="text" 
                            name="age" 
                            onChange={handleSubmit} 
                            value={character.age}
                            placeholder="Enter your character's age"
                        >
                        </input>
                    </div>
                    <div className="flex-column">
                        <label htmlFor="height">Height:</label>
                        <input 
                            type="text" 
                            name="height" 
                            onChange={handleSubmit} 
                            value={character.height} 
                            placeholder="Enter your height..."
                        ></input>
                    </div>
                    <div className="flex-column">
                        <label htmlFor="weight">Weight:</label>
                        <input 
                            type="text" 
                            name="weight" 
                            onChange={handleSubmit} 
                            value={character.weight} 
                            placeholder="Enter your weight..."
                        ></input>
                    </div>
                    <div className="flex-column">
                        <label htmlFor="eyes">Eyes:</label>
                        <input 
                            type="text" 
                            name="eyes" 
                            onChange={handleSubmit} 
                            value={character.eyes} 
                            placeholder="Describe your eyes..."
                        ></input>
                    </div>
                    <div className="flex-column">
                        <label htmlFor="skin">Skin:</label>
                        <input 
                            type="text" 
                            name="skin" 
                            onChange={handleSubmit} 
                            value={character.skin} 
                            placeholder="Describe your skin..."
                        ></input>
                    </div>
                    <div className="flex-column">
                        <label htmlFor="hair">Hair:</label>
                        <input 
                            type="text" 
                            name="hair" 
                            onChange={handleSubmit} 
                            value={character.skin} 
                            placeholder="Describe your hair..."
                        ></input>
                    </div>
                        <div className="flex-column">
                        <label htmlFor="gender">Gender:</label>
                        <input 
                            type="text" 
                            name="gender" 
                            onChange={handleSubmit} 
                            value={character.gender} 
                            placeholder="Enter your gender..."
                        ></input>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Personal Characteristics</legend>
                </fieldset>

                <fieldset>
                    <legend>Languages</legend>
                </fieldset>

                <fieldset>
                    <legend>Notes</legend>
                </fieldset>
            </form>
        </>
    )
}