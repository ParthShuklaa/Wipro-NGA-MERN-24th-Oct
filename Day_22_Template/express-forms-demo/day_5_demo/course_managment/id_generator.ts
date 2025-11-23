function createIdGenerator(start = 1) {
  let current = start;
  return () => current++;
}

export const nextCourseId = createIdGenerator(1);
export const nextInstructorId = createIdGenerator(1);
export const nextStudentId = createIdGenerator(1);
