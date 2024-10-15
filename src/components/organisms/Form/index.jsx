import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
import {useState} from "react";

const Form = () => {

    const [selectedStation, setSelectedStation] = useState('')

    const removeFromList = (e) => {
        setSelectedStation(e.target.value)
    }

    return (
        <form className="border-2 border-solid border-black rounded-2xl flex flex-col p-4">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement name="from" id="from" selectedToStation={selectedStation}
                onChange={removeFromList}/>
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement name="to" id="to" />
            <SubmitButtonElement />
        </form>
    )
}

export default Form
