import StationOptionElement from "../StationOptionElement/index.jsx";
import {useEffect, useState} from "react";

const StationSelectElement = ({name, id}) => {

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

    return (
        <select name={name} id={id} className="border border-gray-300 rounded-md">
            <option value="none" selected disabled hidden>Select</option>
            {
                data.map((tube) => {
                    return (
                        <StationOptionElement key={tube.code} value={tube.name + ' ' + tube.code}/>
                    )
                })
            }
        </select>
    )
}
export default StationSelectElement