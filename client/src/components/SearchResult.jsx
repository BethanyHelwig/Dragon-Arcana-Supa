import { useState } from "react"

import AbilityScore from "./SearchResults/AbilityScore"
import Alignment from "./SearchResults/Alignment"
import Background from "./SearchResults/Background"
import Class from "./SearchResults/Class"

export default function SearchResult(props) {

    const { data, searchCategory } = props

    // State values
    const [ expanded, setExpanded ] = useState(false)
    const [ details, setDetails ] = useState(null)

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
            default:
                return (<h4>Loading...</h4>)
        }  
    }


    return (
        <div className="search-result-item" key={data.index} onClick={toggleExpanded}>
            <h3>{data.full_name}</h3>
            {expanded && detailElements()}
        </div>
    )
}