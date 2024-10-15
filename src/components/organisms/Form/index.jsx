import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
// import StationOptionElement from "../../atoms/StationOptionElement/index.jsx";

const Form = () => {
    return (
        <form className="border-2 border-solid border-black rounded-2xl flex flex-col p-4">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement name="from" id="from" />
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement name="to" id="to" />
            <SubmitButtonElement />
        </form>

)
}

export default Form
