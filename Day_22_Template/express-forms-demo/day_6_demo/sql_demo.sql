 CREATE DATABASE Employeeedb;

  use Employeeedb;


  CREATE TABLE IF NOT EXISTS Employees (
        EmployeeID INT PRIMARY KEY AUTO_INCREMENT, -- Primary Key with Auto Increment when we dont want user to provide value for this column   
       FirstName VARCHAR(50) NOT NULL,
      LastName VARCHAR(50) NOT NULL,
       Email VARCHAR(100) UNIQUE NOT NULL,
       HireDate DATE NOT NULL, -- Date type for storing dates as it supports date functions
        Salary DECIMAL(10, 2) NOT NULL -- Decimal type with precision and scale
    );


    INSERT INTO Employees (FirstName, LastName, Email, HireDate, Salary)
     VALUES
       ('John', 'Doe', 'john.doe@example.com', '2023-01-15', 60000.00),
      ('Jane', 'Smith', 'jane.smith@example.com', '2023-02-20', 65000.00),
       ('Alice', 'Johnson', 'alice.johnson@example.com', '2023-03-10', 70000.00);



        SELECT * FROM Employees;


        




