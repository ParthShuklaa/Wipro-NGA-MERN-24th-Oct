// This file will have person class and Student implementation with constructor and methods  
// here we are using export before class so that this class can be imported in other files
export class Person {
   public  name: string;
    protected age: number;   //protected property can be accessed in derived classes
    readonly institute : string;
    private id : number;
    static counter: number = 0;

    // We are defining constructor to initialize the properties of the class
    constructor(name: string, age: number, institute: string) {
        this.name = name;
        this.age = age;
        this.institute = institute;
        this.id = ++Person.counter;
    } 
    // method to greet whcih can be accessed publicly via object of the class
 public greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}. My ID is ${this.id}.`;
    }
    // Protected method to get age and it can be accessed in derived classes
protected getAge(): number {
        return this.age;
    }

    // Method to show private id within the class
    public showId(): number {
        return this.id;
    }
}
//Closing the class Person

// Now we will create a Student class which will extend Person class

export class Student extends Person {
    // Additional property for Student class which is a list of skills
    private skills: string[];

    // Constructor for Student class which calls the parent constructor using super keyword
    constructor(name: string, age: number, institute: string, skills: string[]) {
        super(name, age, institute); // calling parent class constructor
        this.skills = skills;
    }

    // Method to get student details including skills and greeting from parent class
    public getStudentDetails(): string {
        return `${this.greet()} I have the following skills: ${this.skills.join(", ")}.`;
    }

    // Method to add a new skill to the student's skill set
    public addSkill(skill: string): void {
        this.skills.push(skill); //pushing new skill to skills array
    }
    //a method to display protected age from parent class along with skills
    public display(): void {
        console.log(`My age is ${this.getAge()} years and my skills are: ${this.skills.join(", ")}.`);
    }

    // there is need of overriding greet method here as it is already public in parent class and accessible via object of Student class
    public greet(): string {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I study at ${this.institute}
         I have the following skills: ${this.skills.join(", ")}.`;
    }

} //Closing the Student class