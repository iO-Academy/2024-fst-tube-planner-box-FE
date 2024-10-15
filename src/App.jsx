import './App.css'
import {useEffect, useState} from "react";

function App() {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('http://localhost:3000')

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(query)
            const tubes = await response.json()
            setData(tubes)
        }
        getData()
    }, [query]);

    console.log(data)


  return (
    <>
        <h1>Welcome to JourneyBox!</h1>

    </>
  )
}

export default App
