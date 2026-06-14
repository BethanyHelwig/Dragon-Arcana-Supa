import { useContext } from 'react'
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from '../context/AuthContext'
import { ThemeContext } from "../components/ThemeProvider"
import { motion } from "framer-motion"

export default function Splash(){

    const { theme } = useContext(ThemeContext)
    const { session } = useAuth()

    return (
        <main id="splash-page">
            <div className="flex-row">
                <div className="flex-column">
                    <h1>Play Dungeons & Dragons online</h1>
                    <p>Welcome, adventurer! This site uses the 5.5e (2024 revised) ruleset of Dungeons & Dragons.
                        If you're not sure where to start, check out the Compendium!
                    </p>
                    {session && <Link className="btn-lookalike" to="/dashboard">Go to your Dashboard</Link>}
                    {!session && 
                        <>
                            <Link className="btn-lookalike" to="/register">Sign up for free</Link>
                            <Link className="btn-lookalike" to="/login">Sign in</Link>
                        </>
                    }
                </div>
                <motion.img
                    src={theme === 'dark' ? "/logo_dark_mode.png" : "/logo_light_mode.png"}
                    width="300px"
                    height="100%"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
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