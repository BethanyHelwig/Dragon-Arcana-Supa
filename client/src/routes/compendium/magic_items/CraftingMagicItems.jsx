export default function CraftingMagicItems(){
    return(
        <div className="compendium-content">
            <h2>Crafting Magic Items</h2>
            <p>“Equipment” contains rules on brewing Potions of
                Healing and scribing Spell Scrolls. To create other
                magic items, follow the rules below. In these rules,
                “you” refers to the character crafting the magic item.</p>
            
            <h3>Arcana Proficiency</h3>
            <div className="compendium-divider"></div>
            <p>To craft a magic item, you and any assistants must
                have proficiency in the Arcana skill.</p>

            <h3>Tools</h3>
            <div className="compendium-divider"></div>
            <p>The Magic Item Tools table lists which tool is required
                to make a magic item of each category. You
                must use the required tool to make an item and
                have proficiency with that tool. Any assistants must
                also have proficiency with it. For more information
                on the tools, see “Equipment.”</p>
            
            <h4>Magic Item Tools</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Item Category</th>
                        <th scope="col">Required Tool</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Armor</td>
                        <td>Leatherworker’s Tools, Smith’s
                            Tools, or Weaver’s Tools depending
                            on the kind of armor as noted
                            in the tools’ descriptions</td>
                    </tr>
                    <tr>
                        <td>Potion</td>
                        <td>Alchemist’s Supplies or Herbalism Kit</td>
                    </tr>
                    <tr>
                        <td>Ring</td>
                        <td>Jeweler’s Tools</td>
                    </tr>
                    <tr>
                        <td>Rod</td>
                        <td>Woodcarver’s Tools</td>
                    </tr>
                    <tr>
                        <td>Scroll</td>
                        <td>Calligrapher’s Supplies</td>
                    </tr>
                    <tr>
                        <td>Staff</td>
                        <td>Woodcarver’s Tools</td>
                    </tr>
                    <tr>
                        <td>Wand</td>
                        <td>Woodcarver’s Tools</td>
                    </tr>
                    <tr>
                        <td>Weapon</td>
                        <td>Leatherworker’s Tools, Smith’s
                            Tools, or Woodcarver’s Tools depending
                            on the kind of weapon as
                            noted in the tools’ descriptions</td>
                    </tr>
                    <tr>
                        <td>Wondrous Item</td>
                        <td>Tinker’s Tools or the tool required
                            to make the nonmagical item on
                            which the magic item is based</td>
                    </tr>
                </tbody>
            </table>

            <h3>Spells</h3>
            <div className="compendium-divider"></div>
            <p>If a magic item allows its user to cast any spells
                from it, you must have all those spells prepared every
                day you spend crafting the item.</p>

            <h3>Time and Cost</h3>
            <div className="compendium-divider"></div>
            <p>Crafting a magic item takes an amount of time and
                money based on the item’s rarity as shown in the
                Magic Item Crafting Time and Cost table.</p>
            <p><strong>Work per Day.</strong> For each day of crafting, you must
                work for 8 hours. If an item requires multiple days,
                those days needn’t be consecutive.</p>
            <p><strong>Assistants.</strong> Characters can combine their efforts
                to shorten the crafting time. Divide the time needed
                to create an item by the number of characters working
                on it. Normally, only one other character can
                assist you, but the GM might allow more assistants.</p>
            <p><strong>Raw Materials.</strong> The cost in the table represents
                the raw materials needed to make a magic item. The
                GM determines whether appropriate raw materials
                are available. In a city, there is a 75 percent chance
                that the materials are available, and in any other
                settlement, that chance is 25 percent. If materials
                aren’t available, you must wait at least 7 days before
                checking on the availability again.</p>
            <p>If a magic item incorporates an item that has a
                purchase cost (such as a weapon or a suit of armor),
                you must also pay that entire cost or craft that item
                using the rules in “Equipment.” For example, to
                make +1 Armor (Plate Armor), you must pay 3,500
                GP or pay 2,000 GP and craft the armor.</p>

            <h4>Magic Item Crafting Time and Cost</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Item Rarity</th>
                        <th scope="col">Time*</th>
                        <th scope="col">Cost*</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Common</td>
                        <td>5 days</td>
                        <td>50 GP</td>
                    </tr>
                    <tr>
                        <td>Uncommon</td>
                        <td>10 days</td>
                        <td>200 GP</td>
                    </tr>
                    <tr>
                        <td>Rare</td>
                        <td>50 days</td>
                        <td>2,000 GP</td>
                    </tr>
                    <tr>
                        <td>Very Rare</td>
                        <td>125 days</td>
                        <td>20,000 GP</td>
                    </tr>
                    <tr>
                        <td>Legendary</td>
                        <td>250 days</td>
                        <td>100,000 GP</td>
                    </tr>
                </tbody>
            </table> 
            <p>*The time and cost are halved for a consumable item other than
                a Spell Scroll, whose crafting time and cost are given in “Equipment.”</p> 
        </div>
    )
}