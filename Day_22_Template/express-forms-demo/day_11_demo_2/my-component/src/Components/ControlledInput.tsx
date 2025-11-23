import {useState} from "react";
import { type ChangeEvent } from "react";


function ControlledInput(){
    const[value ,setValue]=useState<string>("");
    const handleChanges = (event:ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    };

    
    return(
        <div>
            <label>enter something
            <input type="text" value={value} onChange={handleChanges}/>
           </label>
           <p>you typed:{value}</p>
        </div>

    );
}
export default ControlledInput;