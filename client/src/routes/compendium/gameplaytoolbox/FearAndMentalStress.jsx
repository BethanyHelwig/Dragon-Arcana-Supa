export default function FearAndMentalStress(){
    return (
        <div className="compendium-content">
            <h2>Fear and Mental Stress</h2>
            <p>Due to the nature of their vocation, adventurers
                tend to be less susceptible to fear and mental stress
                than common folk. Whereas a farmer might flee in
                terror from a bear or an apparition, adventurers are
                made of sterner stuff. That said, certain creatures
                and game effects can terrify or fray the mind of
                even the most stalwart adventurer.</p>
            <p>If you plan to use any of these rules, discuss them
                with your players at the start of the campaign.</p>

            <h3>Fear Effects</h3>
            <div className="compendium-divider"></div>
            <p>Whenever the characters encounter something that
                is supernaturally frightful, use the Frightened condition
                as the baseline effect. Fear effects typically
                require a Wisdom saving throw, with a save DC
                based on how terrifying the situation is. The Sample
                Fear DCs table provides some examples.</p>
            <h4>Sample Fear DCs</h4>
            <table  className="table">
                <thead>
                    <tr>
                        <th scope="col">Example</th>
                        <th scope="col">Save DC</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>When the characters open a sarcophagus, a harmless yet terrifying apparition appears.</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>A character triggers a magical trap that
                            creates an illusory manifestation of that
                            character’s worst fears, visible only to that
                            character.</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>A portal to the Abyss opens, revealing a
                            nightmarish realm of torment and slaughter.</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
            <p>Typically, a Frightened creature repeats the saving
                throw at the end of each of its turns, ending the effect
                on itself on a success.</p>
            <p>At your discretion, a Frightened creature might
                be subject to other effects as long as the Frightened
                condition lasts. Consider these examples:</p>
            <ul>
                <li>The Frightened creature must take the Dash action
                    on each of its turns and uses its movement to
                    get farther away from the source of its fear.</li>
                <li>Attack rolls against the Frightened creature have Advantage.</li>
                <li>The Frightened creature can do only one of the
                    following on each of its turns: move, take an action,
                    or take a Bonus Action.</li>
            </ul>

            <h3>Mental Stress Effects</h3>
            <div className="compendium-divider"></div>
            <p>When a character is subjected to an effect that
                causes intense mental stress, Psychic damage is the
                best way to emulate that effect.</p>
            <p>The Sample Mental Stress Effects table provides a
                few examples of such effects, with suggested saving
                throw DCs and damage. Mental stress can usually
                be resisted with a successful Wisdom save, but
                sometimes an Intelligence or Charisma save is more
                appropriate. On a successful save, a character might
                take half as much damage instead of no damage, at
                your discretion.</p>
            <h4>Sample Mental Stress Effects</h4>
            <table  className="table">
                <thead>
                    <tr>
                        <th scope="col">Example</th>
                        <th scope="col">Save DC</th>
                        <th scope="col">Psychic Damage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>A character ingests a hallucinogenic
                            substance that distorts the character’s
                            perception of reality.</td>
                        <td>10</td>
                        <td>1d6</td>
                    </tr>
                    <tr>
                        <td>A character touches a fiendish idol
                            that tears at the character’s mind,
                            threatening to shatter it.</td>
                        <td>15</td>
                        <td>3d6</td>
                    </tr>
                    <tr>
                        <td>A magical trap flings a character into
                            the Far Realm until the end of that
                            character’s next turn.</td>
                        <td>20</td>
                        <td>9d6</td>
                    </tr>
                </tbody>
            </table>
            <h4>Prolonged Effects</h4>
            <p>Exposure to mental stress can cause prolonged effects.
                Consider the following possibilities.</p>
            <p><strong>Short-Term Effects.</strong> The character has the Frightened,
                Incapacitated, or Stunned condition for 1d10
                minutes. This condition might be accompanied by
                alarming behavior or hallucinations. These effects
                can be suppressed with the Calm Emotions spell or
                removed by the Lesser Restoration spell.</p>
            <p><strong>Long-Term Effects.</strong> The character has Disadvantage
                on some or all ability checks for 1d10 × 10
                hours, stemming from an unwillingness or inability
                to exert a particular set of abilities. The character
                might feel enervated and unable to exert much
                Strength, for example, or become so suspicious of
                others that Charisma checks are more difficult.
                These effects can be suppressed with the Calm
                Emotions spell or removed by the Lesser Restoration spell.</p>
            <p><strong>Indefinite Effects.</strong> An indefinite effect is a longterm
                effect (see above) that lasts until removed by a
                Greater Restoration spell. It can be suppressed by a
                Calm Emotions spell.</p>
        </div>
    )
}