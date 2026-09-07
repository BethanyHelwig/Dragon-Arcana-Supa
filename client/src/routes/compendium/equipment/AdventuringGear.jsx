import { useState, useEffect, useMemo } from 'react'
import { Collapsible } from '../../../components/Collapsible'

export default function AdventuringGear(){

    const [ gearList, setGearList ] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/search/adventuring_gear')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGearList(data)
            })
    }, [])

    const gearFormatted = useMemo(() => {
        if (!gearList) return {}

        return gearList.map(obj => {
            return (
                <Collapsible label={obj.name}>
                    <span><i>(<b>Weight: </b>{obj.weight} | <b>Cost: </b>{obj.cost})</i></span>
                    {obj.description.map(el => {
                        if (el.includes('<strong>')){
                            const startIndex = el.search('<strong>') + 8
                            const endIndex = el.search('</strong>')

                            return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
                        }
                        if (el.includes('<table>')){
                            const table = obj.adventuring_gear_table[0]
                            return (
                                <table className="table">
                                    <thead>
                                        <tr>{table.headers.map(el => <th>{el}</th>)}</tr>
                                    </thead>
                                    <tbody>
                                        {table.rows.map(row => {
                                            const rowArray = row.split("|")
                                            return (
                                                <tr>{rowArray.map(item => { return (<td>{item}</td>)})}</tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            )
                        }
                        else {
                            return <p>{el}</p>
                        }
                    })}
                </Collapsible>
            )
        })
    },[gearList])

    function formatted(){
        const formatted = rule.description.map( el => {
            if (el.includes('<strong>')){
                const startIndex = el.search('<strong>') + 8
                const endIndex = el.search('</strong>')

                return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
            }
            if (el.includes('<table>')){
                const index = el[7]
                console.log(index)
                const table = rule.rules_glossary_table.find(table => table.order_in_glossary === Number(index))
                const rows = table.rows.map(row => {
                    const rowArray = row.split("|")
                    rowArray.map(item => { return (<tr>{item}</tr>)})
                })
                return (
                    <table className="table">
                        <thead>
                            <tr>{table.headers.map(el => <th>{el}</th>)}</tr>
                        </thead>
                        <tbody>
                            {table.rows.map(row => {
                                const rowArray = row.split("|")
                                return (
                                    <tr>{rowArray.map(item => { return (<td>{item}</td>)})}</tr>
                                )
                            })}
                        </tbody>
                    </table>
                    )
            }
            else {
                return <p>{el}</p>
            }
        })
        return formatted
    } 

    return(
        <div>
            <h2>Adventuring Gear</h2>
            <p>The Adventuring Gear table in this section includes
                gear that adventurers often find useful. These items
                are described here in alphabetical order, with an
                item’s price appearing after its name.</p>

            {gearFormatted}
        </div>
    )
}