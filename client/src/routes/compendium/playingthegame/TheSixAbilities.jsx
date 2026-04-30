export default function TheSixAbilities(){
    return (
        <div className="compendium-content">
            <h2>The Six Abilities</h2>
            <p>All creatures—characters and monsters—have six
                abilities that measure physical and mental characteristics,
                as shown on the Ability Descriptions table.
            </p>
            <h4>Ability Descriptions</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ability</th>
                        <th scope="col">Score Measures...</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td>Physical might</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>Agility, reflexes, and balance</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td>Health and stamina</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>Reasoning and memory</td>
                    </tr>
                    <tr>
                        <td>Wisdom</td>
                        <td>Perceptiveness and mental fortitude</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>Confidence, poise, and charm</td>
                    </tr>
                </tbody>
            </table>

            <h3>Ability Scores</h3>
            <div className="compendium-divider"></div>
            <p>Each ability has a score from 1 to 20, although some
                monsters have a score as high as 30. The score
                represents the magnitude of an ability. The Ability
                Scores table summarizes what the scores mean.
            </p>
            <h4>Ability Scores</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Score</th>
                        <th scope="col">Meaning</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>This is the lowest a score can normally go.
                            If an effect reduces a score to 0, that effect
                            explains what happens.</td>
                    </tr>
                    <tr>
                        <td>2–9</td>
                        <td>This represents a weak capability.</td>
                    </tr>
                    <tr>
                        <td>10–11</td>
                        <td>This represents the human average.</td>
                    </tr>
                    <tr>
                        <td>12–19</td>
                        <td>This is the highest an adventurer’s score can
                            go unless a feature says otherwise.</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>Perceptiveness and mental fortitude</td>
                    </tr>
                    <tr>
                        <td>21–29</td>
                        <td>This represents an extraordinary capability.</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>This is the highest a score can go.</td>
                    </tr>
                </tbody>
            </table>

            <h3>Ability Modifiers</h3>
            <div className="compendium-divider"></div>
            <p>Each ability has a modifier that you apply whenever
                you make a D20 Test with that ability (explained in
                “D20 Tests”). An ability modifier is derived from its
                score, as shown in the Ability Modifiers table.
            </p>
            <div className="compendium-content-emphasis">
                <h3>Round Down</h3>
                <p>Whenever you divide or multiply a number in the
                game, round down if you end up with a fraction, even
                if the fraction is one-half or greater. Some rules make
                an exception and tell you to round up.
                </p>
            </div>

            <h4>Ability Modifiers</h4>  
            <div className="flex-row">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Score</th>
                            <th scope="col">Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>-5</td>
                        </tr>
                        <tr>
                            <td>2–3</td>
                            <td>-4</td>
                        </tr>
                        <tr>
                            <td>4-5</td>
                            <td>-3</td>
                        </tr>
                        <tr>
                            <td>6-7</td>
                            <td>-2</td>
                        </tr>
                        <tr>
                            <td>8-9</td>
                            <td>-1</td>
                        </tr>
                        <tr>
                            <td>10-11</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>12-13</td>
                            <td>+1</td>
                        </tr>
                        <tr>
                            <td>14-15</td>
                            <td>+2</td>
                        </tr>
                    </tbody>
                </table>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Score</th>
                            <th scope="col">Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>16-17</td>
                            <td>+3</td>
                        </tr>
                        <tr>
                            <td>18-19</td>
                            <td>+4</td>
                        </tr>
                        <tr>
                            <td>20-21</td>
                            <td>+5</td>
                        </tr>
                        <tr>
                            <td>22-23</td>
                            <td>+6</td>
                        </tr>
                        <tr>
                            <td>24-25</td>
                            <td>+7</td>
                        </tr>
                        <tr>
                            <td>26-27</td>
                            <td>+8</td>
                        </tr>
                        <tr>
                            <td>28-29</td>
                            <td>+9</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>+10</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}