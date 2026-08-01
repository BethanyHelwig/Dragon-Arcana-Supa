import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'

export default function SpellsCompendium(){
    return(
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Spells</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Gaining Spells</NavLink>
                    <NavLink to="casting_spells" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Casting Spells</NavLink>
                    <NavLink to="spell_descriptions" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Spell Descriptions</NavLink>
                </div>
                <section className="compendium-content gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}