export default function SchoolOfMagic({details}){

    const { full_name, typical_effects } = details

    return (
        <div className="search-result-details">
            <ul className="collapsible__list">
                <li className="collapsible__list_item"><h4>Name: <span>{full_name}</span></h4></li>
                <li className="collapsible__list_item"><h4>Description: <span>{typical_effects}</span></h4></li>
            </ul>
        </div> 
    )
}