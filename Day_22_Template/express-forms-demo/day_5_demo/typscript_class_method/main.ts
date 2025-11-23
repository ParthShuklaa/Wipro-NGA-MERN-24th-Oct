// // import person class and student class
// import { Person, Student } from "./person.js";
// let student1=new Student("Vishwas",23,"Wipro",["MERN","JAVA"]);
// console.log(student1.getstudentInfo());
// student1.addCourse("Full Stack Development");
// console.log(student1.getstudentInfo());
// console.log("Total Persons Created: "+Student.getCounter());


// // creating object of person class and student class
// let person1=new Person("voshwas",23,"SVIT");
// console.log(person1.greet());
// // accessing protected member using method
// console.log("Age of person1 is: "+person1.getAge());
// // accessing private member using method
// console.log("Id of person1 is: "+person1.showId());
// // accessing public member directly
// console.log("Name of person1 is: "+person1.name);

 import { Person, Student } from "./person.js";

const outputDiv = document.getElementById("output") as HTMLElement;

let student1 = new Student("Vishwas", 23, "Wipro", ["MERN","JAVA"]);
outputDiv.innerHTML += student1.getstudentInfo() + "<br>";
student1.addCourse("Full Stack Development");
outputDiv.innerHTML += student1.getstudentInfo() + "<br>";
outputDiv.innerHTML += "Total Persons Created: " + Student.getCounter() + "<br>";

let person1 = new Person("Voshwas", 23, "SVIT");
outputDiv.innerHTML += person1.greet() + "<br>";
outputDiv.innerHTML += "Age: " + person1.getAge() + "<br>";
outputDiv.innerHTML += "ID: " + person1.showId() + "<br>";
outputDiv.innerHTML += "Name: " + person1.name + "<br>";



// import { Person, Student } from "./person.js";

// const outputDiv = document.getElementById("output") as HTMLElement;

// function print(msg: string) {
//     outputDiv.innerHTML += msg + "<br>";
// }

// let student1 = new Student("Vishwas", 23, "Wipro", ["MERN", "JAVA"]);
// print(student1.getstudentInfo());

// student1.addCourse("Full Stack Development");
// print(student1.getstudentInfo());
// print("Total Persons Created: " + Student.getCounter());

// let person1 = new Person("Vishwas", 23, "SVIT");
// print(person1.greet());
// print("Age of person1 is: " + person1.getAge());
// print("Id of person1 is: " + person1.showId());
// print("Name of person1 is: " + person1.name);









