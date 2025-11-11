export default function Background({details}){

    const { feature, starting_proficiencies, starting_equipment } = details

    const featureDescription = feature.desc.map(el => <p>{el}</p>)
    const proficienciesElements = starting_proficiencies.map(prof => <li>{prof.name}</li>)
    const equipmentElements = starting_equipment.map(equip => <li>{equip.equipment.name}</li>)

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Feature: <span>{feature.name}</span></h4></li>
                <li><ul>
                        <li>{featureDescription}</li>
                    </ul>
                </li>
                <li><h4>Starting Proficiencies:</h4></li>
                <li>
                    <ul>
                        {proficienciesElements}
                    </ul>
                </li>
                <li><h4>Starting Equipment:</h4></li>
                <li>
                    <ul>
                        {equipmentElements}
                    </ul>
                </li>
            </ul>
        </div> 
    )
}