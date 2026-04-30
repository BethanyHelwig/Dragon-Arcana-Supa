import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContext } from '../../context/CreationContext'
import { toast } from 'react-hot-toast'

export default function About(){

    const { 
        character, 
        updateCharacter, 
        alignments, 
        lifestyles, 
        languages, 
        updateArrayInCharacter 
    } = useContext(CreationContext)

    const alignmentElements = alignments.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)
    const lifestyleElements = lifestyles.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)
    //const languageElements = languages.map(el => <option key={el.full_name} value={el.id}>{el.full_name}</option>)

    const chosenLifestyle = lifestyles.filter(el => el.id == character.lifestyle)[0]

    const languageStandardElements = languages.map(el => {
        if(el.type === "Standard"){
            return (
                <div key={el.full_name} className="selection">
                    <input 
                        type="checkbox"
                        name="languages"
                        id={el.full_name}
                        value={el.full_name}
                        checked={character.languages.includes(el.full_name)}
                        onChange={(e) => handleLanguageSubmit(e)}
                    />
                    <label htmlFor={el.full_name}>{el.full_name}</label>
                </div>
            )
        }
    })

    const languageRareElements = languages.map(el => {
        if(el.type === "Rare"){
            return (
                <div key={el.full_name} className="selection">
                    <input 
                        type="checkbox"
                        name="languages"
                        id={el.full_name}
                        value={el.full_name}
                        checked={character.languages.includes(el.full_name)}
                        onChange={handleLanguageSubmit}
                    />
                    <label htmlFor={el.full_name}>{el.full_name}</label>
                </div>
            )
        }
    })

    // Handles and checks proficiencies tied to class selection
    function handleLanguageSubmit(e){
        console.log("Calling handleLanguageSubmit")
        if(character[e.target.name].length >= 2) {
            if(character[e.target.name].includes(e.target.value)){
                console.log("Allowance met but removing item.")
                updateArrayInCharacter(e.target.name, e.target.value)
            }
            else {
                console.log("No more options left for languages.")
                toast.error(`Cannot select more than 2 languages.`)
            }
        } else {
            console.log("Submitting languages update to character.")
            updateArrayInCharacter(e.target.name, e.target.value)
        } 
    }

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
                                        <span className="tooltip_text">A creature’s alignment broadly describes its ethical attitudes and ideals. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward order (lawful, chaotic, or neutral).</span>
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
                                        <span className="tooltip_text">Lifestyle expenses summarize the cost of living in a fantasy world. They cover lodging, food, equipment maintenance, and other necessities.</span>
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
                <fieldset className="fieldset-container">
                    <legend>Languages</legend>
                {/* KNOWN LANGUAGES */}
                    <label>Known Languages: <span className="font-Roboto">Common</span></label>
                {/* CHOOSE TWO LANGUAGES */}
                    <label htmlFor="language">Languages (Choose Two):</label>
                    <div className="skill-selection">
                        <h4>Standard:</h4>
                        <div className="two-col">
                            {languageStandardElements}
                        </div>
                        <h4>Rare:</h4>
                        <div className="two-col">
                            {languageRareElements}
                        </div>
                    </div>
                    {/* <select id="language" name="language" onChange={handleIDSubmit} multiple>
                        <option disabled selected>-- Select a language --</option>
                        {languageElements}
                    </select> */}
                </fieldset>

                {/* **** NOTES SECTION **** */}
                <fieldset className="fieldset-container">
                    <legend>Notes</legend>
                    {/* enemies, backstory, other */}

                {/* ORGANIZATIONS */}
                    <label htmlFor="organizations">Organizations:</label>
                    <textarea 
                        name="organizations" 
                        onChange={handleSubmit} 
                        value={character.organizations} 
                        placeholder="What organizations do you belong to?"
                    ></textarea> 

                {/* ALLIES */}
                    <label htmlFor="allies">Allies:</label>
                    <textarea 
                        name="allies" 
                        onChange={handleSubmit} 
                        value={character.allies} 
                        placeholder="Who are your allies?"
                    ></textarea>  

                {/* ENEMIES */}
                    <label htmlFor="enemies">Enemies:</label>
                    <textarea 
                        name="enemies" 
                        onChange={handleSubmit} 
                        value={character.enemies} 
                        placeholder="Who are your enemies?"
                    ></textarea>  

                {/* BACKSTORY */}
                    <label htmlFor="backstory">Backstory:</label>
                    <textarea 
                        name="backstory" 
                        onChange={handleSubmit} 
                        value={character.backstory} 
                        placeholder="What's your backstory?"
                    ></textarea> 

                {/* OTHER */}
                    <label htmlFor="other">Other:</label>
                    <textarea 
                        name="other" 
                        onChange={handleSubmit} 
                        value={character.other} 
                        placeholder="Anything else?"
                    ></textarea> 
                </fieldset>
            </form>
        </>
    )
}