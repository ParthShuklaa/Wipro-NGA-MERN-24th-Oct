export declare enum CourseCategory {
    DEVELOPMENT = "Development",
    DESIGN = "Design",
    MARKETING = "Marketing",
    BUSINESS = "Business"
}
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
export declare const courses: Map<number, Course>;
export declare const instructors: Map<number, Instructor>;
export declare const students: Map<number, Student>;
export declare function LogAction(target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
export declare class CourseManager {
    private courseIdCounter;
    createCourse(title: string, category: CourseCategory, instructorId: number): Course;
    enrollStudent(courseId: number, studentId: number): void;
    getCourseDetails(courseId: number): Course | undefined;
    getAllCourses(): Course[];
    courseIterator(): IterableIterator<Course>;
    instructorIterator(): IterableIterator<Instructor>;
    studentIterator(): IterableIterator<Student>;
    addInstructor(name: string, expertise: CourseCategory[]): Instructor;
    addStudent(name: string): Student;
    getStudentDetails(studentId: number): Student | undefined;
    getInstructorDetails(instructorId: number): Instructor | undefined;
    getAllInstructors(): Instructor[];
    printSummary(): void;
}
//# sourceMappingURL=courseApp.d.ts.map