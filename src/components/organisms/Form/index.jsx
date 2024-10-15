import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
import {useEffect, useState} from "react";

const Form = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState('http://localhost:3000')
    // const [fromStation, setFromStation] = useState("")
    // const [toStation, setToStation] = useState("")
    const [selectedStation, setSelectedStation] = useState('');

    const filteredData = data.filter(item => item.name + ' ' + item.code !== selectedStation)

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
            {/*<LabelElement inputName="from" htmlFor="from" />*/}
            <StationSelectElement data={data} name="from" id="from" selectedStation={selectedStation}
                                  setSelectedStation={setSelectedStation}/>
            <p>Selected station = {selectedStation}</p>
            {/*<LabelElement inputName="to" htmlFor="to" />*/}
            <StationSelectElement data={filteredData} name="to" id="to" selectedStation="placeholder"
                                  setSelectedStation={setSelectedStation}/>
            {/*<StationSelectElement name="to" id="to" />*/}
            {/*<SubmitButtonElement />*/}
        </form>

)
}

export default Form
