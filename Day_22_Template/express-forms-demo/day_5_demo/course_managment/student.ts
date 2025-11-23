import type { Student } from "./interface.js";
import { courseStore, studentStore } from "./Storage.js";
import { nextStudentId } from "./id_generator.js";
import { LogAction } from "./logaction.js";

export class StudentManager {
  @LogAction
  addStudent(name: string): Student {
    const id = nextStudentId();
    const student: Student = { id, name, enrolledCourses: [] };
    studentStore.set(id, student);
    return student;
  }

  @LogAction
  getStudent(id: number): Student | undefined {
    return studentStore.get(id);
  }

  @LogAction
  getAllStudents(): Student[] {
    return Array.from(studentStore.values());
  }

  @LogAction
  unenrollStudent(courseId: number, studentId: number): boolean {
    const course = courseStore.get(courseId);
    const student = studentStore.get(studentId);
    if (!course || !student) return false;

    course.studentIds = course.studentIds.filter((s) => s !== studentId);
    student.enrolledCourses = student.enrolledCourses.filter(
      (c) => c !== courseId
    );
    return true;
  }

  @LogAction
  removeStudent(id: number): boolean {
    const student = studentStore.get(id);
    if (!student) return false;

    // Remove student from enrolled courses
    for (const cid of student.enrolledCourses) {
      const course = courseStore.get(cid);
      if (course)
        course.studentIds = course.studentIds.filter((s) => s !== id);
    }

    return studentStore.delete(id);
  }

  public *studentIterator(): IterableIterator<Student> {
    for (const s of studentStore.values()) yield s;
  }
}
