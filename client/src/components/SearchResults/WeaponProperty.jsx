export default function WeaponProperty({details}){

    const { full_name, description } = details

    return (
        <div className="search-result-details">
            <ul className="collapsible__list">
                <li className="collapsible__list_item"><h4>Full Name: <span>{full_name}</span></h4></li>
                <li className="collapsible__list_item"><h4>Description: <span>{description}</span></h4></li>
            </ul>
        </div> 
    )
}