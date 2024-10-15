import InfoRow from "../../molecules/InfoRow/index.jsx";

const Results = ({ numStops, line }) => {
    return (
        <>
            <div>
                <InfoRow numStops={numStops} line={line}/>
            </div>
        </>
    )
}

export default Results