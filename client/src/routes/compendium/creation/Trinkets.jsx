import { useState, useEffect, useMemo } from 'react'

export default function Trinkets(){

    const [ trinketList, setTrinketList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/trinket')
            .then(res => res.json())
            .then(data => {
                setTrinketList(data)
            })
    }, [])

    const trinketsFormatted = useMemo(() => {
        if (!trinketList) return {}

        return trinketList.map(obj => {
            return (
                <tr key={obj.d100}>
                    <td>{obj.d100}</td>
                    <td>{obj.description}</td>
                </tr>
            )
        })
    },[trinketList])

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
                    {trinketsFormatted}
                </tbody>
            </table>
        </div>
    )
}