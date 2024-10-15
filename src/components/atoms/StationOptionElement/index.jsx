const StationOptionElement = ({value, tailwind}) => {
    return (
        <option value={value} className={tailwind}>{value}</option>
    )
}

export default StationOptionElement