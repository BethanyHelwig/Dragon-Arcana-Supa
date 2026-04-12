import { useEffect, useState } from "react"
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function RulesGlossary(){

    const [ glossary, setGlossary ] = useState()

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/rules_glossary')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setGlossary(data)
            })
    }, [])

    return (
        <>
            <h1 className="title-glow">Compendium: Rules Glossary</h1>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Glossary Conventions</NavLink>
                    {glossary && glossary.map(el => {
                        return (
                            <NavLink to={`${el.id}`} className={({isActive}) => isActive ? "side-menu-active-link" : null}>
                                {el.title}
                            </NavLink>
                        )
                    })}
                </div>
                <section className="gradient-border width-100 compendium-content">
                    <Outlet context={{ glossary }} />
                </section>
            </div>
        </>
    )
}