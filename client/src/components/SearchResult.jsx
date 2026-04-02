import { useState } from "react"
import { Collapsible } from "./Collapsible"

import AbilityScore from "./SearchResults/AbilityScore"
import Alignment from "./SearchResults/Alignment"
import Background from "./SearchResults/Background"
import Class from "./SearchResults/Class"
import Language from "./SearchResults/Language"
import SchoolOfMagic from "./SearchResults/SchoolOfMagic"
import Skill from "./SearchResults/Skill"
import Species from "./SearchResults/Species"
import Spell from "./SearchResults/Spell"
import Weapon from "./SearchResults/Weapon"
import WeaponProperty from "./SearchResults/WeaponProperty"
import WeaponMasteryProperty from "./SearchResults/WeaponMasteryProperty"
import Feat from "./SearchResults/Feat"

export default function SearchResult(props) {

    const { data, searchCategory } = props

    function detailElements(){

        switch(searchCategory){
            case "ability_score":
                return <AbilityScore details={data} />
            case "alignment":
                return <Alignment details={data} />
            case "background":
                return <Background details={data} />
            case "character_class":
                return <Class details={data} />
            case "feat":
                return <Feat details={data} />
            case "language":
                return <Language details={data} />
            case "school_of_magic":
                return <SchoolOfMagic details={data} />
            case "skill":
                return <Skill details={data} />
            case "species":
                return <Species details={data} />
            case "spell":
                return <Spell details={data} />
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
        <Collapsible label={data.full_name}>
            {detailElements()}
        </Collapsible>
    )
}