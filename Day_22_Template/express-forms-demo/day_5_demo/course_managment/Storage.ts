import type { Course, Instructor, Student } from "./interface.js";

export const courseStore = new Map<number, Course>();
export const instructorStore = new Map<number, Instructor>();
export const studentStore = new Map<number, Student>();
