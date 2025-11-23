/* 1. Display Employee Name, Department Name, Project Name, and Rating */
SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance p ON e.EmpID = p.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID;

/* 2. Find highest-rated employee in each department */
SELECT d.DeptName, e.EmpName, p.Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
WHERE p.Rating = (
    SELECT MAX(p2.Rating)
    FROM Performance p2
    JOIN Employee e2 ON p2.EmpID = e2.EmpID
    WHERE e2.DeptID = d.DeptID
);

/* 3. List employees who have not received any rewards */
SELECT EmpName
FROM Employee
WHERE EmpID NOT IN (SELECT EmpID FROM Reward);