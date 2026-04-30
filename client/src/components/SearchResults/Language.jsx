export default function Language({details}){

    const { full_name, type, notes } = details

    return (
        <div className="search-result-details">
            <ul className="collapsible__list">
                <li className="collapsible__list_item"><h4>Name: <span>{full_name}</span></h4></li>
                <li className="collapsible__list_item"><h4>Type: <span>{type}</span></h4></li>
                <li className="collapsible__list_item"><h4>Notes: <span>{notes ? notes : "--"}</span></h4></li>
            </ul>
        </div> 
    )
}