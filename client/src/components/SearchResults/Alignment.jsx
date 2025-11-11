export default function Alignment({details}){

    const { abbreviation, desc } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Abbreviation: <span>{abbreviation}</span></h4></li>
                <li><h4>Description: <span>{desc}</span></h4></li>
            </ul>
        </div> 
    )
}