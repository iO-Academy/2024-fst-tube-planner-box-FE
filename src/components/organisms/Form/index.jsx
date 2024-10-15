import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import SubmitButtonElement from "../../atoms/SubmitButtonElement/index.jsx";
// import StationOptionElement from "../../atoms/StationOptionElement/index.jsx";

const Form = () => {
    return (
        <form className="form">
            <LabelElement inputName="from" htmlFor="from" />
            <StationSelectElement name="from" id="from" >
                {/*<StationOptionElement ></StationOptionElement>*/}
            {/*    Iterate through stations here */}
            </StationSelectElement>
            <LabelElement inputName="to" htmlFor="to" />
            <StationSelectElement name="to" id="to" >
                {/*<StationOptionElement ></StationOptionElement>*/}
                {/*    Iterate through stations here */}
            </StationSelectElement>
            <SubmitButtonElement />
        </form>

)
}

export default Form
