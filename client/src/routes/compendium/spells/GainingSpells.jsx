export default function GainingSpells(){
    return(
        <div>
            <h2>Gaining Spells</h2>
            <p>Before you can cast a spell, you must have the spell
                prepared in your mind or have access to the spell
                from a magic item, such as a Spell Scroll. Your features
                specify which spells you have access to, if any;
                whether you always have certain spells prepared;
                and whether you can change the list of spells you have prepared.</p>
            
            <h3>Preparing Spells</h3>
            <div className="compendium-divider"></div>
            <p>If you have a list of level 1+ spells you prepare, your
                spellcasting feature specifies when you can change
                the list and the number of spells you can change, as
                summarized in the Spell Preparation by Class table.</p>

            <h4>Spell Preparation by Class</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Change When You ...</th>
                        <th scope="col">Number of Spells</th>
                    </tr>
                </thead>
                {/* TODO: fill from DB */}
                <tbody>
                    <tr>
                        <td>Bard</td>
                        <td>Gain a level</td>
                        <td>One</td>
                    </tr>
                    <tr>
                        <td>Cleric</td>
                        <td>Finish a Long Rest</td>
                        <td>Any</td>
                    </tr>
                    <tr>
                        <td>Druid</td>
                        <td>Finish a Long Rest</td>
                        <td>Any</td>
                    </tr>
                    <tr>
                        <td>Paladin</td>
                        <td>Finish a Long Rest</td>
                        <td>One</td>
                    </tr>
                    <tr>
                        <td>Ranger</td>
                        <td>Finish a Long Rest</td>
                        <td>One</td>
                    </tr>
                    <tr>
                        <td>Sorcerer</td>
                        <td>Gain a level</td>
                        <td>One</td>
                    </tr>
                    <tr>
                        <td>Warlock</td>
                        <td>Gain a level</td>
                        <td>One</td>
                    </tr>
                    <tr>
                        <td>Wizard</td>
                        <td>Finish a Long Rest</td>
                        <td>Any</td>
                    </tr>
                </tbody>
            </table>

            <p>Most spellcasting monsters don’t change their lists
                of prepared spells, but the GM is free to alter them.</p>

            <h3>Always-Prepared Spells</h3>
            <div className="compendium-divider"></div>
            <p>Certain features might give you a spell that you
                always have prepared. If you also have a list of prepared
                spells that you can change, a spell that you
                always have prepared doesn’t count against the
                number of spells on that list.</p>
        </div>
    )
}