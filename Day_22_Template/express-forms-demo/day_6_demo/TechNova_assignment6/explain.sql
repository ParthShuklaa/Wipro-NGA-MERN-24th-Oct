START TRANSACTION;

INSERT INTO Employee VALUES (6, 'Kiran', 'M', '1994-09-09', '2023-11-01', 101);
INSERT INTO Performance VALUES (6, 201, 4.6, '2023-11-01');

-- If any insert fails, rollback
ROLLBACK;

-- If all good, commit
COMMIT;


/* Example (without index) */
EXPLAIN
SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance p ON e.EmpID = p.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID;

/* After Index Optimization */
CREATE INDEX idx_proj_deptid ON Project(DeptID);

EXPLAIN
SELECT e.EmpName, d.DeptName, pr.ProjectName, p.Rating
FROM Employee e
JOIN Department d ON e.DeptID = d.DeptID
JOIN Performance p ON e.EmpID = p.EmpID
JOIN Project pr ON p.ProjectID = pr.ProjectID;