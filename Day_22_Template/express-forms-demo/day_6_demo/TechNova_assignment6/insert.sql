/* 1. Insert Sample Records */
INSERT INTO Department VALUES
(101, 'IT', 'Bangalore'),
(102, 'HR', 'Delhi'),
(103, 'Finance', 'Mumbai'),
(104, 'Marketing', 'Hyderabad'),
(105, 'Operations', 'Chennai');

INSERT INTO Employee VALUES
(1, 'Asha', 'F', '1990-07-12', '2018-06-10', 101),
(2, 'Raj', 'M', '1988-04-09', '2020-03-22', 102),
(3, 'Neha', 'F', '1995-01-15', '2021-08-05', 101),
(4, 'Vikram', 'M', '1992-11-02', '2019-09-10', 103),
(5, 'Priya', 'F', '1996-05-27', '2022-02-15', 104);

INSERT INTO Project VALUES
(201, 'ERP Upgrade', 101, '2020-01-01', '2021-06-30'),
(202, 'Recruitment Drive', 102, '2021-03-01', '2021-12-31'),
(203, 'Budget Automation', 103, '2021-05-15', '2022-03-30'),
(204, 'Digital Marketing', 104, '2022-01-10', '2023-01-10'),
(205, 'Inventory Optimization', 105, '2021-07-01', '2022-06-30');

INSERT INTO Performance VALUES
(1, 201, 4.5, '2021-06-30'),
(2, 202, 3.9, '2021-12-20'),
(3, 201, 4.8, '2021-06-30'),
(4, 203, 4.2, '2022-03-25'),
(5, 204, 4.0, '2023-01-05');

INSERT INTO Reward VALUES
(1, '2023-01-01', 2500),
(2, '2023-02-01', 1800),
(3, '2023-03-01', 3200),
(4, '2023-04-01', 950),
(5, '2023-05-01', 2100);
