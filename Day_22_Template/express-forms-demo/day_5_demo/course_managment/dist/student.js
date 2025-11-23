var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { courseStore, studentStore } from "./Storage.js";
import { nextStudentId } from "./id_generator.js";
import { LogAction } from "./logaction.js";
export class StudentManager {
    addStudent(name) {
        const id = nextStudentId();
        const student = { id, name, enrolledCourses: [] };
        studentStore.set(id, student);
        return student;
    }
    getStudent(id) {
        return studentStore.get(id);
    }
    getAllStudents() {
        return Array.from(studentStore.values());
    }
    unenrollStudent(courseId, studentId) {
        const course = courseStore.get(courseId);
        const student = studentStore.get(studentId);
        if (!course || !student)
            return false;
        course.studentIds = course.studentIds.filter((s) => s !== studentId);
        student.enrolledCourses = student.enrolledCourses.filter((c) => c !== courseId);
        return true;
    }
    removeStudent(id) {
        const student = studentStore.get(id);
        if (!student)
            return false;
        // Remove student from enrolled courses
        for (const cid of student.enrolledCourses) {
            const course = courseStore.get(cid);
            if (course)
                course.studentIds = course.studentIds.filter((s) => s !== id);
        }
        return studentStore.delete(id);
    }
    *studentIterator() {
        for (const s of studentStore.values())
            yield s;
    }
}
__decorate([
    LogAction
], StudentManager.prototype, "addStudent", null);
__decorate([
    LogAction
], StudentManager.prototype, "getStudent", null);
__decorate([
    LogAction
], StudentManager.prototype, "getAllStudents", null);
__decorate([
    LogAction
], StudentManager.prototype, "unenrollStudent", null);
__decorate([
    LogAction
], StudentManager.prototype, "removeStudent", null);
