import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import supabase from "../../supabase-client.js"
import { useAuth } from "../context/AuthContext.jsx"
import { useApiStore } from "../store/useApiStore.js"

export default function Characters(){

    const { session } = useAuth()
    const { getSavedCharacters, usersSavedCharacters, isSavedCharactersLoading } = useApiStore()

    useEffect(() => {

        console.log("Retreiving saved characters...")
        getSavedCharacters()

        //console.log(usersSavedCharacters)
    }, [session])

    return (
        <main id="characters-main-page" className="width-80">
            <h1 className="title-glow">Characters</h1>
            <Link to="/character_creation" className="btn-lookalike">Create new character</Link>
            <div className="gradient-border width-100">
                <h2>Saved Characters</h2>
                {usersSavedCharacters.length < 1 && !isSavedCharactersLoading && <p>You have no saved characters yet. Create some!</p>}
                {isSavedCharactersLoading && <i className="fa-solid fa-spinner spinning-icon"></i>}
                {usersSavedCharacters.map((character) => (
                    <Link to={`/characters/${character.id}`}>
                    <div className="flex-row saved-character" key={character.id}>
                        <div className="saved-character-image">
                            <i className="fa-solid fa-circle-user"></i>
                        </div>
                        <div className="saved-character-summary">
                            <h3>{character.name}</h3>
                            <p className="date-format">Created: {new Date(character.created_at).toLocaleDateString()}</p>
                            <p>
                                <strong>Class: </strong> 
                                {character.character_class.full_name 
                                    ? <span> {character.character_class.full_name} </span>
                                    : <span className="unselected">{"[unselected]"}</span>
                                }                                
                            </p>
                            <p>
                                <strong>Alignment: </strong> 
                                {character.alignment_id 
                                    ? <span> {character.alignment.full_name}</span>
                                    : <span className="unselected">{"[unselected]"}</span>
                                }
                            </p>
                            <p>
                                <strong>Species: </strong> 
                                {character.species 
                                    ? <span> {character.species.full_name} </span>
                                    : <span className="unselected">{"[unselected]"}</span>
                                }
                            </p>
                            <p>
                                <strong>Level: </strong> 
                                {character.level
                                    ? <span> {character.level} </span>
                                    : <span className="unselected">{"[unselected]"}</span>
                                }
                            </p>
                        </div>
                        
                    </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}