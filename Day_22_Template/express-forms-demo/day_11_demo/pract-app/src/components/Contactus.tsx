// import { Component } from "react";
import React ,{Component, ReactNode} from "react";

// tsx arrow function
// const  Contactus =()=>{
//     const contactus =(
//             <div>Contactus-----Component</div>
    
//     );
//     return contactus;
// }

// export default Contactus;
// type conprops={
//     name: string;
// }

type Contactprops ={
    children?:ReactNode;
}
class Contactus extends Component<Contactprops>{
    render(){
        return (
        <div>Contactus-----Component
            {/* <p> {this.props.name}</p> */}
            <div> {this.props.children}</div>
        </div>
        )
    }
}

export default Contactus;