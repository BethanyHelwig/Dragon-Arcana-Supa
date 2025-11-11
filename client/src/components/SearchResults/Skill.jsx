export default function Skill({details}){

    const { full_name, description, ability_score } = details
    console.log(details)

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Description: <span>{description}</span></h4></li>
                <li><h4>Ability Score: <span>{ability_score.name}</span></h4></li>
            </ul>
        </div> 
    )
}