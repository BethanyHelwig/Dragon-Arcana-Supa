import { useEffect, useState, useMemo } from "react"
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Collapsible }  from '../../components/Collapsible'

export default function RulesGlossary(){

    const [ glossary, setGlossary ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/rules_glossary')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setGlossary(data)
            })
    }, [])

    const collapsibleArray = useMemo(() => {
        if (!glossary) return {};

        return glossary.reduce((acc, term) => {
            const letter = term.title?.[0]?.toUpperCase() || "#";

            if (!acc[letter]) {
            acc[letter] = [];
            }

            acc[letter].push(term);
            return acc;
        }, {});
    }, [glossary]);

    const sortedCollapsibles = Object.keys(collapsibleArray).sort()
    
    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Rules Glossary</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Glossary Conventions</NavLink>
                    {collapsibleArray && sortedCollapsibles.map(letter => (
                        <Collapsible key={letter} label={letter}>
                                {collapsibleArray[letter].map(el =>(
                                    <NavLink to={`${el.id}`} className={({isActive}) => isActive ? "side-menu-active-link" : null}>
                                        {el.title}
                                    </NavLink>
                                ))}
                        </Collapsible>
                        ))
                    }
                </div>
                <section className="gradient-border width-100 compendium-content">
                    <Outlet context={{ glossary }} />
                </section>
            </div>
        </>
    )
}