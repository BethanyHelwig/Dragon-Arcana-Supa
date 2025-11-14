export default function Spell({details}){

    const { 
        full_name, 
        level,
        casting_time,
        range,
        components,
        duration,
        description,
        school_of_magic,
        character_class
        } = details

    console.log(details)

    const descriptionElements = description.map(el => {
        
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

    const classElements = character_class.map(el => el.class).join(", ")

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Level: <span>{level}</span></h4></li>
                <li><h4>School of Magic: <span>{school_of_magic.school}</span></h4></li>
                <li><h4>Available to: <span>{classElements}</span></h4></li>
                <li><h4>Casting Time: <span>{casting_time}</span></h4></li>
                <li><h4>Range: <span>{range}</span></h4></li>
                <li><h4>Components: <span>{components}</span></h4></li>
                <li><h4>Duration: <span>{duration}</span></h4></li>
                <li><h4> Description: <span>{descriptionElements}</span></h4></li>
            </ul>
        </div> 
    )
}