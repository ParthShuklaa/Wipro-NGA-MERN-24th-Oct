// // We have to implement following Problem Statement: “Online Course Management System (Mini App)”
// You need to build a small TypeScript-based console app to manage online courses, instructors, and students.
// The app should:
// Store data using Maps, Arrays, and Tuples
// Define structure using Interfaces
// Use Enums for course categories
// Demonstrate Iterators to loop through collections
// Apply Decorators for logging actions
// Use Type annotations, any type, and declarations appropriately

// Step 1: Create Enum for Course Categories
export enum CourseCategory {
    DEVELOPMENT = "Development",
    DESIGN = "Design",
    MARKETING = "Marketing",
    BUSINESS = "Business"
}

// Step 2: Define Interfaces for Course, Instructor, and Student    
export interface Course {
    id: number;
    title: string;
    category: CourseCategory;
    instructorId: number;
    studentIds: number[];
}
export interface Instructor {
    id: number;
    name: string;
    expertise: CourseCategory[];
}
export interface Student {
    id: number;
    name: string;
    enrolledCourses: number[];
}

//Step 3: Create Maps to store data
//Map will help us in storing key value pairs where key will be id and value will be object of respective type
export const courses: Map<number, Course> = new Map();
export const instructors: Map<number, Instructor> = new Map();
export const students: Map<number, Student> = new Map();    

// Step 4: Implement Decorator for logging actions where we will log method name and its arguments  

export function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Action: ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }
    return descriptor;
}   
// The above code sets up the foundational structures for the Online Course Management System mini app using TypeScript.
// Decorators are applied to methods to log their calls and arguments. so that we can track actions performed in the system.
// LogAction decorator is defined to log method calls and their arguments.

// Further implementation would involve creating classes or functions to manage courses, instructors, and students,
// utilizing the defined interfaces, enums, and data structures.
// Step 5: Further implementation can be done by creating classes or functions to manage courses, instructors, and students
// utilizing the defined interfaces, enums, and data structures.

//Step 5: Example class to manage Courses with Decorator applied
export class CourseManager {
    private courseIdCounter: number = 1;    

    @LogAction // Applying Decorator to log method calls
    public createCourse(title: string, category: CourseCategory, instructorId: number): Course { 
        //method to create a new course
        const newCourse: Course = {
            id: this.courseIdCounter++,
            title,
            category,
            instructorId,
            studentIds: []
        };
        courses.set(newCourse.id, newCourse);
        return newCourse;
    }
    @LogAction
    public enrollStudent(courseId: number, studentId: number): void { //method to enroll student in a course
        const course = courses.get(courseId);
        const student = students.get(studentId);
        if (course && student) {
            course.studentIds.push(studentId);
            student.enrolledCourses.push(courseId);
        } else {
            console.log("Course or Student not found!");
        }
    }   

    @LogAction
    public getCourseDetails(courseId: number): Course | undefined { //method to get course details
        return courses.get(courseId);
    }

    @LogAction
    public getAllCourses(): Course[] { //method to get all courses
        return Array.from(courses.values());
    }

    //Step 6: Implementing Iterator to loop through courses
    public *courseIterator(): IterableIterator<Course> { 
        //generator function to iterate through courses where * indicates generator function and IterableIterator is the return type
        for (const course of courses.values()) {
            yield course;
        }
    }
    //Step 7: Further methods to manage instructors and students can be added similarly with appropriate decorators and logic
    public *instructorIterator(): IterableIterator<Instructor> {
        //generator function to iterate through instructors
        for (const instructor of instructors.values()) {
            yield instructor;
        }
    }

    public *studentIterator(): IterableIterator<Student> {
        //generator function to iterate through students
        for (const student of students.values()) {
            yield student;
        }
    }

    //Step 8: Additional methods to add instructors and students with logging
    @LogAction
    public addInstructor(name: string, expertise: CourseCategory[]): Instructor {
        const newInstructor: Instructor = {
            id: instructors.size + 1,
            name,
            expertise
        };
        instructors.set(newInstructor.id, newInstructor);
        return newInstructor;
    }

    //Step 9: Method to add students with logging
    @LogAction
    public addStudent(name: string): Student {
        const newStudent: Student = {
            id: students.size + 1,
            name,
            enrolledCourses: []
        };
        students.set(newStudent.id, newStudent);
        return newStudent;
    }

    //Step 10: Method to get student details with logging
    @LogAction
    public getStudentDetails(studentId: number): Student | undefined {
        return students.get(studentId);
    }   

    //Step 11: Method to get instructor details with logging
    @LogAction
    public getInstructorDetails(instructorId: number): Instructor | undefined {
        return instructors.get(instructorId);
    }

    //Step 12: Method to get all instructors with logging
    @LogAction
    public getAllInstructors(): Instructor[] {
        return Array.from(instructors.values());
    }

    //Step 13: Print summary of all data
    @LogAction
    public printSummary(): void {
        console.log("Courses:", Array.from(courses.values()));
        console.log("Instructors:", Array.from(instructors.values()));
        console.log("Students:", Array.from(students.values()));
    }

}
//end of CourseManager class with various methods to manage courses, instructors, and students

//Demo execution can be done in a separate file where we can create an instance of CourseManager and call its methods to demonstrate functionality

// Create an instance of CourseManager
const courseManager = new CourseManager();

// Example usage
const instructor1 = courseManager.addInstructor("John Doe", [CourseCategory.DEVELOPMENT]);
const student1 = courseManager.addStudent("Alice Smith");
const course1 = courseManager.createCourse("TypeScript Basics", CourseCategory.DEVELOPMENT, instructor1.id);
courseManager.enrollStudent(course1.id, student1.id);

// Print summary
courseManager.printSummary();

// Fetch and display all courses
const allCourses = courseManager.getAllCourses();
console.log("All Courses:", allCourses);
// Fetch and display course details 
const courseDetails = courseManager.getCourseDetails(course1.id);
console.log("Course Details:", courseDetails);
// The above code demonstrates the creation of instructors, students, and courses,
// as well as enrolling students in courses using the CourseManager class.
// It also showcases the use of decorators for logging actions within the system.

//iterators and generators can be implemented in various parts of the system as needed,
// such as iterating over student enrollments or course lists, depending on further requirements.

// StudentManager class can be implemented similarly to CourseManager
// with methods to manage student-specific actions and data.
// Decorator function to log method calls and their arguments
function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;    
    descriptor.value = function (...args: any[]) {
        console.log(`Action: ${propertyKey} called with arguments: ${JSON.stringify(args)}`);
        return originalMethod.apply(this, args);
    }

    return descriptor;
}

// The LogAction decorator can be applied to methods in other classes
// to log their calls and arguments for better traceability in the system.