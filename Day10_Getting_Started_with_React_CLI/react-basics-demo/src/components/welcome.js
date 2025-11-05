// here we will add smaple code for welcome coponent 


//Step 1 : Importing react from 'react' ;
//Step 2: creating a function that returns JSX
//Step 3: importing this component and using it in app.js
//Step 4: running and building 

import React  from "react";

function Welcome(props) {
    return (
            <div>
                <h2> Hello, {props.name}!</h2>
                <p> Welcome to oour first react component </p>
            </div>
    );
    
}//closing function

export default Welcome; // exporting function 