export default function Weapon({details}){

    const { full_name, category, melee_ranged, damage, weapon_mastery_property, weight, cost } = details
    console.log(details)

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Category: <span>{category}</span></h4></li>
                <li><h4>Type: <span>{melee_ranged}</span></h4></li>
                <li><h4>Damage: <span>{damage}</span></h4></li>
                <li><h4>Mastery: <span>{weapon_mastery_property.weapon_mastery}</span></h4></li>
                {/* {properties && <li><h4>Properties: <span>...properties</span></h4></li>} */}
                <li><h4>Weight: <span>{weight}</span></h4></li>
                <li><h4>Cost: <span>{cost}</span></h4></li>
            </ul>
        </div> 
    )
}