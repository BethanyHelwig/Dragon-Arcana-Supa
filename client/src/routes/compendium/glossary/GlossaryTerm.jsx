import { useParams, useOutletContext } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function GlossaryTerm(){
    const { id } = useParams()
    const { glossary } = useOutletContext()
    const [ rule, setRule ] = useState()

    useEffect(() => {
        const term = glossary.find(term => term.id === Number(id))
        setRule(term)
    }, [id])

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
                    <table>
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
      
    return (
        <>
            <h3>{rule && rule.title}</h3>
            {rule && formatted()}
        </>
    )
}