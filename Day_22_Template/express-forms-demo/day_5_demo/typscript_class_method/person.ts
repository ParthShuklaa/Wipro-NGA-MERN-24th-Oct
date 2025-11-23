export class Person{
    public name:string;
     protected age:number;
     readonly institute:string="";
     private id:number;
     static counter:number=0;
     
     constructor(name:string,age:number,institute:string){
        this.name=name;
        this.age=age;
        this.institute=institute;
        this.id=++Person.counter;
     }
     greet():string{
        return `Hello,My name is ${this.name} and I am ${this.age} years old, I study at ${this.institute}. My Id is ${this.id}`;
     }
     getAge():number{
        return this.age;
     }
     showId():number{
        return this.id;
     }
}

//  create student classs that extends person class
export class Student extends Person{
    private course:string[];
    constructor(name:string,age:number,institute:string,course:string[]){
        super(name,age,institute);
        this.course=course;
    }
    getstudentInfo():string{
        return `${this.greet()} I am studying ${this.course}.`;
    }
    addCourse(newCourse:string):void{
        this.course.push(newCourse);

    }
    public static getCounter():number{
        return Person.counter;
    }
    public greet(): string {
        return `Hi, I'm ${this.name}, a student of ${this.course} at ${this.institute}.`;
    }   
}