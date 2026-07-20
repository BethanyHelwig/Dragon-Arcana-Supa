import { useState, useEffect, useMemo } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import BackButton from '../../components/BackButton'
import { Collapsible } from '../../components/Collapsible'

export default function Classes(){

    const [ classList, setClassList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/character_class')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClassList(data)
            })
    }, [])

    return (
        <>
            <div className="title-back-btn-container">
                <Link to ="/compendium" className="back-btn btn-lookalike">Back</Link>
                <h1 className="title-glow">Compendium: Classes</h1>
            </div>
            <div className="flex-row">
                <div className="side-menu">
                    <NavLink to="." end className={({isActive}) => isActive ? "side-menu-active-link" : null}>Overview</NavLink>
                    {!classList || classList.length === 0 && <i className="fa-solid fa-spinner spinning-icon"></i>}
                    {classList.length > 0 && classList.map(el => (
                        <NavLink to={`${el.id}`} className={({isActive}) => isActive ? "side-menu-active-link" : null}>
                            {el.full_name}
                        </NavLink>
                    ))
                    }
                </div>
                <section className="compendium-content gradient-border width-100">
                    <Outlet context={{ classList }} />
                </section>
            </div>
        </>
    )
}