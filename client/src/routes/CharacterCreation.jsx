import { useContext } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import { CreationContextProvider } from '../context/CreationContext'
import StatusOfCreation from './character/StatusOfCreation'

export default function CharacterCreation(){

    return (
        <main className="width-100">
            <h1 className="title-glow">Character Creation</h1>
            <section>
                <div className="submenu">
                    <NavLink to="." end className={({isActive}) => isActive ? "submenu-active-link" : null}>Class</NavLink>
                    <NavLink to="species" className={({isActive}) => isActive ? "submenu-active-link" : null}>Species</NavLink>
                    <NavLink to="background" className={({isActive}) => isActive ? "submenu-active-link" : null}>Background</NavLink>
                    <NavLink to="ability_scores" className={({isActive}) => isActive ? "submenu-active-link" : null}>Ability Scores</NavLink>
                    <NavLink to="skills" className={({isActive}) => isActive ? "submenu-active-link" : null}>Skills</NavLink>
                    <NavLink to="spells" className={({isActive}) => isActive ? "submenu-active-link" : null}>Spells</NavLink>
                    <NavLink to="about" className={({isActive}) => isActive ? "submenu-active-link" : null}>About</NavLink>
                </div>
                    <CreationContextProvider>
                        <div className="gradient-border creation-outlet-div">
                            <Outlet />
                        </div>
                        <StatusOfCreation />
                    </CreationContextProvider>
            </section>
        </main>
    )
}
