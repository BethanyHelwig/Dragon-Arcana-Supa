export default function Class({details}){

    const { 
        name, 
        hit_die, 
        subclasses, 
        proficiencies, 
        proficiency_choices, 
        saving_throws,
        starting_equipment,
        starting_equipment_options 
        } = details

    const subclassesElements = subclasses.map(el => el.name).join(", ")
    const proficienciesElements = proficiencies.map(el => <li>{el.name}</li>)
    const choiceElements = proficiency_choices.map(el => el.desc).join(", ")
    const savingThrowElements = saving_throws.map(el => el.name).join(", ")
    const startingEquipmentElements = starting_equipment.map(el => <li>{el.equipment.name}</li>)
    const startingEquipmentOptionsElements = starting_equipment_options.map(el => <li>{el.desc}</li>)

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{name}</span></h4></li>
                <li><h4>Subclasses: <span>{subclassesElements}</span></h4></li>
                <li><h4>Hit Die: <span>{hit_die}</span></h4></li>
                <li><h4>Proficiencies:</h4></li>
                <li>
                    <ul>
                        {proficienciesElements}
                    </ul>
                </li>
                <li><h4>Proficiency Choices: <span>{choiceElements}</span></h4></li>
                <li><h4>Saving Throws: <span>{savingThrowElements}</span></h4></li>
                <li><h4>Starting Equipment:</h4></li>
                <li>
                    <ul>
                        {startingEquipmentElements}
                    </ul>
                </li>
                <li><h4>Starting Equipment Options:</h4></li>
                <li>
                    <ul>
                        {startingEquipmentOptionsElements}
                    </ul>
                </li>
            </ul>
        </div> 
    )

    // TO-DO: add the rest of the details
}