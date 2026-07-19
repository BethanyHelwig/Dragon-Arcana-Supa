export default function MagicItemRarity(){
    return(
        <div className="compendium-content">
            <h2>Magic Item Rarity</h2>
            <p>Every magic item has a rarity, which provides a
                rough measure of an item’s power relative to other
                magic items. The rarities are shown in the Magic
                Item Rarities and Values table.</p>
            <p>Common magic items, such as a Potion of Healing,
                are the most plentiful. Artifacts, such as the Dragon
                Orb, are priceless, unique, and difficult to acquire.</p>

            <h3>Magic Item Values by Rarity</h3>
            <div className="compendium-divider"></div>
            <p>Common magic items can often be bought in a
                town or city. Uncommon and Rare magic items are
                usually found only in cities, and rarer magic items
                might be sold only in wondrous locations, such as a
                city on another plane of existence. If you allow characters
                to buy and sell magic items in your campaign,
                rarity can help you set prices for those items. Gold
                Piece values are provided in the Magic Item Rarities
                and Values table, though a seller might ask for a service
                rather than coin as payment.</p>
            <p>If a magic item incorporates an item that has a
                purchase cost in “Equipment” (such as a weapon or
                a suit of armor), add that item’s cost to the magic
                item’s value. For example, +1 Armor (Plate Armor)
                has a value of 5,500 GP, which is the sum of a Rare
                magic item’s value (4,000 GP) and the cost of Plate
                Armor (1,500 GP).</p>

            <h4>Magic Item Rarities and Values</h4>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Rarity</th>
                        <th scope="col">Value*</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Common</td>
                        <td>100 GP</td>
                    </tr>
                    <tr>
                        <td>Uncommon</td>
                        <td>400 GP</td>
                    </tr>
                    <tr>
                        <td>Rare</td>
                        <td>4,000 GP</td>
                    </tr>
                    <tr>
                        <td>Very Rare</td>
                        <td>40,000 GP</td>
                    </tr>
                    <tr>
                        <td>Legendary</td>
                        <td>200,000 GP</td>
                    </tr>
                    <tr>
                        <td>Artifact</td>
                        <td>Priceless</td>
                    </tr>
                </tbody>
            </table>
            <p>*Halve the value for a consumable item other than a Spell Scroll.
                The value of a Spell Scroll is double what it costs to scribe the scroll
                (as specified in the “Scribing Spell Scrolls” section of “Equipment”).</p>
        </div>
    )
}