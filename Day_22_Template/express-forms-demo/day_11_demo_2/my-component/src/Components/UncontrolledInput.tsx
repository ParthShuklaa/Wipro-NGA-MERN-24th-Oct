import { useRef } from "react";



function UncontrolledInput(){
    const inputRef =useRef<HTMLInputElement>(null);

    const handleSubmit =()=>{
        const inputvalue = inputRef.current?.value;
        alert(`you typed:${inputvalue}`);

    };
    return(
        <div>
            <label > enter something
                <input type="text" ref={inputRef} placeholder="type here"/>
            </label>
            <button onClick={handleSubmit}>show value</button>
        </div>
    )
}
export default UncontrolledInput;