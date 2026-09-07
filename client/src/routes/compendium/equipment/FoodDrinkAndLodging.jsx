import { useState, useEffect, useMemo } from 'react'

export default function FoodDrinkAndLodging(){

    const [ fdlList, setFdlList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/food_drink_lodging')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setFdlList(data)
            })
    }, [])

    const fdlSorted = [...fdlList].sort((a,b) => a["id"] - b["id"])
    const fdlFormatted = useMemo(() => {
        return fdlSorted.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.item}</td>
                    <td>{item.cost}</td>
                </tr>
            )
        })
    })

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
                <tbody>
                    {fdlFormatted}
                </tbody>
            </table>
        </div>
    )
}