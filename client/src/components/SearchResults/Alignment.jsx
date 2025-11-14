export default function Alignment({details}){

    const { full_name, abbreviation, description } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Abbreviation: <span>{abbreviation}</span></h4></li>
                <li><h4>Description: <span>{description}</span></h4></li>
            </ul>
        </div> 
    )
}