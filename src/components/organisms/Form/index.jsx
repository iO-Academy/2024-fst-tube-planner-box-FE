import LabelElement from "../../atoms/LabelElement/index.jsx";
import StationSelectElement from "../../atoms/StationSelectElement/index.jsx";
import StationOptionElement from "../../atoms/StationOptionElement/index.jsx";

const form = () => {
    return (
        <form className="form">
            <LabelElement />
            <StationSelectElement >
                <StationOptionElement ></StationOptionElement>
            </StationSelectElement>
        </form>

)
}
