export default function Rule({details}){

    const { title, description } = details

    const formatted = details.description.map( el => {
        if (el.includes('<strong>')){
            const startIndex = el.search('<strong>') + 8
            const endIndex = el.search('</strong>')

            return <p><strong><i>{el.substring(startIndex, endIndex)}</i></strong>{el.substring(endIndex + 9)}</p>
        }
        if (el.includes('<table>')){
            const index = el[7]
            console.log(index)
            const table = details.rules_glossary_table.find(table => table.order_in_glossary === Number(index))
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


    return (
        <div className="search-result-details">
            {formatted}
        </div> 
    )
}