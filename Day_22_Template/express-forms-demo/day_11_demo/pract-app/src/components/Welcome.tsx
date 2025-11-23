import React from "react";


// jsx

// function welcome (props){
//     return(
//         <div>
//                 <h2> Hello, {props.name}!</h2>
//                 <p> Welcome to oour first react component </p>
//             </div>
//     );
// }

// export deafault welcome;

// tsx
type welcomeprops ={
    name: String;
}

function welcome ({name}: welcomeprops){
    return(
         <div>
               <h2> Hello, {name}!</h2>
               <p> Welcome to oour first react component </p>
           </div>

    );
}

export default welcome;
