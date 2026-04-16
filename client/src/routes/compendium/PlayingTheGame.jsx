import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'

export default function PlayingTheGame(){

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Playing the Game</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Rhythm of Play</NavLink>
                    <NavLink to="the_six_abilities" className={({isActive}) => isActive ? "side-menu-active-link" : null}>The Six Abilities</NavLink>
                    <NavLink to="d20_tests" className={({isActive}) => isActive ? "side-menu-active-link" : null}>D20 Tests</NavLink>
                    <NavLink to="proficiency" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Proficiency</NavLink>
                    <NavLink to="actions" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Actions</NavLink>
                    <NavLink to="social_interaction" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Social Interaction</NavLink>
                    <NavLink to="exploration" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Exploration</NavLink>
                    <NavLink to="combat" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Combat</NavLink>
                    <NavLink to="damage_and_healing" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Damage and Healing</NavLink>
                </div>
                <section className="gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}