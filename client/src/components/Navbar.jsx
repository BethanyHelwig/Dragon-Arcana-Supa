import { useContext, useState } from "react"
import { useNavigate, Link, NavLink } from "react-router-dom"
import { ThemeContext } from "./ThemeProvider"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {

    // state values
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [ error, setError ] = useState(null)
    const { signOut, session } = useAuth()

    const navigate = useNavigate()

    const handleSignOut = async (e) => {
        e.preventDefault()

        const { success, error } = await signOut()
        if (success) {
            navigate('/')
        } else {
            setError(error.message)
        }
    }

    const profileContainer = () => {
        return (
            <li>
                <div id="profile-link-div">
                    {session.user.user_metadata.username}
                    <div id="profile-dropdown-menu">
                        <NavLink to="profile" className={({isActive}) => isActive ? "active-link" : null}>
                            View Profile <i className="fa-solid fa-gear"></i>
                        </NavLink>
                        <button onClick={handleSignOut} aria-label="Sign out of your account">Sign out</button>
                    </div>
                </div>
            </li>
        )
    }


    return (
        <nav>
            <Link to="/" className="logo-link">
                <img id="nav-logo" src={theme === 'dark' ? "/logo_dark_mode.png" : "/logo_light_mode.png"} />
                <h2 id="nav-title">Dragon Arcana</h2>
            </Link>
            <button className="hamburger" data-btn="hamburger">&#9776;</button>
            <ul className="nav-links">
                <li>
                    <NavLink to="characters" className={({isActive}) => isActive ? "active-link" : null}>
                        Characters <i className="fa-solid fa-user"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="games" className={({isActive}) => isActive ? "active-link" : null}>
                        Games <i className="fa-solid fa-dice-d20"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="friends" className={({isActive}) => isActive ? "active-link" : null}>
                        Friends <i className="fa-solid fa-user-group"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="compendium" className={({isActive}) => isActive ? "active-link" : null}>
                        Compendium <i className="fa-solid fa-book-atlas"></i>
                    </NavLink>
                </li>
                {session && (
                    <li>
                        <NavLink to="dashboard" className={({isActive}) => isActive ? "active-link" : null}>
                            Dashboard
                        </NavLink>
                    </li>
                )}
                {session && profileContainer()}
                
                <li>
                    <button id="theme-toggle-btn" onClick={toggleTheme}>
                        {theme === 'light'? 
                            <i className="fa-solid fa-moon"></i> :
                            <i className="fa-solid fa-sun"></i>
                        }
                    </button>
                </li>
            </ul>
        </nav>
    )
}