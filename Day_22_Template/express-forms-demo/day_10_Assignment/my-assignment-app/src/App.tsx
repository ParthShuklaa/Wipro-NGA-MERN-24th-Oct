import React, { useState } from "react";
import { NumberItem } from "./interfaces/NumberItem";
import NumberList from "./components/NumberList";
import FilterControls from "./components/FilterControls";
import Logger from "./components/Logger";
import HoistingDemo from "./components/HoistingDemo";
import ConstructorDemo from "./components/ConstructorDemo";

const App: React.FC = () => {
  const [numbers, setNumbers] = useState<NumberItem[]>([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);

  const [originalNumbers] = useState<NumberItem[]>([
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ]);

  const handleFilterEven = () => {
    const filtered = numbers.filter((n) => n.value % 2 === 0);
    setNumbers(filtered);
  };

  const handleDouble = () => {
    const doubled = numbers.map((n) => ({ value: n.value * 2 }));
    setNumbers(doubled);
  };

  const handleReset = () => {
    setNumbers(originalNumbers);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React + TypeScript JavaScript Concepts Demo</h2>

      <FilterControls
        onFilterEven={handleFilterEven}
        onDouble={handleDouble}
        onReset={handleReset}
      />

      <NumberList numbers={numbers} />
      <Logger numbers={numbers} />

      <hr />
      <HoistingDemo />
      <hr />
      <ConstructorDemo />
    </div>
  );
};

export default App;
