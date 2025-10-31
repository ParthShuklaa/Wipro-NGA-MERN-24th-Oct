-- We have to follow below steps for getting started with Database
-- Step 1: Install MySQL Server and MySQL Workbench
-- Step 2: Creating a Database or use an existing Database
-- Step 3: Creating a Table with required columns, column data types and constraints
-- Step 4: Inserting Data into the Table    
-- Step 5: Querying the Data from the Table  using SELECT statement
-- Step 6: Updating the Data in the Table using UPDATE statement
-- Step 7: Deleting the Data from the Table using DELETE statement
-- Step 8: Using WHERE clause to filter the data based on conditions
-- Step 9: Using ORDER BY clause to sort the data
-- Step 10: Using Aggregate functions like COUNT, SUM, AVG, MAX, MIN
-- Step 11: Using GROUP BY clause to group the data based on a column
-- Step 12: Using JOINs to combine data from multiple tables

-- following types of relational Databases are famous in industry
-- mySQL : Open Source Database widely used in Web Applications
-- PostgreSQL : Advanced Open Source Database with strong community support
-- Oracle : Enterprise level Database with advanced features and support
-- Microsoft SQL Server : Enterprise level Database used in large organizations MS Stack based applications
-- SQLite : Lightweight Database often used in mobile applications
-- MariaDB : Fork of MySQL with additional features and improvements
-- IBM DB2 : Enterprise level Database used in large organizations with IBM Stack based applications

-- Creating a Database
CREATE DATABASE IF NOT EXISTS EmployeeDB; //Creating  the DB if it doesnt exist already
USE EmployeeDB; //Using the created DB  
-- Creating a Table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY AUTO_INCREMENT, -- Primary Key with Auto Increment when we dont want user to provide value for this column   
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    HireDate DATE NOT NULL, -- Date type for storing dates as it supports date functions
    Salary DECIMAL(10, 2) NOT NULL -- Decimal type with precision and scale
);
-- Inserting Data into the Table
INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary) VALUES
('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00), -- Date format is 'YYYY-MM-DD'
('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00), -- Date format is 'YYYY-MM-DD'
('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00) -- Date format is 'YYYY-MM-DD';
-- Querying the Data from the Table
); 

SELECT * FROM Employees; -- Select all columns and all rows
SELECT FirstName, LastName, Email FROM Employees; -- Select specific columns
