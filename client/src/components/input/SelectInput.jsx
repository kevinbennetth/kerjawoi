const SelectInput = ({className, options, onChange})=>{
    const select = (e)=>onChange(e.target.value);
    return(
        <select className={`p-2 bg-dark-white rounded-md drop-shadow ${className}`} onChange={select}>
            {options.map((option, key)=>{
                return <option key={key} value={option}>{option}</option>
            })}
        </select>
    )
}

export default SelectInput;