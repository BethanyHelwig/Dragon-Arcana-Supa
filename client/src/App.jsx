import { useState } from 'react'

function App() {

    const [ data, setData ] = useState(null)

    function getData(){
        fetch('http://127.0.0.1:8080/api/data')
            .then(res => res.json())
            .then(data => console.log(data))
    }

    getData()

    return (
        <>
            <p>hi</p>
        </>
    )
}

export default App
