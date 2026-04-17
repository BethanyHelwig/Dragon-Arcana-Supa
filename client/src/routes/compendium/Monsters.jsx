import { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { Collapsible } from '../../components/Collapsible'

export default function Monsters(){

    const [ monsterList, setMonsterList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/monsters')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMonsterList(data)
            })
    }, [])

    const collapsibleArray = useMemo(() => {
        if (!monsterList) return {};

        return monsterList.reduce((acc, term) => {
            const letter = term.name?.[0]?.toUpperCase() || "#";

            if (!acc[letter]) {
            acc[letter] = [];
            }

            acc[letter].push(term);
            return acc;
        }, {});
    }, [monsterList]);

    const sortedCollapsibles = Object.keys(collapsibleArray).sort()

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Monsters</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Overview</NavLink>
                    {collapsibleArray && sortedCollapsibles.map(letter => (
                        <Collapsible key={letter} label={letter}>
                                {collapsibleArray[letter].map(el =>(
                                    <NavLink to={`${el.id}`} className={({isActive}) => isActive ? "side-menu-active-link" : null}>
                                        {el.name}
                                    </NavLink>
                                ))}
                        </Collapsible>
                        ))
                    }
                </div>
                <section className="compendium-content gradient-border width-100">
                    <Outlet context={{ monsterList }} />
                </section>
            </div>
        </>
    )
}