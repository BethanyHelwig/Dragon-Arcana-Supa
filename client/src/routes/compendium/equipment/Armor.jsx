export default function Armor(){
    return(
        <div>
            <h2>Armor</h2>
            <p>The Armor table lists the game’s main armor. The
                table includes the cost and weight of armor, as well
                as the following details:</p>
            <p><strong>Category.</strong> Every type of armor falls into a category:
                Light, Medium, or Heavy. The category determines
                how long it takes to don or doff the armor (as
                shown in the table).</p>
            <p><strong>Armor Class (AC).</strong> The table’s Armor Class column
                tells you what your base AC is when you wear a
                type of armor. For example, if you wear Leather
                Armor, your base AC is 11 plus your Dexterity
                modifier, whereas your AC is 16 in Chain Mail.</p>
            <p><strong>Strength.</strong> If the table shows a Strength score in the
                Strength column for an armor type, that armor
                reduces the wearer’s speed by 10 feet unless the
                wearer has a Strength score equal to or higher
                than the listed score.</p>
            <p><strong>Stealth.</strong> If the table shows “Disadvantage” in the
                Stealth column for an armor type, the wearer has
                Disadvantage on Dexterity (Stealth) checks.</p>
            
            <h3>Armor Training</h3>
            <div className="compendium-divider"></div>
            <p>Anyone can don armor or hold a Shield, but only
                those with training can use them effectively, as
                explained below. A character’s class and other features
                determine the character’s armor training.
                A monster has training with any armor in its stat block.</p>
            <h4>Light, Medium, or Heavy Armor</h4>
            <p>If you wear Light, Medium, or Heavy armor and lack
                training with it, you have Disadvantage on any D20
                Test that involves Strength or Dexterity, and you
                can’t cast spells.</p>
            <h4>Shield</h4>
            <p>You gain the Armor Class benefit of a Shield only if
                you have training with it.</p>

            <h3>One at a Time</h3>
            <div className="compendium-divider"></div>
            <p>A creature can wear only one suit of armor at a time
                and wield only one Shield at a time.</p>

            <h4>Armor</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Armor</th>
                        <th scope="col">Armor Class (AC)</th>
                        <th scope="col">Strength</th>
                        <th scope="col">Stealth</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                {/* TODO: fill from DB */}
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}