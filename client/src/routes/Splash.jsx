import { useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { ThemeContext } from "../components/ThemeProvider"

export default function Splash(){

    const { theme, toggleTheme } = useContext(ThemeContext)
    const { session } = useAuth()

    return (
        <main id="splash-page">
            <div className="flex-row">
                <div className="flex-column">
                    <h1>Play Dungeons & Dragons online</h1>
                    <Link className="btn-lookalike" to="/register">Sign up for free</Link>
                    {!session && 
                        <Link className="btn-lookalike" to="/login">Sign in</Link>
                    }
                </div>
                <img src={theme === 'dark' ? "/src/assets/logo_dark_mode.png" : "/src/assets/logo_light_mode.png"} width="300px" height="100%" />
            </div>
            <h2>What's New</h2>
            <div className="whats-new-content">
                <h3>Welcome to Dragon Arcana!</h3>
                <em>11.20.2025</em>
                <p>Authentication is up!</p>
            </div>
        </main>
    )
}