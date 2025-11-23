export class Person {
    constructor(name, age, institute) {
        this.institute = "";
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    }
    greet() {
        return `Hello,My name is ${this.name} and I am ${this.age} years old, I study at ${this.institute}. My Id is ${this.id}`;
    }
    getAge() {
        return this.age;
    }
    showId() {
        return this.id;
    }
}
Person.counter = 0;
//  create student classs that extends person class
export class Student extends Person {
    constructor(name, age, institute, course) {
        super(name, age, institute);
        this.course = course;
    }
    getstudentInfo() {
        return `${this.greet()} I am studying ${this.course}.`;
    }
    addCourse(newCourse) {
        this.course.push(newCourse);
    }
    static getCounter() {
        return Person.counter;
    }
    greet() {
        return `Hi, I'm ${this.name}, a student of ${this.course} at ${this.institute}.`;
    }
}
