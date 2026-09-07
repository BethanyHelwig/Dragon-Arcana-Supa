import { useState, useEffect, useMemo } from 'react'

export default function SpellcastingForHire(){

    const [ spellServiceList, setSpellServiceList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/spellcasting_service')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSpellServiceList(data)
            })
    }, [])

    const spellServiceFormatted = useMemo(() => {
        return spellServiceList.map(item => {
            return (
                <tr key={item.id}>
                    <td>{item.spell_level}</td>
                    <td>{item.availability}</td>
                    <td>{item.cost}</td>
                </tr>
            )
        })
    })

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
                <tbody>
                    {spellServiceFormatted}
                </tbody>
            </table>
        </div>
    )
}