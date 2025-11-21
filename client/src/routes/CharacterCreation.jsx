import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

export default function CharacterCreation(){

    return (
        <main>
            <h1 className="title-glow">Character Creation</h1>
            <section>
                <div className="submenu">
                    <NavLink to="." end className={({isActive}) => isActive ? "submenu-active-link" : null}>Base</NavLink>
                    <NavLink to="ability_scores" className={({isActive}) => isActive ? "submenu-active-link" : null}>Ability Scores</NavLink>
                    <NavLink to="skills" className={({isActive}) => isActive ? "submenu-active-link" : null}>Skills</NavLink>
                    <NavLink to="background" className={({isActive}) => isActive ? "submenu-active-link" : null}>Background</NavLink>
                    <NavLink to="about" className={({isActive}) => isActive ? "submenu-active-link" : null}>About</NavLink>
                </div>
                <div className="gradient-border">
                    <Outlet />
                </div>
            </section>
        </main>
    )
}