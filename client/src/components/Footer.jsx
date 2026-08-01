import { Link } from 'react-router-dom'
import { ThemeContext } from "./ThemeProvider"
import { useContext } from "react"

export default function Footer() {
    const { theme } = useContext(ThemeContext)

    return (
        <footer>
            <div className="footer--three-col">
                <div>
                    <div className="footer--logo">
                        <Link to="/" className="logo-link">
                            <img id="footer-logo" src={theme === 'dark' ? "/logo_dark_mode.png" : "/logo_light_mode.png"} alt="Dragon Aracana logo" />
                            <h2 id="nav-title">Dragon Arcana</h2>
                        </Link>
                    </div>
                </div>
                <div className="footer--middle-col">
                    <ul className="footer--list">
                        <li><h4>SITE LINKS</h4></li>
                        <li><Link to="characters">Characters</Link></li>
                        <li><Link to="games">Games</Link></li>
                        <li><Link to="friends">Friends</Link></li>
                        <li><Link to="compendium">Compendium</Link></li>
                        <li><Link to="profile">Profile</Link></li>
                    </ul>
                </div>
                <div>
                    <p>
                        <a href="https://www.freepik.com/free-photo/grungy-beige-marble-textured-background_17118584.htm#fromView=search&page=1&position=3&uuid=4b564eca-fc22-4d57-bb41-e80cfcab914c&query=marble" target="_blank">
                            Background marble image by rawpixel.com on Freepik
                        </a>
                    </p>
                    <p>This work includes material from the System Reference Document 5.2.1 (“SRD 5.2.1”) by Wizards of the
                        Coast LLC, available at https://www.dndbeyond.com/srd. The SRD 5.2.1 is licensed under the Creative
                        Commons Attribution 4.0 International License, available at https://creativecommons.org/licenses/by/4.0/ legalcode.</p>
                    <p>&copy; 2026 Bethany Helwig</p>
                </div>
            </div>
        </footer>
    )
}