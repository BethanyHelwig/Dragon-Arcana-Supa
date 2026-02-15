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

        console.log(usersSavedCharacters)
    }, [session])

    return (
        <main id="characters-main-page" className="width-80">
            <h1 className="title-glow">Characters</h1>
            <Link to="/character_creation" className="btn-lookalike">Create new character</Link>
            <div className="gradient-border width-100">
                <h2>Saved Characters</h2>
                {usersSavedCharacters === null && <p>You have no saved characters yet. Create some!</p>}
                {isSavedCharactersLoading && <i class="fa-solid fa-spinner spinning-icon"></i>}
                {usersSavedCharacters.map((character) => (
                    <div className="flex-row saved-character" key={character.id}>
                        <div className="saved-character-image">
                            <i class="fa-solid fa-circle-user"></i>
                        </div>
                        <div className="saved-character-summary">
                            <h3>{character.name}</h3>
                            <p>Class</p>
                            <p>Level</p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}