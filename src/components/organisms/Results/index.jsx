import H3Element from "../../atoms/H3Element/index.jsx";

const Results = ({ route, selectedOriginStation, selectedDestinationStation }) => {
    const routeStations = route.slice(1, -1)
    const routeLine = routeStations.length > 0 ? routeStations[0].line : '';



    if (routeStations.length === 0) {
        return null
    }

    return (
        <div className="border-2 border-black border-solid rounded-2xl bg-white m-4 min-h-72 shadow-2xl">
            <div className='flex justify-between'>
                <H3Element content={'Stops: ' + (routeStations.length + 1)} />
                <H3Element content={'Line ' + routeLine} />
            </div>
            <div className='text-center'>
                <p className='text-2xl text-cyan-700 m-2'>From: {selectedDestinationStation}</p>
                {
                    routeStations.map((stop, index) => (
                        <p key={index}>{stop.name}</p>
                    ))
                }
                <p className='text-2xl text-cyan-700 m-2'>To: {selectedOriginStation}</p>
            </div>
        </div>
    )
}

export default Results;
