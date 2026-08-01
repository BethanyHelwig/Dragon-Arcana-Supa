export default function SpellcastingForHire(){
    return(
        <div>
            <h2>Spellcasting For Hire</h2>
            <p>Most settlements contain individuals who are willing
                to cast spells in exchange for payment. If a spell
                has expensive components, add the cost of those
                components to the cost listed in the Spellcasting
                Services table. The higher the level of a desired
                spell, the harder it is to find someone to cast it.</p>

            <h4>Spellcasting Services</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Spell Level</th>
                        <th scope="col">Availability</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                {/* TODO: fill from DB */}
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}