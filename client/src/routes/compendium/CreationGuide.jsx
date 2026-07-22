import { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { Collapsible } from '../../components/Collapsible'

export default function CreationGuide(){

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Character Creation Guide</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Overview</NavLink>
                    <NavLink to="create_your_character" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Create Your Character</NavLink>
                    <NavLink to="level_advancement" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Level Advancement</NavLink>
                    <NavLink to="starting_at_higher_levels" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Starting at Higher Levels</NavLink>
                    <NavLink to="multiclassing" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Multiclassing</NavLink>
                    <NavLink to="trinkets" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Trinkets</NavLink>
                </div>
                <section className="compendium-content gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}