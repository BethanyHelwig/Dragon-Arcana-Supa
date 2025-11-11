export default function AbilityScore({details}){

    const { name, full_name, description, skill } = details

    const skillElements = skill.map(skill => skill.full_name).join(", ")

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Abbreviated: <span>{name}</span></h4></li>
                <li><h4>Full Name: <span>{full_name}</span></h4></li>
                <li><h4>Description: <span>{description}</span></h4></li>
                <li><h4>Skills: <span>{skill.length > 0 ? skillElements : "n/a"}</span></h4></li>
            </ul>
        </div> 
    )
}