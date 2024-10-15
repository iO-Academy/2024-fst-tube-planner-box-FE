const StationOptionElement = ({disabled = false, value}) => {
    return (
        <option disabled={disabled} value={value}>{value}</option>
    )
}
export default StationOptionElement