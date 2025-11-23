import React from 'react';
import Welcome from './components/Welcome'; 
import Contactus from './components/Contactus';

function App() {
  return (
    <div>
      <Welcome name="John" />
      <Welcome name = "vishwas"/>
     <Contactus/>{/* <-- Use your Contactus component here */}
     {/* <Contactus name="hii"/> */}
     <Contactus>this is come from contanct us</Contactus>

    </div>
  );
}

export default App;

