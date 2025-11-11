import React from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "./ThemeProvider"

export default function Navbar() {

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    return (
        <nav>
            <Link to="/" className="logo-link">
                <img id="nav-logo" src={theme === 'dark' ? "/src/assets/logo_dark_mode.png" : "/src/assets/logo_light_mode.png"} />
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
                    <NavLink to="search" className={({isActive}) => isActive ? "active-link" : null}>
                        World of D&D <i className="fa-solid fa-book-atlas"></i>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="profile" className={({isActive}) => isActive ? "active-link" : null}>
                        Profile <i className="fa-solid fa-gear"></i>
                    </NavLink>
                </li>
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