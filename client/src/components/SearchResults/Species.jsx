export default function Species({details}){

    const { full_name, type, size, size_description, speed, traits } = details

    const traitElements = traits.map(el => {
        
        if (el.includes('<strong>')){
            const startIndex = el.search('<strong>') + 8
            const endIndex = el.search('</strong>')
            console.log(`Start index is: ${startIndex}`)
            console.log(el.substring(startIndex, endIndex))

            return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
        }
        else {
            return <p>{el}</p>
        }
    })

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Full Name: <span>{full_name}</span></h4></li>
                <li><h4>Type: <span>{type}</span></h4></li>
                <li><h4>Size: <span>{size.creature_size} ({size_description})</span></h4></li>
                <li><h4>Speed: <span>{speed}</span></h4></li>
                <li><h4>Traits: <span>{traits.length > 0 ? traitElements : "n/a"}</span></h4></li>
            </ul>
        </div> 
    )
}