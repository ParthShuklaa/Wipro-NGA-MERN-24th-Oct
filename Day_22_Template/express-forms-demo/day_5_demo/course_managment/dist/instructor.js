var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { courseStore, instructorStore } from "./Storage.js";
import { nextInstructorId } from "./id_generator.js";
import { LogAction } from "./logaction.js";
export class InstructorManager {
    addInstructor(name, expertise) {
        const id = nextInstructorId();
        const instructor = { id, name, expertise, courseIds: [] };
        instructorStore.set(id, instructor);
        return instructor;
    }
    getInstructor(id) {
        return instructorStore.get(id);
    }
    getAllInstructors() {
        return Array.from(instructorStore.values());
    }
    removeInstructor(id) {
        const inst = instructorStore.get(id);
        if (!inst)
            return false;
        // Unassign instructor from any courses they taught
        for (const cid of inst.courseIds) {
            const course = courseStore.get(cid);
            if (course && course.instructorId === id) {
                course.instructorId = null;
            }
        }
        return instructorStore.delete(id);
    }
    *instructorIterator() {
        for (const inst of instructorStore.values())
            yield inst;
    }
}
__decorate([
    LogAction
], InstructorManager.prototype, "addInstructor", null);
__decorate([
    LogAction
], InstructorManager.prototype, "getInstructor", null);
__decorate([
    LogAction
], InstructorManager.prototype, "getAllInstructors", null);
__decorate([
    LogAction
], InstructorManager.prototype, "removeInstructor", null);
