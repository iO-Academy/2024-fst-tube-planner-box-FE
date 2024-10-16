import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
import {useEffect, useState} from "react";

const Form = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('http://localhost:3000')
    // const [fromStation, setFromStation] = useState("")
    // const [toStation, setToStation] = useState("")
    const [selectedOriginStation, setSelectedOriginStation] = useState('');
    const [selectedDestinationStation, setSelectedDestinationStation] = useState('');

    const filteredDestinationData = data.filter(item => item.name + ' ' + item.code !== selectedOriginStation)
    const filteredOriginData = data.filter(item => item.name + ' ' + item.code !== selectedDestinationStation)

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(query)
            const tubes = await response.json()
            setData(tubes)
        }
        getData()
    }, []);


    return (
        <form className="border-2 border-solid border-black rounded-2xl flex flex-col p-4 bg-white m-4 shadow-2xl">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement data={filteredDestinationData} name="from" id="from" selectedStation={selectedDestinationStation}
                                  setSelectedStation={setSelectedDestinationStation}/>
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement data={filteredOriginData} name="to" id="to"
                                  setSelectedStation={setSelectedOriginStation} selectedStation={selectedOriginStation}/>
            <SubmitButtonElement />
        </form>

)
}

export default Form
