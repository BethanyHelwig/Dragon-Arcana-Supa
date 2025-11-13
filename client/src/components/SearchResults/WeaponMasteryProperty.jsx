export default function WeaponMasteryProperty({details}){

    const { full_name, description } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Full Name: <span>{full_name}</span></h4></li>
                <li><h4>Description: <span>{description}</span></h4></li>
            </ul>
        </div> 
    )
}