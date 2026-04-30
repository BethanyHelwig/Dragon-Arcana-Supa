export default function Weapon({details}){

    const { 
        full_name, 
        category, 
        melee_ranged, 
        damage, 
        weapon_property, 
        weapon_mastery_property, 
        weight, 
        cost,
        weapon_property_junction
    } = details

    const propertyElements = weapon_property.map((el, index) => {
        const correspondingDetails = weapon_property_junction[index]

        return (
            `${el.property} 
            ${correspondingDetails.range ? `(Range: ${correspondingDetails.range})` : ''}
            ${correspondingDetails.ammunition_type ? `(Type: ${correspondingDetails.ammunition_type})` : ''}
            ${correspondingDetails.versatile_damage ? `(${correspondingDetails.versatile_damage})` : ''}
            `
        )

    }).join(", ")

    return (
        <div className="search-result-details">
            <ul className="collapsible__list">
                <li className="collapsible__list_item"><h4>Name: <span>{full_name}</span></h4></li>
                <li className="collapsible__list_item"><h4>Category: <span>{category}</span></h4></li>
                <li className="collapsible__list_item"><h4>Type: <span>{melee_ranged}</span></h4></li>
                <li className="collapsible__list_item"><h4>Damage: <span>{damage}</span></h4></li>
                <li className="collapsible__list_item"><h4>Mastery: <span>{weapon_mastery_property.weapon_mastery}</span></h4></li>
                {weapon_property && <li className="collapsible__list_item"><h4>Properties: <span>{propertyElements}</span></h4></li>}
                <li className="collapsible__list_item"><h4>Weight: <span>{weight}</span></h4></li>
                <li className="collapsible__list_item"><h4>Cost: <span>{cost}</span></h4></li>             
            </ul>
        </div> 
    )
}