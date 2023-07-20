--Question:
--Consider two tables: employees and departments. The employees table contains 
--information about employees, including their salary, and the departments table contains information about different departments.
 --Write an SQL query to retrieve the department name and the average salary of employees within each department. 
 --The output should include all department names, even if there are no employees in a particular department.

-- SELECT column_name(s)
-- FROM table1
-- LEFT JOIN table2
-- ON table1.column_name = table2.column_name;

CREATE TABLE departments (
  department_id INT PRIMARY KEY,
  department_name VARCHAR(100)
);

CREATE TABLE employees (
  employee_id INT PRIMARY KEY,
  employee_name VARCHAR(100),
  salary DECIMAL(10, 2),
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- COALESCE to handle cases where a department has no employees. When we calculate the average salary using AVG(e.salary) for each department, if a department has no employees, the result of AVG(e.salary) will be NULL

SELECT d.department_name, COALESCE(AVG(e.salary), 0.00) AS average_salary
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name;

--ON joins statements by specifie info, and is used to match rows from tables with specified condition
--GROUP BY GROUPS ROWS WITH IDENTICAL VALUES IN TO SUMMARY COLLUMNS, AND CAN BE USED FOR THINGS LIKEGETTING THE SUM OR IN THE CASE AVERAGE, IT ALLOWS ONE TO PERFORM CALCULATIONS

--  GROUP BY d.department_name clause groups the result set by the department_name column from the departments table. 
--  This allows us to get the average salary for each department separately.

-- GROUP BY clause: The GROUP BY clause is used to group rows with identical values in one or more columns into summary rows. When used with aggregate functions like AVG, SUM, COUNT