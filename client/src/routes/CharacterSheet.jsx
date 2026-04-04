import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useApiStore } from '../store/useApiStore'
import { useAuth } from "../context/AuthContext"

export default function CharacterSheet(){

    const { id } = useParams()
    const { getSelectedCharacter, isSelectedCharacterLoading, selectedCharacter } = useApiStore()
    const { session } = useAuth()

    const [ abilityScores, setAbilityScores ] = useState([])
    const [ skillList, setSkillList ] = useState([])

    useEffect(() => {
        getSelectedCharacter(id)
        console.log(selectedCharacter)
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/ability_score')
            .then(res => res.json())
            .then(data => {
                setAbilityScores(data)
            })
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/skill')
            .then(res => res.json())
            .then(data => {
                setSkillList(data)
            })
    }, [])

    const {
        age,
        alignment: { full_name: c_alignment },
        armor_class, // maybe just calculate this?
        background,
        character_class: { full_name: c_class },
        charisma,
        // class_id,
        constitution,
        dexterity,
        eyes,
        faith,
        gender,
        hair,
        height,
        // id,
        initiative,
        intelligence,
        languages, //array
        level,
        lifestyle,
        name,
        pronouns,
        skill_proficiencies, //array
        skin,
        species: { full_name: c_species },
        speed,
        strength,
        weight,
        wisdom,
    } = selectedCharacter[0]

    const skillsFormatted = skillList.map(el => {
        if(skill_proficiencies){
            return (
                <div className="flex-row">
                    <div className="cs-box">{skill_proficiencies.includes(el.full_name) ? "Yes" : "No"}</div>
                    <span>{el.full_name}</span>
                </div>
            )
        } else {
            return (
                <div className="flex-row">
                    <div className="cs-box">--</div>
                    <span>{el.full_name}</span>
                </div>
            )
        }
    })

    const savingThrowsFormatted = abilityScores.map(el => {
        // if(skill_proficiencies){
        //     return (
        //         <div className="flex-row">
        //             <div className="cs-box">{skill_proficiencies.includes(el.full_name) ? "Yes" : "No"}</div>
        //             <span>{el.full_name}</span>
        //         </div>
        //     )
        // } else {
            return (
                <div className="flex-row">
                    <div className="cs-box">--</div>
                    <span>{el.full_name}</span>
                </div>
            )
        // }
    })

    return (
        <main id="character-sheet-main">
            {isSelectedCharacterLoading && <i className="fa-solid fa-spinner spinning-icon"></i>}
            {selectedCharacter &&    
            <>
                <div className="character-sheet gradient-border width-100">
                    {/* HEADER AREA */}
                    <div className="character-sheet-header">
                        <div className="flex-row">
                            <div className="saved-character-image">
                                <i className="fa-solid fa-circle-user"></i>
                            </div>
                            <div>
                                <h1 className="title-glow">{selectedCharacter[0].name}</h1>
                                {/* <i className="fa-solid fa-pen-to-square"></i> */}
                                <h4>CHARACTER NAME</h4>
                            </div>
                        </div>
                        <div className="character-sheet-grid-header">
                                <div>
                                    <p>{c_class} {level}</p>
                                    <h4 className="overline">CLASS & LEVEL</h4>
                                </div>
                                <div>
                                    <p>{background}</p>
                                    <h4 className="overline">BACKGROUND</h4>
                                </div>
                                <div>
                                    <p>{session.user.user_metadata.username}</p>
                                    <h4 className="overline">PLAYER NAME</h4>
                                </div>
                                <div>
                                    <p>{c_species}</p>
                                    <h4 className="overline">RACE</h4>
                                </div>
                                <div>
                                    <p>{c_alignment}</p>
                                    <h4 className="overline">ALIGNMENT</h4>
                                </div>
                                <div>
                                    {/* TODO: work on experience points implementation */}
                                    <p></p>
                                    <h4 className="overline">EXPERIENCE POINTS</h4>
                                </div>
                            </div>
                        </div>
                    <hr className="divider"></hr>

                    {/* TODO: put this is iterative pattern, calculate modifier */}
                    <div className="flex-row">
                        {/* ABILITY SCORES */}
                        <div className="flex-column">
                            <div>
                                <div className="ability-score-display">
                                    <h4>STRENGTH</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{strength}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ability-score-display">
                                    <h4>DEXTERITY</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{dexterity}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ability-score-display">
                                    <h4>CONSTITUTION</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{constitution}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ability-score-display">
                                    <h4>INTELLIGENCE</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{intelligence}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ability-score-display">
                                    <h4>WISDOM</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{wisdom}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="ability-score-display">
                                    <h4>CHARISMA</h4>
                                    <div className="ability-score-modifier">
                                        <h3>+1</h3>
                                    </div>
                                    <div className="ability-score-number">
                                        <span>{charisma}</span>
                                    </div>
                                </div>
                            </div>
                                                        <div className="flex-col cs-box">
                                <span>Saving Throws</span>
                                {savingThrowsFormatted}
                            </div>
                        </div>

                        {/* SKILLS */}
                        <div className="flex-col">
                            <div className="flex-row cs-box">
                                <div>00</div>
                                <span>Inspiration</span>
                            </div>
                            <div className="flex-row cs-box">
                                <div>00</div>
                                <span>Proficiency Bonus</span>
                            </div>
                            <div className="flex-col cs-box">
                                <span>Skills</span>
                                {skillsFormatted}
                            </div>
                        </div>

                        <div>
                            <div className="flex-row">
                                <div className="flex-col cs-box">
                                    <div>00</div>
                                    <span>Armor Class</span>
                                </div>
                                <div className="flex-col cs-box">
                                    <div>00</div>
                                    <span>Initiative</span>
                                </div>
                                <div className="flex-col cs-box">
                                    <div>00</div>
                                    <span>Speed</span>
                                </div>
                            </div>
                            <div className="flex-col cs-box">
                                <div>00</div>
                                <span>Current Hit Points</span>
                            </div>
                        </div>
                    </div>

                    {/* ATTACKS, SPELLS, INVENTORY */}

                    {/* PERSONAL, TRAITS */}

                </div>
            </>
            }
        </main>
    )
}