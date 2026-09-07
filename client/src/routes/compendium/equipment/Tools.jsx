import { useState, useEffect, useMemo } from 'react'

export default function Tools(){

    const [ toolList, setToolList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/tools')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setToolList(data)
            })
    }, [])

    const artisanToolsFormatted = useMemo(() => {
        return toolList.map(item => {
            if (item.type === 'Artisan') {
                return (
                    <div key={item.id}>
                        <h4>{item.name} ({item.cost})</h4>
                        <p><b>Ability:</b> {item.ability}</p>
                        <p><b>Weight:</b> {item.weight ? item.weight : "--"}</p>
                        {item.utilize ? <p><b>Utilize:</b> {item.utilize}</p> : ""}
                        {item.craft ? <p><b>Craft:</b> {item.craft}</p> : ""}
                        {item.variants ? <p><b>Variants:</b> {item.variants}</p> : ""}
                    </div>
                )
            }
        })
    })

    const otherToolsFormatted = useMemo(() => {
        return toolList.map(item => {
            if (item.type === 'Other') {
                return (
                    <div key={item.id}>
                        <h4>{item.name} ({item.cost})</h4>
                        <p><b>Ability:</b> {item.ability}</p>
                        <p><b>Weight:</b> {item.weight ? item.weight : "--"}</p>
                        {item.utilize ? <p><b>Utilize:</b> {item.utilize}</p> : ""}
                        {item.craft ? <p><b>Craft:</b> {item.craft}</p> : ""}
                        {item.variants ? <p><b>Variants:</b> {item.variants}</p> : ""}
                    </div>
                )
            }
        })
    })

    return(
        <div>
            <h2>Tools</h2>
            <p>A tool helps you make specialized ability checks,
                craft certain items, or both. A tool’s description
                includes the tool’s cost and weight, as well as the
                following entries:</p>
            <p><strong>Ability.</strong> This entry lists the ability to use when
                making an ability check with the tool.</p>
            <p><strong>Utilize.</strong> This entry lists things you can do with the
                tool when you take the Utilize action. You can do
                one of those things each time you take the action.
                This entry also provides the DC for the action.</p>
            <p><strong>Craft.</strong> This entry lists what, if anything, you
                can craft with the tool. For crafting rules, see
                “Crafting Nonmagical Items,” “Brewing Potions
                of Healing,” and “Scribing Spell Scrolls” later in “Equipment.”</p>
            <p><strong>Variants.</strong> This entry appears if the tool has variants,
                which are listed. Each requires a separate proficiency.</p>

            <h3>Tool Proficiency</h3>
            <div className="compendium-divider"></div>
            <p>If you have proficiency with a tool, add your Proficiency
                Bonus to any ability check you make that
                uses the tool. If you have proficiency in a skill that’s
                used with that check, you have Advantage on the check too.</p>
            <p>Your features might give you proficiency with a
                tool. A monster has proficiency with any tool in its stat block.</p>

            <h3>Artisan’s Tools</h3>
            <div className="compendium-divider"></div>
            <p>Artisan’s Tools are each focused on crafting items
                and pursuing a trade. Each of these tools requires a
                separate proficiency.</p>
            {artisanToolsFormatted}

            <h3>Other Tools</h3>
            <div className="compendium-divider"></div>
            {otherToolsFormatted}
        </div>
    )
}