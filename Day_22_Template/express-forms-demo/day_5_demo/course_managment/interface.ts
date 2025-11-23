// course management interfaces

export enum CourseCategory {
  DEVELOPMENT = "Development",
  TESTING = "Testing",
  DESIGN = "Design",
  MARKETING = "Marketing",
  BUSINESS = "Business",
}

export interface Course {
  id: number;
  title: string;
  description?: string | undefined;
  category: CourseCategory;
  instructorId: number | null; // null if not assigned yet
  studentIds: number[];
}

export interface Instructor {
  id: number;
  name: string;
  expertise: CourseCategory[];
  courseIds: number[]; // list of course ids the instructor teaches
}

export interface Student {
  id: number;
  name: string;
  enrolledCourses: number[]; // course ids
}
