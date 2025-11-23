var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { courseStore, instructorStore, studentStore } from "./Storage.js";
import { nextCourseId } from "./id_generator.js";
import { LogAction } from "./logaction.js";
export class CourseManager {
    createCourse(title, category, instructorId = null, description) {
        const id = nextCourseId();
        const course = {
            id,
            title,
            description,
            category,
            instructorId,
            studentIds: [],
        };
        courseStore.set(id, course);
        if (instructorId !== null) {
            const instructor = instructorStore.get(instructorId);
            if (instructor && !instructor.courseIds.includes(id)) {
                instructor.courseIds.push(id);
            }
        }
        return course;
    }
    assignInstructor(courseId, instructorId) {
        const course = courseStore.get(courseId);
        const instructor = instructorStore.get(instructorId);
        if (!course || !instructor)
            return false;
        course.instructorId = instructorId;
        if (!instructor.courseIds.includes(courseId))
            instructor.courseIds.push(courseId);
        return true;
    }
    enrollStudent(courseId, studentId) {
        const course = courseStore.get(courseId);
        const student = studentStore.get(studentId);
        if (!course || !student)
            return false;
        if (!course.studentIds.includes(studentId))
            course.studentIds.push(studentId);
        if (!student.enrolledCourses.includes(courseId))
            student.enrolledCourses.push(courseId);
        return true;
    }
    getCourse(courseId) {
        return courseStore.get(courseId);
    }
    getAllCourses() {
        return Array.from(courseStore.values());
    }
    updateCourse(courseId, patch) {
        const course = courseStore.get(courseId);
        if (!course)
            return undefined;
        Object.assign(course, patch);
        return course;
    }
    removeCourse(courseId) {
        return courseStore.delete(courseId);
    }
}
__decorate([
    LogAction
], CourseManager.prototype, "createCourse", null);
__decorate([
    LogAction
], CourseManager.prototype, "assignInstructor", null);
__decorate([
    LogAction
], CourseManager.prototype, "enrollStudent", null);
__decorate([
    LogAction
], CourseManager.prototype, "getCourse", null);
__decorate([
    LogAction
], CourseManager.prototype, "getAllCourses", null);
__decorate([
    LogAction
], CourseManager.prototype, "updateCourse", null);
__decorate([
    LogAction
], CourseManager.prototype, "removeCourse", null);
