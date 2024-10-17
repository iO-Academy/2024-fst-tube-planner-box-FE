import InfoRow from "../../molecules/InfoRow/index.jsx";
import H3Element from "../../atoms/H3Element/index.jsx";

const Results = ({numStops, line, route, selectedOriginStation, selectedDestinationStation}) => {


    const routeStations = []
    for (let i = 0; (i <= route.length - 2); i++) {

        routeStations.push(route[i])
    }


    return (
        <>
            <div className="border-2 border-black border-solid rounded-2xl bg-white m-4 min-h-72 shadow-2xl">
                <InfoRow numStops={numStops} line={line}/>


                <H3Element content={selectedDestinationStation}/>

                {

                    routeStations.map((stop) => (
                        <p>{stop.name}</p>
                    ))

                }
                <H3Element content={selectedOriginStation}/>
            </div>
        </>
    )
}

export default Results