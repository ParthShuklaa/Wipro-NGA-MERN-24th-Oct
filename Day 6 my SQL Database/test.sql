CREATE DATABASE college_db;
USE college_db;

CREATE TABLE student (
  student_id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  course VARCHAR(50)
);

INSERT INTO student (name, course)
VALUES ('Asha Gupta', 'Database Systems'),
       ('Raj Verma', 'Data Structures');

SELECT * FROM student;
