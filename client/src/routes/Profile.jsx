import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile(){

    const { session } = useAuth()

    return (
        <main className="gradient-border">
            <h1 className="title-glow">Profile</h1>
            <div className="flex-row">
                <div className="profile-avatar">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div id="profile-content-div">
                    <h2>{session.user.user_metadata.username}</h2>
                    <p><strong>Email:</strong> {session.user.email}</p>
                    <p><strong>Account Created:</strong> {session.user.created_at}</p>
                </div>
            </div>
        </main>
    )
}