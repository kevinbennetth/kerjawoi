import { useState } from "react";

const TextInput = ({placeholder, name, submit})=>{
    const [value, setValue] = useState(placeholder);
    const changeValue = (e)=>setValue(e.target.value);
    const submitValue = ()=>submit(value);
    return(
        <span className="ml-10 mt-5 text-xl font-medium flex items-center">
            <span className="mr-20">{name}</span>: 
            <input 
                type="text" 
                value={value} 
                onChange={changeValue} 
                onSubmit={submitValue}
                className='grow ml-4 outline-none p-2 bg-dark-white rounded-md drop-shadow'
            />
        </span>
    )
}

export default TextInput;