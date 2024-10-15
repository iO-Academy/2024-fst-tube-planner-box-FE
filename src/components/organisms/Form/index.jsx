import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
import {useState} from "react";

const Form = () => {

    const [fromStation, setFromStation] = useState("")
    const [toStation, setToStation] = useState("")

    return (
        <form className="border-2 border-solid border-black rounded-2xl flex flex-col p-4 bg-white m-4 shadow-2xl">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement name="from" id="from"  selectedStation={fromStation}
                                  setSelectedStation={setFromStation}
                                  otherSelectedStation={toStation} />
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement name="to" id="to" />
            <SubmitButtonElement />
        </form>

)
}

export default Form
