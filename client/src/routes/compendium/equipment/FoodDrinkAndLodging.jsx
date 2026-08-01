export default function FoodDrinkAndLodging(){
    return(
        <div>
            <h2>Food, Drink, and Lodging</h2>
            <p>The Food, Drink, and Lodging table gives prices for
                food and a single night’s lodging. Prices for daily
                lodging and meals are included in your lifestyle’s expenses.</p>

            <h4>Food, Drink, and Lodging</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                {/* TODO: fill from DB */}
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}