import { useState } from "react"

import AbilityScore from "./SearchResults/AbilityScore"
import Alignment from "./SearchResults/Alignment"
import Background from "./SearchResults/Background"
import Class from "./SearchResults/Class"
import Skill from "./SearchResults/Skill"
import Weapon from "./SearchResults/Weapon"
import WeaponProperty from "./SearchResults/WeaponProperty"
import WeaponMasteryProperty from "./SearchResults/WeaponMasteryProperty"

export default function SearchResult(props) {

    const { data, searchCategory } = props

    // State values
    const [ expanded, setExpanded ] = useState(false)

    function toggleExpanded(){
        setExpanded(prev => !prev)
    }

    function detailElements(){

        switch(searchCategory){
            case "ability_score":
                return <AbilityScore details={data} />
            case "alignment":
                return <Alignment details={data} />
            case "background":
                return <Background details={data} />
            case "class":
                return <Class details={data} />
            case "skill":
                return <Skill details={data} />
            case "weapon":
                return <Weapon details={data} />
            case "weapon_property":
                return <WeaponProperty details={data} />
            case "weapon_mastery_property":
                return <WeaponMasteryProperty details={data} />
            default:
                return (<h4>Loading...</h4>)
        }  
    }


    return (
        <div className="search-result-item" onClick={toggleExpanded}>
            <h3>{data.full_name}</h3>
            {expanded && detailElements()}
        </div>
    )
}