import { Outlet, Link, NavLink, useNavigate } from 'react-router-dom'

export default function CompendiumHome(){

    return (
        <>
            <h1 className="title-glow">Compendium</h1>
            <div className="compendium-home">
                <Link to="search">
                    <div className="compendium-home-link">Search</div>
                </Link>
                <Link to="playing_the_game">
                    <div className="compendium-home-link">Playing the Game</div>
                </Link>
                <Link to="rules_glossary">
                    <div className="compendium-home-link">Rules Glossary</div>
                </Link>
                <Link to="gameplay_toolbox">
                    <div className="compendium-home-link">Gameplay Toolbox</div>
                </Link>
                <Link to="magic_items">
                    <div className="compendium-home-link">Magic Items</div>
                </Link>
                <Link to="monsters">
                    <div className="compendium-home-link">Monsters</div>
                </Link>
                <Link to="animals">
                    <div className="compendium-home-link">Animals</div>
                </Link>
                <Link to="equipment">
                    <div className="compendium-home-link">Equipment</div>
                </Link>
                <Link to="magic_items">
                    <div className="compendium-home-link">Magic Items</div>
                </Link>
                <Link to="character_creation">
                    <div className="compendium-home-link">Character Creation</div>
                </Link>
                <Link to="classes">
                    <div className="compendium-home-link">Classes</div>
                </Link>
                <Link to="spells">
                    <div className="compendium-home-link">Spells</div>
                </Link>
            </div>
        </>
    )
}