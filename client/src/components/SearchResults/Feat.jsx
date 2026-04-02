export default function Feat({details}){

    const { full_name, category, prerequisite, repeatable, repeatable_constraints, benefit } = details

    const benefitElements = benefit.map(el => {
        
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
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Category: <span>{category}</span></h4></li>
                <li><h4>Prerequisite: <span>{prerequisite ? prerequisite : "--"}</span></h4></li>
                <li><h4>Repeatable: <span>{repeatable ? "Yes" : "No"}</span></h4></li>
                {repeatable && <li><h4>Repeatable Constraints: <span>{repeatable_constraints}</span></h4></li>}
                <li><h4>Benefit: <span>{benefitElements}</span></h4></li>
            </ul>
        </div> 
    )
}