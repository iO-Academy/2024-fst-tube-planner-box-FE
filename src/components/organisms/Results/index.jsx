import InfoRow from "../../molecules/InfoRow/index.jsx";

const Results = ({ numStops, line }) => {
    return (
        <>
            <div className="border-2 border-black border-solid rounded-2xl">
                <InfoRow numStops={numStops} line={line}/>
            </div>
        </>
    )
}

export default Results