export default function Background({details}){

    const { full_name, feat, feat_specific, skill_proficiencies, tool_proficiency } = details

    return (
        <div className="search-result-details">
            <ul>
                <li><h4>Name: <span>{full_name}</span></h4></li>
                <li><h4>Feat: <span>{feat.feat}</span></h4></li>
                <li><h4>Specific to: <span>{feat_specific ? feat_specific : "--"}</span></h4></li>
                <li><h4>Skill Proficiencies: <span>{skill_proficiencies.join(", ")}</span></h4></li>
                <li><h4>Tool Proficiency: <span>{tool_proficiency}</span></h4></li>
            </ul>
        </div> 
    )
}