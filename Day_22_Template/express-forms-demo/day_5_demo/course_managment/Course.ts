import type { Course, CourseCategory } from "./interface.js";
import { courseStore, instructorStore, studentStore } from "./Storage.js";
import { nextCourseId } from "./id_generator.js";
import { LogAction } from "./logaction.js";

export class CourseManager {
  @LogAction
  createCourse(
    title: string,
    category: CourseCategory,
    instructorId: number | null = null,
    description?: string
  ): Course {
    const id = nextCourseId();
    const course: Course = {
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

  @LogAction
  assignInstructor(courseId: number, instructorId: number): boolean {
    const course = courseStore.get(courseId);
    const instructor = instructorStore.get(instructorId);

    if (!course || !instructor) return false;

    course.instructorId = instructorId;
    if (!instructor.courseIds.includes(courseId))
      instructor.courseIds.push(courseId);
    return true;
  }

  @LogAction
  enrollStudent(courseId: number, studentId: number): boolean {
    const course = courseStore.get(courseId);
    const student = studentStore.get(studentId);

    if (!course || !student) return false;

    if (!course.studentIds.includes(studentId))
      course.studentIds.push(studentId);
    if (!student.enrolledCourses.includes(courseId))
      student.enrolledCourses.push(courseId);
    return true;
  }

  @LogAction
  getCourse(courseId: number): Course | undefined {
    return courseStore.get(courseId);
  }

  @LogAction
  getAllCourses(): Course[] {
    return Array.from(courseStore.values());
  }

  @LogAction
  updateCourse(courseId: number, patch: Partial<Course>): Course | undefined {
    const course = courseStore.get(courseId);
    if (!course) return undefined;

    Object.assign(course, patch);
    return course;
  }

  @LogAction
  removeCourse(courseId: number): boolean {
    return courseStore.delete(courseId);
  }
}
