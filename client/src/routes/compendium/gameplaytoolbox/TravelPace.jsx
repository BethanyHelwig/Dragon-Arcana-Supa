export default function TravelPace(){
    return (
        <div className="compendium-content">
            <h2>Travel Pace</h2>
            <p>A group of characters can travel overland at a Normal,
                Fast, or Slow pace, as described in “Playing the
                Game.” During any journey stage, the predominant
                terrain determines the characters’ maximum travel
                pace, as shown in the Maximum Pace column of the
                Travel Terrain table. Certain factors can affect a
                group’s travel pace.</p>
            <h3>Good Roads</h3>
            <div className="compendium-divider"></div>
            <p>The presence of a good road increases the group’s
                maximum pace by one step (from Slow to Normal or
                from Normal to Fast).</p>

            <h3>Slower Travelers</h3>
            <div className="compendium-divider"></div>
            <p>The group must move at a Slow pace if any group
                member’s Speed is reduced to half or less of normal.</p>

            <h3>Extended Travel</h3>
            <div className="compendium-divider"></div>
            <p>Characters can push themselves to travel for more
                than 8 hours per day, at the risk of tiring. At the end
                of each additional hour of travel beyond 8 hours,
                each character must succeed on a Constitution saving
                throw or gain 1 Exhaustion level. The DC is 10
                plus 1 for each hour past 8 hours.</p>
            
            <h3>Special Movement</h3>
            <div className="compendium-divider"></div>
            <p>If a party can travel at a high Speed for an extended
                time, as with a spell such as Wind Walk or a magic
                item such as a Carpet of Flying, translate the party’s
                Speed into travel rates using these rules:</p>
            <p><strong>Miles per hour</strong> = Speed ÷ 10</p>
            <p><strong>Miles per day</strong> (Normal pace) = Miles per hour × number of hours traveled (typically 8)</p>
            <p><strong>Fast pace</strong> = Miles per day × 1⅓ (round down)</p>
            <p><strong>Slow pace</strong> = Miles per day × 2/3 (round down)</p>
            <p>If the characters are flying or their special movement
                allows them to ignore Difficult Terrain, they
                can move at a Fast pace regardless of the terrain.</p>

            <h3>Vehicles</h3>
            <div className="compendium-divider"></div>
            <p>Characters traveling in a vehicle use the vehicle’s
                speed in miles per hour (as shown in “Equipment”)
                to determine their rate of travel, and they don’t
                choose a travel pace.</p>

            <h4>Travel Terrain</h4>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Terrain</th>
                        <th scope="col">Maximum Pace</th>
                        <th scope="col">Encounter Distance</th>
                        <th scope="col">Foraging DC</th>
                        <th scope="col">Navigation DC</th>
                        <th scope="col">Search DC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arctic</td>
                        <td>Fast*</td>
                        <td>6d6 × 10 feet</td>
                        <td>20</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Coastal</td>
                        <td>Normal</td>
                        <td>2d10 × 10 feet</td>
                        <td>10</td>
                        <td>5</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Desert</td>
                        <td>Normal</td>
                        <td>6d6 × 10 feet</td>
                        <td>20</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Desert</td>
                        <td>Normal</td>
                        <td>6d6 × 10 feet</td>
                        <td>20</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Forest</td>
                        <td>Normal</td>
                        <td>2d8 × 10 feet</td>
                        <td>10</td>
                        <td>15</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Grassland</td>
                        <td>Fast</td>
                        <td>6d6 × 10 feet</td>
                        <td>15</td>
                        <td>5</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Hill</td>
                        <td>Normal</td>
                        <td>2d10 × 10 feet</td>
                        <td>15</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Mountain</td>
                        <td>Slow</td>
                        <td>4d10 × 10 feet</td>
                        <td>20</td>
                        <td>15</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Swamp</td>
                        <td>Slow</td>
                        <td>2d8 × 10 feet</td>
                        <td>10</td>
                        <td>15</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Underdark</td>
                        <td>Normal</td>
                        <td>2d6 × 10 feet</td>
                        <td>20</td>
                        <td>10</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Urban</td>
                        <td>Normal</td>
                        <td>2d6 × 10 feet</td>
                        <td>20</td>
                        <td>15</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Waterborne</td>
                        <td>Special†</td>
                        <td>6d6 × 10 feet</td>
                        <td>15</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                </tbody>
            </table>
            <p>*Appropriate equipment (such as skis) is necessary to keep up a Fast pace in Arctic terrain.</p>
            <p>†Characters’ rate of travel while waterborne depends on the vehicle carrying them; see “Vehicles.”</p>
        </div>
    )
}