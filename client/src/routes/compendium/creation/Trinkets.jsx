export default function Trinkets(){
    return(
        <div>
            <h2>Trinkets</h2>
            <p>When you make your character, you can roll once
                on the Trinkets table to gain a Tiny trinket, a simple
                item lightly touched by mystery. The GM might also
                use this table. It can help stock a room in a dungeon
                or fill a creature’s pockets.</p>
            
            <h4>Trinkets</h4>
            <table className="table">
                <thead>
                    <th span="col">1d100</th>
                    <th span="col">Trinket</th>
                </thead>
                <tbody>
                    {/* TODO: Add DB pull of trinkets and put in table */}
                </tbody>
            </table>
        </div>
    )
}