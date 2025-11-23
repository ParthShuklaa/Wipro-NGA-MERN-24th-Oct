import React from "react";

const HoistingDemo: React.FC = () => {
  // Variable hoisting demo
  const variableHoistingExample = () => {
    console.log("Value of x before declaration:"); // undefined due to hoisting
    var x = 10;
    console.log("Value of x after declaration:", x);
  };

  // Function hoisting demo
  functionHoistingExample(); // Works before it's declared

  function functionHoistingExample() {
    console.log("Function hoisting works!");
  }

  return (
    <div>
      <h3>Hoisting Demo</h3>
      <button onClick={variableHoistingExample}>Run Variable Hoisting Demo</button>
      <p>(Check console for output)</p>
    </div>
  );
};

export default HoistingDemo;
