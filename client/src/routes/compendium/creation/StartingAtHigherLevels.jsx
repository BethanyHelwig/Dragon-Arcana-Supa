export default function StartingAtHigherLevels(){
    return(
        <div>
            <h2>Starting at Higher Levels</h2>
            <p>Your GM might start your group’s characters at a
                level higher than 1. It is particularly recommended
                to start at level 3 if your group is composed of seasoned D&D players.</p>

            <h3>Creating Your Character</h3>
            <div className="compendium-divider"></div>
            <p>Creating a higher-level character uses the same
                character-creation steps outlined in this chapter
                and the rules for advancing beyond level 1 provided
                in the “Level Advancement” section. You begin with
                the minimum amount of XP required to reach your
                starting level. For example, if the GM starts you at
                level 10, you have 64,000 XP.</p>

            <div className="compendium-content-emphasis">
                <h3>Bonus Feats at Level 20</h3>
                <p>A GM can use feats as a form of advancement after
                    characters reach level 20 to provide greater power
                    to characters who have no more levels to gain. With
                    this approach, each character gains one feat of their
                    choice for every 30,000 XP the character earns
                    above 355,000 XP. Epic Boon feats are especially
                    appropriate for these bonus feats, but a player can
                    choose any feat for which their level 20 character qualifies.</p>
            </div>

            <h3>Starting Equipment</h3>
            <div className="compendium-divider"></div>
            <p>The GM decides whether your character starts with
                more than the standard equipment for a level 1
                character, possibly even one or more magic items.
                The Starting Equipment at Higher Levels table is a
                guide for the GM.</p>    
            <p>Also, check with your GM about what equipment
                is available for you to buy with your starting money.
                For example, the firearms described in “Equipment”
                are too expensive for level 1 characters, but they
                might be available for purchase if your GM allows them.</p>

            <h4>Starting Equipment at Higher Levels</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Starting Level</th>
                        <th scope="col">Equipment and Money</th>
                        <th scope="col">Magic Items</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2–4</td>
                        <td>Normal starting equipment</td>
                        <td>1 Common</td>
                    </tr>
                    <tr>
                        <td>5–10</td>
                        <td>500 GP plus 1d10 × 25 GP plus normal starting equipment</td>
                        <td>1 Common, 1 Uncommon</td>
                    </tr>
                    <tr>
                        <td>11–16</td>
                        <td>5,000 gp plus 1d10 × 250 GP plus normal starting equipment</td>
                        <td>2 Common, 3 Uncommon, 1 Rare</td>
                    </tr>
                    <tr>
                        <td>17–20</td>
                        <td>20,000 GP plus 1d10 × 250 GP plus normal starting equipment</td>
                        <td>2 Common, 4 Uncommon, 3 Rare, 1 Very Rare</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}