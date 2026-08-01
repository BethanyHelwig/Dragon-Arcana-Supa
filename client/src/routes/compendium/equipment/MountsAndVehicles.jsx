export default function MountsAndVehicles(){
    return(
        <div>
            <h2>Mounts and Vehicles</h2>
            <p>A mount can help you move more quickly through
                the wilderness, but its primary purpose is to carry
                gear that would otherwise slow you down. The
                Mounts and Other Animals table shows each animal’s
                carrying capacity. See “Monsters” for the animals’ stat blocks.</p>

            <h3>Mounts and Cargo</h3>
            <div className="compendium-divider"></div>
            <p>An animal pulling a carriage, cart, chariot, sled, or
                wagon can move weight up to five times its base
                carrying capacity, including the weight of the vehicle.
                If multiple animals pull the same vehicle, add
                their carrying capacities together.</p>

            <h3>Barding</h3>
            <div className="compendium-divider"></div>
            <p>Barding is armor designed for a mount. Any type
                of armor on the Armor table in “Equipment” can
                be purchased as barding. The cost is four times the
                normal cost, and it weighs twice as much.</p>
            
            <h3>Saddles</h3>
            <div className="compendium-divider"></div>
            <p>A saddle comes with a bit, a bridle, reins, and any
                other equipment needed to use the saddle. A Military
                Saddle gives Advantage on any ability check
                you make to remain mounted. An Exotic Saddle is
                required for riding an aquatic or a flying mount.</p>

            <h4>Mounts and Other Animals</h4>
            {/* TODO: fill from DB */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Carrying Capacity</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h4>Tack, Harness, and Drawn Vehicles</h4>
            {/* TODO: fill from DB */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h3>Large Vehicles</h3>
            <div className="compendium-divider"></div>
            <p>The Airborne and Waterborne Vehicles table provides
                statistics for various types of large vehicles.
                The following notes apply.</p>
            <h4>Speed</h4>
            <p>A ship sailing against a strong wind moves at half
                speed. In a dead calm (no wind), waterborne ships
                can’t move under sail and must be rowed. Keelboats
                and Rowboats are used on lakes and rivers. If going
                downstream, add the speed of the current (typically
                3 miles per hour) to the speed of the vehicle. These
                vehicles can’t be rowed against any significant current,
                but they can be pulled upstream by draft animals
                on the shores. A Rowboat can be carried and
                weighs 100 pounds.</p>

            <h4>Airborne and Waterborne Vehicles</h4>
            {/* TODO: fill from DB */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ship</th>
                        <th scope="col">Speed</th>
                        <th scope="col">Crew</th>
                        <th scope="col">Passengers</th>
                        <th scope="col">Cargo (Tons)</th>
                        <th scope="col">AC</th>
                        <th scope="col">HP</th>
                        <th scope="col">Damage Threshold</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

            <h4>Crew</h4>
            <p>A ship larger than a Keelboat or Rowboat needs a
                crew of skilled hirelings (see “Hirelings” later in
                “Equipment”) to function. The minimum number of
                skilled hirelings needed to crew a ship depends on
                the type of ship, as shown in the table.</p>
            <h4>Passengers</h4>
            <p>The table lists the number of Small and Medium
                passengers the ship can accommodate using hammocks.
                A ship outfitted with private accommodations
                can carry one-fifth as many passengers. A passenger
                usually pays 5 SP per day for a hammock, but
                prices can vary from ship to ship. A small private
                cabin usually costs 2 GP per day.</p>
            <h4>Damage Threshold</h4>
            <p>If a vehicle has a damage threshold (see “Rules Glossary”),
                it’s noted in the table.</p>
            <h4>Ship Repair</h4>
            <p>Repairs to a damaged ship can be made while the
                vessel is berthed. Repairing 1 Hit Point of damage
                requires 1 day and costs 20 GP for materials and labor.
                If the repairs are made in a location where supplies
                and skilled labor are abundant, such as a city
                shipyard, the repair time and cost are halved.</p>
        </div>
    )
}