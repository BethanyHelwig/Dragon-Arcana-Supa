import { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { Collapsible } from '../../components/Collapsible'

export default function MagicItems(){

    // const [ monsterList, setMonsterList ] = useState([])

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8080/api/search/monsters')
    //         .then(res => res.json())
    //         .then(data => {
    //             //console.log(data)
    //             setMonsterList(data)
    //         })
    // }, [])

    // const collapsibleArray = useMemo(() => {
    //     if (!monsterList) return {};

    //     return monsterList.reduce((acc, term) => {
    //         const letter = term.name?.[0]?.toUpperCase() || "#";

    //         if (!acc[letter]) {
    //         acc[letter] = [];
    //         }

    //         acc[letter].push(term);
    //         return acc;
    //     }, {});
    // }, [monsterList]);
    // console.log(collapsibleArray)
    // const sortedCollapsibles = Object.keys(collapsibleArray).sort()

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Magic Items</h1>
            </div>
            {/* <h1>Gameplay Toolbox</h1>
            <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link> */}
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Magic Item Categories</NavLink>
                    <NavLink to="magic_item_rarity" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Magic Item Rarity</NavLink>
                    <NavLink to="activating_a_magic_item" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Activating a Magic Item</NavLink>
                    <NavLink to="the_next_dawn" className={({isActive}) => isActive ? "side-menu-active-link" : null}>“The Next Dawn”</NavLink>
                    <NavLink to="cursed_items" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Cursed Items</NavLink>
                    <NavLink to="magic_item_resilience" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Magic Item Resilience</NavLink>
                    <NavLink to="crafting_magic_items" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Crafting Magic Items</NavLink>
                    <NavLink to="sentient_magic_items" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Sentient Magic Items</NavLink>
                    <NavLink to="travel_pace" className={({isActive}) => isActive ? "side-menu-active-link" : null}>Magic Items A-Z</NavLink>
                </div>
                <section className="gradient-border width-100">
                    <Outlet />
                </section>
            </div>
        </>
    )
}