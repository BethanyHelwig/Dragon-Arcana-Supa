import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useApiStore } from '../store/useApiStore'

export default function CharacterSheet(){

    const { id } = useParams()
    const { getSelectedCharacter, isSelectedCharacterLoading, selectedCharacter } = useApiStore()

    useEffect(() => {
        getSelectedCharacter(id)
    }, [])

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
                                    <p>{selectedCharacter[0].character_class.full_name} 5</p>
                                    <h4 className="overline">CLASS & LEVEL</h4>
                                </div>
                                <div>
                                    <p>Soldier</p>
                                    <h4 className="overline">BACKGROUND</h4>
                                </div>
                                <div>
                                    <p>Phoenix Verus</p>
                                    <h4 className="overline">PLAYER NAME</h4>
                                </div>
                                <div>
                                    <p>Elf</p>
                                    <h4 className="overline">RACE</h4>
                                </div>
                                <div>
                                    <p>Chaotic Evil</p>
                                    <h4 className="overline">ALIGNMENT</h4>
                                </div>
                                <div>
                                    <p>9000</p>
                                    <h4 className="overline">EXPERIENCE POINTS</h4>
                                </div>
                            </div>
                        </div>
                    <hr className="divider"></hr>

                    {/* ABILITY SCORES */}
                    <div className="flex-column">
                        <div>
                            <div className="ability-score-display">
                                <h4>DEXTERITY</h4>
                                <div className="ability-score-modifier">
                                    <h3>+1</h3>
                                </div>
                                <div className="ability-score-number">
                                    <span>13</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SKILLS */}

                    {/* ATTACKS, SPELLS, INVENTORY */}

                    {/* PERSONAL, TRAITS */}

                </div>
            </>
            }
        </main>
    )
}