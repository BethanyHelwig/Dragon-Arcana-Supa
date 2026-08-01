export default function CraftingNonmagicalItems(){
    return(
        <div>
            <h2>Crafting Nonmagical Items</h2>
            <p>To craft a nonmagical item, you need tools, raw materials,
                and time, each of which is detailed below. If
                you meet the requirements, you make the item, and
                you can use it or sell it at its normal price.</p>
            
            <h3>Tools</h3>
            <div className="compendium-divider"></div>
            <p>The “Tools” section of “Equipment” lists which tools
                are required to make certain items. The GM assigns
                required tools for items not listed there.</p>
            <p>You must use the required tool to make an item
                and have proficiency with that tool. Anyone who
                helps you must also have proficiency with it.</p>
            
            <h3>Raw Materials</h3>
            <div className="compendium-divider"></div>
            <p>To make an item, you need raw materials worth
                half its purchase cost (round down). For example,
                you need 750 GP of raw materials to make Plate
                Armor, which sells for 1,500 GP. The GM determines
                whether appropriate raw materials are available.</p>

            <h3>Time</h3>
            <div className="compendium-divider"></div>
            <p>To determine how many days (working 8 hours a
                day) it takes to make an item, divide its purchase
                cost in GP by 10 (round a fraction up to a day). For
                example, you need 5 days to make a Heavy Crossbow,
                which sells for 50 GP.</p>
            <p>If an item requires multiple days, the days needn’t be consecutive.</p>
            <p>Characters can combine their efforts to shorten
                the crafting time. Divide the time needed to create
                an item by the number of characters working on it.
                Normally, only one other character can assist you,
                but the GM might allow more assistants.</p>
        </div>
    )
}