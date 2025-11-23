UPDATE Employee
SET DeptID = 105
WHERE EmpID = 5;

/* 3. Delete one reward record where the amount is less than 1000 */
DELETE FROM Reward
WHERE RewardAmount < 1000;
