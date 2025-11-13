export default function Class({details}){

    const { 
        full_name, 
        likes, 
        primary_ability,
        complexity,
        hit_point_die,
        saving_throw_proficiencies,
        skill_proficiencies,
        weapon_proficiencies, 
        armor_training,
        starting_equipment,
        tool_proficiencies
        } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Likes: <span>{likes}</span></h4></li>
                <li><h4>Primary Ability: <span>{primary_ability}</span></h4></li>
                <li><h4>Complexity: <span>{complexity}</span></h4></li>
                <li><h4>Hit Point Die: <span>{hit_point_die}</span></h4></li>
                <li><h4>Saving Throw Proficiencies: <span>{saving_throw_proficiencies}</span></h4></li>
                <li><h4>Skill Proficiencies: <span>{skill_proficiencies}</span></h4></li>
                <li><h4>Weapon Proficiencies: <span>{weapon_proficiencies}</span></h4></li>
                <li><h4>Armor Proficiencies: <span>{armor_training}</span></h4></li>
                {tool_proficiencies && <li><h4>Tool Proficiencies: <span>{tool_proficiencies}</span></h4></li>}
                <li><h4>Starting Equipment: <span>{starting_equipment}</span></h4></li>
            </ul>
        </div> 
    )

    // TO-DO: add the rest of the details
}