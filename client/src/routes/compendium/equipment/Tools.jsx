export default function Tools(){
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
            {/* TODO: fill from DB */}

            <h3>Other Tools</h3>
            <div className="compendium-divider"></div>
            {/* TODO: fill from DB */}
        </div>
    )
}