import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'

export default function About(){

    const { character, updateCharacter, alignments, lifestyles } = useContext(CreationContext)

    const alignmentElements = alignments.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)
    const lifestyleElements = lifestyles.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)

    const chosenLifestyle = lifestyles.filter(el => el.id == character.lifestyle)[0]

    // Handles string updates to character in Creation Context
    function handleSubmit(e){
        updateCharacter(e.target.name, e.target.value)
    }

    // Handles ID updates to character in Creation Context
    function handleIDSubmit(e) {
        updateCharacter(e.target.name, parseInt(e.target.value))
    }

    return (
        <>
            <h2>About info</h2>
            <form>

                {/* **** CHARACTER SECTION **** */}
                <fieldset className="fieldset-container">
                    <legend>Character</legend>

                {/* CHARACTER NAME */}
                    <label htmlFor="name">Character Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        onChange={handleSubmit} 
                        value={character.name}
                        placeholder="Enter your character's name"
                    >
                    </input>
                
                {/* PRONOUNS */}
                    <label htmlFor="pronouns">Pronouns:</label>
                    <input 
                        type="text" 
                        name="pronouns" 
                        onChange={handleSubmit} 
                        value={character.pronouns} 
                        placeholder="Enter your character's pronouns"
                    >
                    </input>

                {/* ALIGNMENT */}
                    <label htmlFor="alignment">
                        Alignment: <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                                        <span className="tooltiptext">A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral).</span>
                                    </span>
                    </label>
                    <select id="alignment" name="alignment" onChange={handleIDSubmit} value={character.alignment}>
                        <option disabled selected>-- Select an alignment --</option>
                        {alignmentElements}
                    </select>

                {/* FAITH */}
                    <label htmlFor="faith">Faith:</label>
                    <input 
                        type="text" 
                        name="faith" 
                        onChange={handleSubmit} 
                        value={character.faith} 
                        placeholder="Enter your character's faith"
                    >
                    </input>
                
                {/* LIFESTYLE */}
                    <label htmlFor="lifestyle">
                        Lifestyle: <span className="tooltip"><i className="fa-solid fa-circle-info"></i>
                                        <span className="tooltiptext">Lifestyle expenses summarize the cost of living in a fantasy world. They cover lodging, food, equipment maintenance, and other necessities.</span>
                                    </span>
                    </label>
                    <select id="lifestyle" name="lifestyle" onChange={handleIDSubmit} value={character.lifestyle}>
                        <option disabled selected>-- Select a lifestyle --</option>
                        {lifestyleElements}
                    </select>
                    {character.lifestyle ? <div className="selection-detail font-Roboto">
                        {chosenLifestyle.description} (<strong>{chosenLifestyle.cost_per_day} {chosenLifestyle.denomination}</strong> per day)
                        </div> : ""}
                </fieldset>
                
                {/* **** PHYSICAL CHARACTERISTICS SECTION **** */}
                <fieldset className="fieldset-container-grid">
                    <legend>Physical Characteristics</legend>

                {/* AGE */}
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
                
                {/* HEIGHT */}
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

                {/* WEIGHT */}
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

                {/* EYES */}
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

                {/* SKIN */}
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

                {/* HAIR */}
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

                {/* GENDER */}
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

                {/* **** PERSONAL CHARACTERISTICS SECTION **** */}
                <fieldset className="fieldset-container">
                    <legend>Personal Characteristics</legend>
                {/* bonds, flaws, ideals, personality traits */}
                        <label htmlFor="bonds">Bonds:</label>
                        <textarea
                            name="bonds" 
                            onChange={handleSubmit} 
                            value={character.bonds} 

                            placeholder="Describe your bonds with others..."
                        ></textarea>

                {/* FLAWS */}
                        <label htmlFor="flaws">Flaws:</label>
                        <textarea 
                            name="flaws" 
                            onChange={handleSubmit} 
                            value={character.flaws} 
                            placeholder="Describe your character's flaws..."
                        ></textarea>

                {/* IDEALS */}
                        <label htmlFor="ideals">Ideals:</label>
                        <textarea 
                            name="ideals" 
                            onChange={handleSubmit} 
                            value={character.ideals} 
                            placeholder="Describe your character's ideals..."
                        ></textarea>    

                {/* PERSONALITY TRAITS */}
                        <label htmlFor="traits">Traits:</label>
                        <textarea 
                            name="traits" 
                            onChange={handleSubmit} 
                            value={character.traits} 
                            placeholder="Describe your character's personality traits..."
                        ></textarea>    
                </fieldset>

                {/* **** lANGUAGES SECTION **** */}
                <fieldset className="fieldset-container-grid">
                    <legend>Languages</legend>
                    {/* known, choose */}
                </fieldset>

                {/* **** NOTES SECTION **** */}
                <fieldset className="fieldset-container-grid">
                    <legend>Notes</legend>
                    {/* organizations, allies, enemeis, backstory, other */}
                </fieldset>
            </form>
        </>
    )
}