export default function Language({details}){

    const { full_name, type, notes } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Type: <span>{type}</span></h4></li>
                <li><h4>Notes: <span>{notes ? notes : "--"}</span></h4></li>
            </ul>
        </div> 
    )
}