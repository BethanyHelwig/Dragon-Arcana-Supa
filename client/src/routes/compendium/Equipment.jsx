import { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { Collapsible } from '../../components/Collapsible'

export default function Equipment(){

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Equipment</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Adventuring Gear</NavLink>
                    <NavLink to="armor" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Armor</NavLink>
                    <NavLink to="brewing_potions" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Brewing Potions of Healing</NavLink>
                    <NavLink to="coins" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Coins</NavLink>
                    <NavLink to="crafting_nonmagical_items" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Crafting Nonmagical Items</NavLink>
                    <NavLink to="food_drink_and_lodging" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Food, Drink, and Lodging</NavLink>
                    <NavLink to="hirelings" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Hirelings</NavLink>
                    <NavLink to="lifestyle_expenses" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Lifestyle Expenses</NavLink>
                    <NavLink to="magic_items" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Magic Items</NavLink>
                    <NavLink to="mounts_and_vehicles" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Mounts and Vehicles</NavLink>
                    <NavLink to="scribing_spell_scrolls" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Scribing Spell Scrolls</NavLink>
                    <NavLink to="spellcasting_for_hire" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Spellcasting for Hire</NavLink>
                    <NavLink to="tools" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Tools</NavLink>
                    <NavLink to="weapons" end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Weapons</NavLink>
                </div>
                <section className="compendium-content gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}