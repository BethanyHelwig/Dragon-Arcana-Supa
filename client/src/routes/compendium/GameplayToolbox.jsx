import { Link, NavLink, Outlet } from "react-router-dom"

export default function GameplayToolbox(){
    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Gameplay Toolbox</h1>
            </div>
            {/* <h1>Gameplay Toolbox</h1>
            <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link> */}
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Combat Encounters</NavLink>
                    <NavLink to="creating_a_background" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Creating a Background</NavLink>
                    <NavLink to="curses_and_magical_contagions" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Curses and Magical Contagions</NavLink>
                    <NavLink to="environmental_effects" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Environmental Effects</NavLink>
                    <NavLink to="fear_and_mental_stress" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Fear and Mental Stress</NavLink>
                    <NavLink to="poison" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Poison</NavLink>
                    <NavLink to="traps" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Traps</NavLink>
                    <NavLink to="travel_pace" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Travel Pace</NavLink>
                </div>
                <section className="gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}