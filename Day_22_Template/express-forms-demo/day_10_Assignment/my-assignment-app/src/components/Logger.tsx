import React from "react";
import { NumberItem } from "../interfaces/NumberItem";

interface LoggerProps {
  numbers: NumberItem[];
}

const Logger: React.FC<LoggerProps> = ({ numbers }) => {
  const logNumbers = () => {
    console.log("Logging numbers:");
    numbers.forEach((num) => console.log(num.value));
  };

  return <button onClick={logNumbers}>Log Numbers to Console</button>;
};

export default Logger;
