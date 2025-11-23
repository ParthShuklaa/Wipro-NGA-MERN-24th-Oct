import type { Instructor, CourseCategory } from "./interface.js";
import { courseStore, instructorStore } from "./Storage.js";
import { nextInstructorId } from "./id_generator.js";
import { LogAction } from "./logaction.js";

export class InstructorManager {
  @LogAction
  addInstructor(name: string, expertise: CourseCategory[]): Instructor {
    const id = nextInstructorId();
    const instructor: Instructor = { id, name, expertise, courseIds: [] };
    instructorStore.set(id, instructor);
    return instructor;
  }

  @LogAction
  getInstructor(id: number): Instructor | undefined {
    return instructorStore.get(id);
  }

  @LogAction
  getAllInstructors(): Instructor[] {
    return Array.from(instructorStore.values());
  }

   @LogAction
  removeInstructor(id: number): boolean {
    const inst = instructorStore.get(id);
    if (!inst) return false;

    // Unassign instructor from any courses they taught
    for (const cid of inst.courseIds) {
      const course = courseStore.get(cid);
      if (course && course.instructorId === id) {
        course.instructorId = null;
      }
    }

    return instructorStore.delete(id);
  }

  public *instructorIterator(): IterableIterator<Instructor> {
    for (const inst of instructorStore.values()) yield inst;
  }
}
