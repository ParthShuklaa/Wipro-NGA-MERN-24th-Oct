-- 1. Create Database


-- 2. Use Database
USE course_management_edupro;

-- 3. Create Department Table
CREATE TABLE IF NOT EXISTS department(
    departmentId INT AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(50) NOT NULL
);

-- 4. Insert into Department
INSERT INTO department(departmentName) VALUES
('Computer Science');

INSERT INTO department (departmentName) VALUES 
('Mathematics');

-- 5. Create Student Table
CREATE TABLE IF NOT EXISTS student(
    studentId VARCHAR(10) PRIMARY KEY,
    studentName VARCHAR(50) NOT NULL 
);

-- 6. Insert into Student
INSERT INTO student(studentId, studentName) VALUES 
('S101', 'Asha Gupta'),
('S102', 'Raj Verma');
INSERT INTO student (studentID, studentName) VALUES 
('S103','Priya Singh'),
('S104','Karan Mehta'),
('S105','Neha Joshi');

-- 7. Create Instructor Table
CREATE TABLE IF NOT EXISTS instructor(
    instructorId INT AUTO_INCREMENT PRIMARY KEY,
    instructorName VARCHAR(50) NOT NULL,
    departmentId INT,
    FOREIGN KEY (departmentId) REFERENCES department(departmentId)
);

-- 8. Insert into Instructor
INSERT INTO instructor(instructorName, departmentId) VALUES
('Dr. Mehta', 1),
('Dr. Sharma', 1);

INSERT INTO instructor(instructorName, departmentId) VALUES
('Dr. Khan', 2);
-- 9. Create Course Table
CREATE TABLE IF NOT EXISTS course (
    courseId INT AUTO_INCREMENT PRIMARY KEY,
    courseName VARCHAR(50) NOT NULL,
    instructorId INT,
    departmentId INT,
    FOREIGN KEY (instructorId) REFERENCES instructor(instructorId),
    FOREIGN KEY (departmentId) REFERENCES department(departmentId)
);

-- 10. Insert into Course
INSERT INTO course(courseName, instructorId, departmentId) VALUES
('Database Systems', 1, 1),
('Data Structures', 2, 1);




INSERT INTO course(courseName, instructorId, departmentId) VALUES
('Algorithms', 2, 1),
('Calculus', 3, 2),
('Linear Algebra', 3, 2);
-- 11. Create Enrollment Table
CREATE TABLE IF NOT EXISTS enrollment (
    enrollmentID INT AUTO_INCREMENT PRIMARY KEY,
    studentID VARCHAR(10),
    courseID INT,
    grade CHAR(2),
    FOREIGN KEY (studentID) REFERENCES student(studentID),
    FOREIGN KEY (courseID) REFERENCES course(courseID)
);

-- 12. Insert into Enrollment
INSERT INTO enrollment(studentID, courseID, grade) VALUES 
('S101', 1, 'A'),
('S102', 2, 'B');

INSERT INTO enrollment(studentID, courseID, grade) VALUES 
('S103', 3, NULL),
('S104', 4, 'A'),
('S105', 5, NULL),
('S101', 2, 'A');


--  List of students with their enrolled courses and instructors (INNER JOIN)
SELECT s.studentName, c.courseName, i.instructorName
FROM enrollment e
INNER JOIN student s ON e.studentID = s.studentID
INNER JOIN course c ON e.courseID = c.courseID
INNER JOIN instructor i ON c.instructorId = i.instructorId;

-- 2. Display all courses along with their department names (INNER JOIN)
SELECT c.courseName, d.departmentName
FROM course c
INNER JOIN department d ON c.departmentId = d.departmentId;

-- 3. Retrieve all students and courses including those without a grade (LEFT JOIN)
SELECT s.studentName, c.courseName, e.grade
FROM student s
LEFT JOIN enrollment e ON s.studentID = e.studentID
LEFT JOIN course c ON e.courseID = c.courseID;
-- 4. List instructors who currently have no students assigned (RIGHT JOIN)
SELECT i.instructorName, c.courseName
FROM enrollment e
RIGHT JOIN course c ON e.courseID = c.courseID
RIGHT JOIN instructor i ON c.instructorId = i.instructorId
WHERE e.studentID IS NULL;

-- Retrieve all students who scored the highest grade (‘A’) in any course
SELECT studentName
FROM student 
WHERE studentID IN (
    SELECT studentID
    FROM enrollment
    WHERE grade = 'A'
);
-- List students who have not enrolled in any course (subquery with NOT IN)
SELECT studentName
FROM student
WHERE studentID NOT IN (
    SELECT DISTINCT studentID
    FROM enrollment
);
