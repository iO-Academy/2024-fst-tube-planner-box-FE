import './App.css'
import {useEffect, useState} from "react";
import Form from "./components/organisms/Form/index.jsx";
import H2Element from "./components/atoms/H2Element/index.jsx";
import Header from "./components/molecules/Header/index.jsx";

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
        <Header />
        <H2Element content="Where are you going, mate?"/>
        <Form />
    </>
  )
}

export default App
