import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile(){

    const { session } = useAuth()

    return (
        <main className="width-100">
            <h1 className="title-glow">Profile</h1>
            <div className="gradient-border flex-row">
                <div className="saved-character-image">
                    <i className="fa-solid fa-circle-user"></i>
                </div>
                <div id="profile-content-div">
                    <h2>{session.user.user_metadata.username}</h2>
                    <p><strong>Email:</strong> {session.user.email}</p>
                    <p><strong>Account Created:</strong> {new Date(session.user.created_at).toLocaleDateString()}</p>
                </div>
            </div>
        </main>
    )
}