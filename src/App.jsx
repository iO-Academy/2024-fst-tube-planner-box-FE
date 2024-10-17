import './App.css'
import {useEffect, useState} from "react";
import Form from "./components/organisms/Form/index.jsx";
import H2Element from "./components/atoms/H2Element/index.jsx";
import Header from "./components/molecules/Header/index.jsx";
import Results from "./components/organisms/Results/index.jsx";

function App() {

    const [route, setRoute] = useState([])
    const [selectedOriginStation, setSelectedOriginStation] = useState('');
    const [selectedDestinationStation, setSelectedDestinationStation] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault()
        const response = await fetch(`http://localhost:3000/route?from=${selectedOriginStation}&to=${selectedDestinationStation}`)
        const routeArray = await response.json()
        console.log(routeArray)
        setRoute(routeArray)
    }


    return (
    <>
        <Header />
        <div className= 'bg-cyan-700 min-h-screen'>
            <H2Element content="Where are you going, mate?"/>
            <Form handleSubmit={handleSubmit}
                  selectedOriginStation={selectedOriginStation}
                  setSelectedOriginStation={setSelectedOriginStation}
                  selectedDestinationStation={selectedDestinationStation}
                  setSelectedDestinationStation={setSelectedDestinationStation}/>
            <Results selectedOriginStation={selectedOriginStation} selectedDestinationStation={selectedDestinationStation} route={route} numStops="numStops" line="line"/>
        </div>

    </>
  )
}

export default App
