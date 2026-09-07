import { useState, useEffect, useMemo } from 'react'

export default function Hirelings(){

const [ hirelingList, setHirelingList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/hirelings')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setHirelingList(data)
            })
    }, [])

    const hirelingsFormatted = useMemo(() => {
        return hirelingList.map(el => {
            return (
                <tr>
                    <td>{el.service}</td>
                    <td>{el.cost}</td>
                </tr>
            )
        })
    })

    return(
        <div>
            <h2>Hirelings</h2>
            <p>Skilled hirelings include anyone hired to perform
                a service that involves a proficiency (including
                weapon, tool, or skill): a mercenary, an artisan, a
                scribe, or the like. The pay shown on the Hirelings
                table is a minimum; some expert hirelings require
                more pay. Untrained hirelings are hired for work
                that requires no particular proficiencies; they include
                laborers and porters.</p>

            <h4>Hirelings</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {hirelingsFormatted}
                </tbody>
            </table>
        </div>
    )
}