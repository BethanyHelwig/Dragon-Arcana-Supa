export default function Coins(){
    return(
        <div>
            <h2>Coins</h2>
            <p>Characters often find coins on their adventures
                and can spend those coins in shops, inns, and other
                businesses. Coins come in different denominations
                based on the relative worth of their material. The
                Coin Values table lists coins and how much they’re
                worth relative to the Gold Piece, which is the game’s
                main coin. For example, 100 Copper Pieces are
                worth 1 Gold Piece.</p>
            <p>A coin weighs about a third of an ounce, so fifty
                coins weigh a pound.</p>
            <h4>Coin Values</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Coin</th>
                        <th scope="col">Value in GP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Copper Piece (CP)</td>
                        <td>1/100</td>
                    </tr>
                    <tr>
                        <td>Silver Piece (SP)</td>
                        <td>1/10</td>
                    </tr>
                    <tr>
                        <td>Electrum Piece (EP)</td>
                        <td>1/2</td>
                    </tr>
                    <tr>
                        <td>Gold Piece (GP)</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>Platinum Piece (PP)</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}