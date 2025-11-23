import{useState} from "react";



type Nameprops ={
    name:string;
}
function FunctionalComponent({name}:Nameprops){
    const [userName,setName]=useState<string>(name);
    return(
  <div>
      <p>Hello, {userName}!</p>
      <input type="text"  onChange={(e) => setName(e.target.value)} placeholder="Enter your name"  />
    </div>

    );

}
export default FunctionalComponent;