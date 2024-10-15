import H3Element from "../../atoms/H3Element/index.jsx";

const InfoRow = ({ numStops, line }) => {
    return (
        <>
            <div>
                <H3Element content={numStops} />
                <H3Element content={line} />
            </div>
        </>
    )
}

export default InfoRow