import React from 'react'
import { Link } from 'react-router-dom'

export default function Characters(){

    // fetch('http://127.0.0.1:8080/api/characters/retrieve_saved')

    return (
        <main id="characters-main-page">
            <h1 className="title-glow">Characters</h1>
            <Link to="/character_creation" className="btn-lookalike">Create new character</Link>
            <div className="gradient-border">
                <h2>Saved Characters</h2>
                <p>You have no saved characters yet. Create some!</p>
            </div>
        </main>
    )
}