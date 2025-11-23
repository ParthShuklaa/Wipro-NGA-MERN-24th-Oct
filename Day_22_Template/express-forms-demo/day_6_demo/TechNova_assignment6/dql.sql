/* 1. Retrieve all employees who joined after 2019-01-01 */
SELECT EmpName, HireDate
FROM Employee
WHERE HireDate > '2019-01-01';

/* 2. Average performance rating of employees in each department */
SELECT d.DeptName, AVG(p.Rating) AS Avg_Rating
FROM Performance p
JOIN Employee e ON p.EmpID = e.EmpID
JOIN Department d ON e.DeptID = d.DeptID
GROUP BY d.DeptName;

/* 3. List employees with their age */
SELECT EmpName,
       TIMESTAMPDIFF(YEAR, DOB, CURDATE()) AS Age
FROM Employee;

/* 4. Find total rewards given in the current year */
SELECT YEAR(RewardMonth) AS Year,
       SUM(RewardAmount) AS Total_Rewards
FROM Reward
WHERE YEAR(RewardMonth) = YEAR(CURDATE())
GROUP BY YEAR(RewardMonth);

/* 5. Retrieve employees who have received rewards greater than 2000 */
SELECT e.EmpName, r.RewardAmount
FROM Employee e
JOIN Reward r ON e.EmpID = r.EmpID
WHERE r.RewardAmount > 2000;