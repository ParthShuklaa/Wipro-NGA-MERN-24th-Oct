import { CourseCategory } from "./interface.js";
import { CourseManager } from "./Course.js";
import { InstructorManager } from "./instructor.js";
import { StudentManager } from "./student.js";
// Initialize managers
const courseManager = new CourseManager();
const instructorManager = new InstructorManager();
const studentManager = new StudentManager();
console.log("=== COURSE MANAGEMENT SYSTEM DEMO ===\n");
// 1️⃣ Add instructors
const vishwas = instructorManager.addInstructor("vishwas kumawat", [
    CourseCategory.DEVELOPMENT,
    CourseCategory.TESTING,
]);
const arjun = instructorManager.addInstructor("arjun das", [
    CourseCategory.DESIGN,
    CourseCategory.MARKETING,
]);
console.log("\nInstructors:", instructorManager.getAllInstructors());
// 2️⃣ Add students
const vishu = studentManager.addStudent("vishu");
const yash = studentManager.addStudent("yash");
console.log("\nStudents:", studentManager.getAllStudents());
// 3️⃣ Create courses
const jsCourse = courseManager.createCourse("JavaScript for Beginners", CourseCategory.DEVELOPMENT, vishwas.id, "Learn the fundamentals of JavaScript.");
const uiCourse = courseManager.createCourse("UI/UX Design", CourseCategory.DESIGN, arjun.id, "Design beautiful user interfaces.");
console.log("\nCourses after creation:", courseManager.getAllCourses());
// 4️⃣ Enroll students
courseManager.enrollStudent(jsCourse.id, vishu.id);
courseManager.enrollStudent(jsCourse.id, yash.id);
courseManager.enrollStudent(uiCourse.id, vishu.id);
console.log("\nCourses after enrollment:", courseManager.getAllCourses());
console.log("Students after enrollment:", studentManager.getAllStudents());
// 5️⃣ Unenroll a student
studentManager.unenrollStudent(jsCourse.id, yash.id);
console.log("\nAfter unenrolling Bob from JS course:");
console.log("Courses:", courseManager.getAllCourses());
console.log("Students:", studentManager.getAllStudents());
// 6️⃣ Update course details
courseManager.updateCourse(jsCourse.id, {
    title: "Advanced JavaScript",
    description: "Deep dive into modern JS concepts.",
});
console.log("\nUpdated JS Course:", courseManager.getCourse(jsCourse.id));
// 7️⃣ Remove an instructor (auto-unassign from their courses)
instructorManager.removeInstructor(arjun.id);
console.log("\nAfter removing instructor Jane:");
console.log("Courses:", courseManager.getAllCourses());
console.log("Instructors:", instructorManager.getAllInstructors());
// 8️⃣ Remove a student
studentManager.removeStudent(vishu.id);
console.log("\nAfter removing Alice:");
console.log("Courses:", courseManager.getAllCourses());
console.log("Students:", studentManager.getAllStudents());
console.log("\n=== DEMO COMPLETE ===");
