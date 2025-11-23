import React from "react";

const ConstructorDemo: React.FC = () => {
  // Constructor function
  function Person(this: any, name: string, age: number) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
      console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    };
  }

  const handleCreatePerson = () => {
    const person1 = new (Person as any)("Alice", 25);
    const person2 = new (Person as any)("Bob", 30);
    person1.introduce();
    person2.introduce();
  };

  return (
    <div>
      <h3>Constructor Demo</h3>
      <button onClick={handleCreatePerson}>Run Constructor Demo</button>
      <p>(Check console for output)</p>
    </div>
  );
};

export default ConstructorDemo;
